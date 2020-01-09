const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')

// const cors = require('koa2-cors')
// app.use(cors())

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