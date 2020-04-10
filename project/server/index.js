const Koa = require('koa')
const mongoose = require('mongoose')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchemas } = require('./database/init')
const router = require('./routes')

;(async () => {
    await connect()     // 连接数据库

    initSchemas()       // 初始化 schema

    // require('./tasks/movies')   // 执行任务：爬取电影数据，并存到数据库
    // require('./tasks/douban_api')
})()

app
    .use(router.routes())
    .use(router.allowedMethods())   // 允许基本方法

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