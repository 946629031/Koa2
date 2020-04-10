const cp = require('child_process')
const { resolve } = require('path')
const mongoose = require('mongoose')        // 1.引入mongoose
const Movie = mongoose.model('Movie')       // 2.拿到 Movie 数据模型

;(async () => {     // 自动执行函数
    const script = resolve(__dirname, '../crawler/trailer-list')
    const child = cp.fork(script, [])       // fork 可以派生出一个子进程。通过 child_process.fork 来执行我们要 跑的脚本
    let invoked = false             // 表示 这个脚本是否有 执行过

    child.on('error', err => {
        if (invoked) return         // 如果执行过，直接 return

        invoked = true

        console.log(err)
    })

    child.on('exit', code => {
        if (invoked) return

        invoked = true
        let err = code === 0 ? null : new Error('exit code ' + code)

        console.log(err)
    })

    child.on('message', data => {
        let result = data.result

        // console.log(result)
        // 3.遍历 result
        result.forEach(async item => {

            // Movie.findOne 数据查找
            let movie = await Movie.findOne({
                doubanID: item.doubanID
            })

            // 如果存储过，就没必要在存了
            // 如果没有存储过，才保存
            if (!movie) {
                movie = new Movie(item)     // 创建数据
                await movie.save()
            }
        })
    })

})()