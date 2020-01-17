const Koa = require('koa')
const mongoose = require('mongoose')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchemas } = require('./database/init')

;(async () => {
    await connect()

    initSchemas()

    // 数据查询
    // mongoose.model() 就能拿到 这个model
    const Movie = mongoose.model('Movie')
    const movies = await Movie.find({})

    console.log(movies)
})()

app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}))

app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'Luke',
        me: 'Scoot'
    })
})

app.listen(2333)