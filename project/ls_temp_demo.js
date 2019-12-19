const fs = require('fs')

// 过去回调函数  控制异步流程
// function readFile (callback) {
//     fs.readFile('./package.json', (err, data) => {
//         if (err) return callback(err)
//         callback && callback(null, data)
//     })
// }

// readFile((err, data) => {
//     if (err) throw err
//     data = JSON.parse(data)
//     console.log(data)
// })



// 第二阶段 promise
function readFileAsync (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

readFileAsync('./package.json')
    .then(data => {
        data = JSON.parse(data)
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })


// 第三个阶段  剑走偏锋  co + generator function + Promise
// 借助 co 让generator function自动迭代完毕
const co = require('co')
const util = require('util')

co(function *() {
    let data = yield util.promisify(fs.readFile)('./package.json')
    data = JSON.parse(data)
    console.log(data)
})


// 第四个阶段  Async function 统一世界
const readAsync = util.promisify(fs.readFile)

async function init () {
    let data = await readAsync('./package.json')
    data = JSON.parse(data)
    console.log(data)
}

init()