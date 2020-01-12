const rp = require('request-promise-native')    // 引入发起请求的库.  request-promise-native 实际上就是 request 的上层封装

async function fetchMovie (item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanID}?apikey=0df993c66c0c636e29ecbb5344252a4a`

    const res = await rp(url)

    return res
}

;(async () => {
    let movies = [
        {
            doubanID: 27119724,
            title: '小丑',
            rate: 8.7,
            poster: 'https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2567198874.jpg'
        },
        {
            doubanID: 26100958,
            title: '复仇者联盟4：终局之战',
            rate: 8.5,
            poster: 'https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2552058346.jpg'
        }
    ]

    movies.map(async movie => {     // 遍历数组
        let movieData = await fetchMovie(movie)

        console.log(movieData)
    })
})()