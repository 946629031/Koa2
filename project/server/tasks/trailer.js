const cp = require('child_process')
const { resolve } = require('path')

;(async () => {     // 自动执行函数
    const script = resolve(__dirname, '../crawler/movie')
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
        console.log(data)
    })

})()