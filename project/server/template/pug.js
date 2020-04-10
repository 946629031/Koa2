module.exports = `
doctype html
html
    head
        meta(charset="utf-8")
        meta(name="viewport", content="width=device-width, initial-scale=1")
        title Koa Server Pug
        link(href="https://cdn.bootcss.com/animate.css/3.7.2/animate.css" rel="stylesheet")
        script(src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js")
    body
        .container
            .row
            .clo-md-8
                h1 Hi #{you}
                p This is #{me}
            .clo-md-4
                p 测试动态 Pug 页面
`