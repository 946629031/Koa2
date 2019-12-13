const fs = require('fs')

// 1.回调方式
fs.readFile('./1-3 Promise.js', (err, data) =>{
    if (err) throw err

    console.log(data.toString())
})




// // 2.使用Promise 过渡时期 2017
function readFileAsync (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

readFileAsync('./1-3 Promise.js')
    .then(data => {
        console.log(data.toString())
    })
    .catch(err => {
        console.log(err)
    })




// 3.
// Node.js 进入 v8.x 版本以后
// 我们就可以使用 nodejs util 模块提供的 promisify 让我们可以轻易的 包装一个 回调式的 Api ，让它直接支持 promise
const util = require('util')

util.promisify(fs.readFile)('./1-3 Promise.js')
    .then(data => {
        console.log(data.toString())
    })
    .catch(err => {
        console.log(err)
    })


util.promisify()  // 传入某一个回调函数，这里传入 fs.readFile ，fs.readFile 它本身是一个回调的异步函数
util.promisify(fs.readFile) // 我们把这个函数包装之后，它会返回一个 promise function，再来调用
util.promisify(fs.readFile)('./1-3 Promise.js') // 后面的这个 () 才是传参数





ZSH_THEME="robbyrussell"

plugins=(git
    zsh-autosuggestions
    zsh-syntax-highlighting)

monaco