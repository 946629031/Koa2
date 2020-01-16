const mongoose = require('mongoose')
const DATABASE_URL = 'mongodb://localhost/douban-trailer' // 数据库地址
// const DATABASE_URL = 'mongodb://127.0.0.1:27017/'

mongoose.Promise = global.Promise               // 指定 Promise 是 node 原生 promise，而不是 mongoose 自带的 promise

function _connect() {
    // console.log('you in _connect')
    // mongoose.connect(db, {                      // 连接数据库, 填入地址
    //     // useUnifiedTopology: true,
    //     useNewUrlParser: true,
    // })

    mongoose.connect(DATABASE_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }, (err, connection) => {
        if(err) {
            console.error(err)
            return
        }    
        // console.log('Connected to DB');
    }).catch(err => console.log(err));
}

exports.connect = () => {      
    let maxConnectTimes = 0

    /* 为什么要返回 promise？
     * 是为了 让我们 在外面，确保连到数据库之后，继续后面 的代码
     */
    return new Promise((resolve, reject) => {

        // 暴露一个 connect 方法
        if (process.env.NODE_ENV !== 'production') {    // 判断是不是 生产环境
            mongoose.set('debug', true)             // 打印日志内容
        }
    
        _connect()
    
        mongoose.connection.on('disconnected', () => {   // 当断开连接时
            maxConnectTimes ++
            if (maxConnectTimes < 5) {
                _connect()
            } else {
                throw new Error('Disconnected: 数据库重连超过5次，并失败了')
                // console.log('Disconnected: 数据库重连超过5次，并失败了')
            }
        })
    
        mongoose.connection.on('error', err => {

            maxConnectTimes ++
            if (maxConnectTimes < 5) {
                _connect()
            } else {
                // throw new Error('Error: 数据库重连超过5次，并失败了')
                console.log('Error: 数据库重连超过5次，并失败了')
                reject(err)
            }
        })
    
        mongoose.connection.once('open', () => {
            console.log('MongoDB Connected Successfully !')
            resolve()
        })

    })
}