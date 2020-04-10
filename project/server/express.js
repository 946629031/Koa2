const express = require('express')
const app = express()

const indent = (n) => new Array(n).join('&nbsp;')

const mid1 = () => {
    return (req, res, next) => {
        res.body = `<h3>请求 => 第一层中间件</h3>`
        next()
        res.body += `<h3>请求 <= 第一层中间件</h3>`
    }
}

const mid2 = () => {
    return (req, res, next) => {
        res.body += `<h3>请求${indent(4)} => 第二层中间件</h3>`
        next()
        res.body += `<h3>请求${indent(4)} <= 第二层中间件</h3>`
    }
}

const mid3 = () => {
    return (req, res, next) => {
        res.body += `<h3>请求${indent(8)} => 第三层中间件</h3>`
        next()
        res.body += `<h3>请求${indent(8)} <= 第三层中间件</h3>`
    }
}

app.use(mid1())
app.use(mid2())
app.use(mid3())

app.get('/', (req, res, next) => {
    res.send( `${res.body}<p style="color: #f60">${indent(12)}Express 核心处理业务</p>`)
})

app.listen(2334)