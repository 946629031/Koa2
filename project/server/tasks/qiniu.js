// 我们需要把 电影的 预告片视频，图片 上传到 七牛图床 上去

const qiniu = require('qiniu')
const nanoid = require('nanoid')    // 随机ID生成器
const config = require('../config')

const bucket = config.qiniu.bucket
const mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK)
const cfg = new qiniu.conf.Config()
const client = new qiniu.rs.BucketManager(mac, cfg)        // 七牛上传对象

const uploadToQiniu = async (url, key) => {
    return new Promise((resolve, reject) => {
        client.fetch(url, bucket, key, (err, ret, info) => {    // client.fetch 能够获取网络静态资源
            if (err) {
                reject(err)
            } else {
                if (info.statusCode == 200) {
                    resolve({ key })
                } else {
                    reject(info)
                }
            }
        })
    })
}



;(async () => {
    let movies = [{
        doubanID: 27119724,
        coverImage: 'https://img1.doubanio.com/img/trailer/medium/2567151398.jpg',
        video: 'http://vt1.doubanio.com/202001181136/1916c3c70a7f98a747790516303480e4/view/movie/M/402510982.mp4',
        poster: 'https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2567198874.jpg'
    }]

    movies.map(async movie => {
        if (movie.video && !movie.key) {
            try {
                console.log('开始传 video')

                let videoData = await uploadToQiniu(movie.video, nanoid() + '.mp4')

                console.log('开始传 coverImage')

                let coverImageData = await uploadToQiniu(movie.coverImage, nanoid() + '.jpg')

                console.log('开始传 poster')

                let posterData = await uploadToQiniu(movie.poster, nanoid() + '.jpg')

                if (videoData.key) {
                    movie.videoKey = videoData.key
                }
                if (coverImageData.key) {
                    movie.coverImageKey = coverImageData.key
                }
                if (posterData.key) {
                    movie.posterKey = posterData.key
                }
                console.log('正确 ', movie)
            } catch (err) {
                console.log('错误', err)
            }
        }
    })
    
})()