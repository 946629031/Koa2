const mongoose = require('mongoose')      // 使用 mongoose 来建模
const Schema = mongoose.Schema      // 拿到建模工具
const { Mixed, ObjectID } = Schema.Types

// 基于数据模型的定义
const movieSchema = new Schema({
    doubanID: {
        unique: true,   // 排除两部 相同的电影
        type: String
    },

    category: {
        type: ObjectID,
        ref: 'Category'     // 关联表
    },

    rate: Number,
    title: String,
    summary: String,
    video: String,
    poster: String,
    cover: String,      // 封面图

    // 由于上面的 爬取数据时 获取到的原始地址
    // 下面这里 是存 你转存后的图床地址  对象存储的地址
    videoKey: String,
    posterKey: String,
    coverKey: String,

    rawTitle: String,   // 原始标题
    movieTypes: [String],    // 电影类型。 声明为 数组，数组内 每一个值都是 String
    pubdate: Mixed,     // 上映日期
    year: Number,       // 上映年份
    tags: [String],        // 标签

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

// 创建时间 更新时间  中间件的实现
movieSchema.pre('save', next => {   // pre save 就是保存之前
    if (this.isNew) {
        this.meta.createdAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }

    next()
})


mongoose.model('Movie', movieSchema)     // mongoose.model 发布 model // 传入模型名字 Movie，具体的 Schema
