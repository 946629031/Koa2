const co = require('co')
const fetch = require('node-fetch') // node-fetch 用于异步请求数据

// co(function *() {
//     const res = yield fetch('https://api.douban.com/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a')
//     const movie = yield res.json() // 将文本解析为 json，参考链接 Body.json()  https://developer.mozilla.org/zh-CN/docs/Web/API/Body/json
//     const summary = movie.summary

//     console.log('summary', summary)
// })




function run (generator) {
    const iterator = generator()
    const it = iterator.next()
    const promise = it.value

    promise.then(data => {
        const it2 = iterator.next(data)
        const promise2 = it2.value

        promise2.then(data2 => {
            iterator.next(data2)
        })
    })
}

run(function *() {
    const res = yield fetch('https://api.douban.com/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a')
    const movie = yield res.json() // 将文本解析为 json，参考链接 Body.json()  https://developer.mozilla.org/zh-CN/docs/Web/API/Body/json
    const summary = movie.summary

    console.log('summary', summary)
})