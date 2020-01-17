// 电影分类模型

const mongoose = require('mongoose')      // 使用 mongoose 来建模
const Schema = mongoose.Schema      // 拿到建模工具
const ObjectID = Schema.Types.ObjectID

// 基于数据模型的定义
const categorySchema = new Schema({
    name: {  // 增加一个 name 字段
        unique: true,
        type: String
    }, 
    movies: [{
        type: ObjectID,
        ref: 'Movie'     // 建立一个 引用关系，关联关系 关联表. 这里让它关联 Movie 表
    }],
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

categorySchema.pre('save', next => {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
})

mongoose.model('Category', categorySchema)    // mongoose.model 发布 model // 传入模型名字 Movie，具体的 Schema