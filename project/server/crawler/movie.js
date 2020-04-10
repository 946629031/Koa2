const puppeteer = require('puppeteer')

console.log('You in...')

const url = 'https://movie.douban.com/subject/'
const doubanID = 27119724
// const video = 'https://movie.douban.com/trailer/243269/'

const sleep = time => new Promise( resolve => {
    setTimeout(resolve, time)
})

;(async () => {
    console.log('Start visit the target page...')

    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        dumpio: false
    })

    const page = await browser.newPage()
    await page.goto( url + doubanID, {
        waitUntil: 'networkidle2'    // 当网络空闲时。说明网络资源加载完毕
    })

    await sleep(3000)   // 网络空闲时，再继续等待3秒

    // 获取网页内容
    const result = await page.evaluate(() => {
        var $ = window.$        // 由于页面中 本身加载了 jQuery，所以这里直接使用就行
        var it = $('.related-pic-video')

        if ( it && it.length > 0 ) {        // 如果这个 div 存在
            var link = it.attr('href')
            var coverImage = it.attr('style')
            
            return {
                link,
                coverImage
            }
        }

        return {}
    })



    let video

    if (result.link) {      // 如果有视频 预告片
        await page.goto(result.link, {      // page.goto   页面跳转
            waitUntil: 'networkidle2'
        })
        await sleep(2000)

        video = await page.evaluate( () => {
            var $ = window.$    // 获取 jquery
            var it = $('source')

            if ( it && it.length > 0 ) {
                return it.attr('src')
            }

            return ''   // 如果没有视频
        })
    }

    // 数据拼装
    const data = {
        doubanID,
        coverImage: result.coverImage,
        video
    }


    browser.close()

    console.log(data)

    process.send(data)      // 将结果发送出去
    process.exit(0)             // 退出程序
})()