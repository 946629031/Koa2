const mongoose = require('mongoose')      // 使用 mongoose 来建模
const bcrypt = require('bcrypt')        // 如果是比较老的版本 node ，就用 bcryptjs
const Schema = mongoose.Schema      // 拿到建模工具
const { Mixed, ObjectID } = Schema.Types
const SALT_WORK_FACTOR = 10
const MAX_LOGIN_ATTEMPTS = 5            // 最大登陆失败次数
const LOCK_TIME = 2 * 60 * 60 * 1000    // 登陆超过最大失败次数，锁定时间 2小时

// 基于数据模型的定义
const userSchema = new Schema({
    username: {
        unique: true,
        require: true,  // 是否必须传
        type: String
    },
    eamil: {
        unique: true,
        require: true,  // 是否必须传
        type: String
    },
    password: {
        // unique: true,
        tyep: String
    },
    loginAttempts: {
        type: Number,
        require: true,  // 是否必须传
        default: 0
    },
    lockUntil: Number,  // 如果登陆超过最大失败次数，记录 账户锁定到什么时候. 单位: ms

    meta: {     // 描述
        createdAt: {    // 这条数据被 创建时间
            type: Date,
            default: Date.now()
        },
        updateAt: {    // 更新时间
            type: Date,
            default: Date.now()
        }
    }
})


// 虚拟字段
// 虚拟字段不会被真正存到 数据库里
userSchema.virtual('isLocked').get(function () {
    // lockUntil 要被锁定到什么时候
    // lockUntil > Date.now() 是否已经过了有效期
    // 两次取反 拿到 true or false
    return !!(this.lockUntil && this.lockUntil > Date.now())        // 这里应该是 this.lockUntil < Date.now() 吧？
})


// 创建时间 更新时间  中间件的实现
userSchema.pre('save', function(next) {   // pre save 就是保存之前
    if (this.isNew) {
        this.meta.createdAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }

    next()
})


// 保存之前 对密码加密
userSchema.pre('save', function(next) {   // pre save 就是保存之前
    if (!this.isModified('password')) return next()  // 检查 password 是否更改，如果没有更改了 直接跳过

    // bcrypt 加密库
    // SALT_WORK_FACTOR 这个值是一个产量，这个值越大 构建对盐的复杂度 越高，消耗的计算机 算力越多
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err)      // 如果出错了 就跳过

        // 如果没错，我们拿到 盐值后, 我们通过 hash 对密码加密
        bcrypt.hash(this.password, salt, (error, hash) => {
            if (error) return next(error)

            this.password = hash    // 把 password 设置为 加盐加密的 hash值
            // 走到这一步，这个密码已经不在是 明文的密码了

            next()
        })
    })

    next()
})


// 比对密码
userSchema.methods = {
    // 密码比对
    comparePassword: (_password, password) => {
        // _password 是网站 提交过来的 password
        // 第二个 password 是 数据库中  加严加密后的 password

        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, isMatch) => {     // isMatch 比较的结果是 true / false
                if (!err) resolve(isMatch)      // 如果没有错误，把 isMatch 传出去
                else reject(err)
            })
        })
    },



    // 如果密码被频繁登陆，而且密码都是错的
    // 就对 这个 账号进行保护，锁定账号，通过其他方式登陆，如短信验证码
    // 每次密码输错 就+1

    // incLoginAttepts 就是用于 判断登陆次数 是否超过 登陆次数
    incLoginAttepts: (user) => {
        return new Promise((resolve, reject) => {
            // 如果用户已经被锁定
            if (this.lockUntil && this.lockUntil < Date.now()) {
                this.update({
                    $set: {     // 原子操作
                        loginAttempts: 1    // 设置为 1
                    },
                    $unset: {
                        lockUntil: 1    // 设置为 1
                    }
                }, (err) => {
                    if (!err) resolve(true)
                    else reject(err)
                })
            } else {
                let updates = {
                    $inc: {     // 通过 $inc 这个操作符
                        loginAttempts: 1    // +1
                    }
                }

                // 如果尝试登陆次数 大于 最大尝试次数
                // 而且 当前用户没被锁定
                if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
                    updates.$set = {
                        lockUntilL: Date.now() + LOCK_TIME
                    }
                }

                this.update(updates, err => {
                    if (!err) resolve(true)
                    else reject(err)
                })

            }
        })
    }
}


mongoose.model('User', userSchema)     // mongoose.model 发布 model // 传入模型名字 Movie，具体的 Schema