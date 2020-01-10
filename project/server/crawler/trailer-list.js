const puppeteer = require('puppeteer')


console.log('You in...')

const url = 'https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=rank&page_limit=20&page_start=0'

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
    await page.goto(url, {
        waitUntil: 'networkidle2'    // 当网络空闲时。说明网络资源加载完毕
    })

    await sleep(3000)   // 网络空闲时，再继续等待3秒

    await page.waitForSelector('.more')   // class='more' 的 div

    for (let i = 0; i < 1; i++ ) {         // 只点击按钮一次
        await sleep(3000)
        await page.click('.more')
    }


    // 获取网页内容
    const result = await page.evaluate(() => {
        var $ = window.$        // 由于页面中 本身加载了 jQuery，所以这里直接使用就行
        var items = $('.list-wp a')        // 获取本页面 所有电影列表的 item
        var links = []

        if (items.length >= 1) {           // 如果items 不为空
            items.each((index, item) => {
                let it = $(item)
                let doubanID = it.find('div').data('id')
                let title = it.find('p').html()
                let rate = Number(it.find('strong').text())
                let poster = it.find('img').attr('src')

                if(title){
                    title = title.replace(/[\s|\n\r]/g, '').replace(/<strong>([\s\S]*?)<\/strong>/, '')
                    // title = title.replace(/<strong>([\s\S]*?)<\/strong>/, '')
                    // title = title.replace(replace_str1, '').replace(replace_str2, '').replace(replace_str3, '')
                }
                if(poster){ // 如果存在。 如果不判断 可能会报错
                    poster = poster.replace('s_ratio', 'l_ratio')   // 将小图片 换成大图片
                }

                links.push({
                    doubanID,
                    title,
                    rate,
                    poster
                })
            })
        }

        return links
    })

    browser.close()

    console.log(result)


})()

'\n' +
      '                \n' +
      '\n' +
      '                我和我的祖国\n' +
      '\n' +
      '                \n' +
      '                    <strong>7.8</strong>\n' +
      '                \n' +
      '            '

      