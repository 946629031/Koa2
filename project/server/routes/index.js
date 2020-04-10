const Router = require('koa-router')
const mongoose = require('mongoose')
const router = new Router()


router.get('/movies/all', async (ctx, next) => {
    const Movie = mongoose.model('Movie')
    const movies = await Movie.find({}).sort({      // 拿到电影数据, 然后根据 创建时间 从最新到最旧 排序
        'meta.createdAt': -1
    })

    // 排序之后的 movies 就把他挂到 ctx.body 进行返回
    ctx.body = {
        movies
    }
})

// 电影详情
router.get('/movies/detail/:id', async (ctx, next) => {
    const Movie = mongoose.model('Movie')
    const id = ctx.params.id
    const movie = await Movie.findOne({_id: id})

    // 把拿到的数据结果, 挂载到 ctx.body 进行返回
    ctx.body = {
        movie
    }
})

module.exports = router