const rp = require('request-promise-native')    // 引入发起请求的库.  request-promise-native 实际上就是 request 的上层封装
const mongoose = require('mongoose')        // 1.引入mongoose
const Movie = mongoose.model('Movie')       // 2.拿到 Movie 数据模型
const Category = mongoose.model('Category')


async function fetchMovie (item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanID}?apikey=0df993c66c0c636e29ecbb5344252a4a`

    let res = await rp(url)

    try {
        res = JSON.parse(res)
    } catch(err) {
        console.log(err)
    }

    return res
}

;(async () => {
    // let movies = [
    //     {
    //         doubanID: 27119724,
    //         title: '小丑',
    //         rate: 8.7,
    //         poster: 'https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2567198874.jpg'
    //     },
    //     {
    //         doubanID: 26100958,
    //         title: '复仇者联盟4：终局之战',
    //         rate: 8.5,
    //         poster: 'https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2552058346.jpg'
    //     }
    // ]

    // 3.把原本写死的数据 改成 从数据库查询的数据
    let movies = await Movie.find({
        // 满足下面几种条件的，说明数据不完整，我们可以重新再爬取一次
        // 我们通过一个 $or 或 的条件
        // 满足这么几种条件的数据 都可以被拿出来
        $or: [
            { summary: { $exists: false } },    // 这个字段没有，刚刚被插进去，还没有被精加工的
            { summary: null },  // 第二种情况是 null 的情况
            { title: '' },
            { year: { $exists: false } },
            { summary: '' }
        ]
    })


    // 拿到数据之后

    // 由于豆瓣 api 每天数据请求次数有限制，所以每次测试的时候 只跑一条数据
    for (let i = 0; i < movies.length; i++) {
    // for (let i = 0; i < [movies[0]].length; i++) {   // 这一句代码 等价于 下面一句
    // for (let i = 0; i < 1; i++) {
        let movie = movies[i]
        let movieData = await fetchMovie(movie)     // 请求数据

        if (movieData) {    // 如果成功拿到 数据
            movie.tags = movieData.tags || []
            movie.summary = movieData.summary || ''
            movie.title = movieData.title || ''
            movie.original_title = movieData.original_title || []   // 原始标题
            movie.movieTypes = movieData.genres || []       // genres 电影类型
            movie.year = movieData.year || '未知上映年份'

            
            // 对于 movieTypes  当一个电影类目创建之后，我们要把这个 ref 也指向这个 category
            for (let i = 0; i < movie.movieTypes.length; i++) {
                let item = movie.movieTypes[i]

                let cat = await Category.findOne({      // 查询 电影分类数据库里 有没有这个电影
                    name: item
                })                
    
                // 如果不存在 这个电影分类
                if (!cat) {
                    cat = new Category({
                        name: item,             // 将该分类存入
                        movies: [movie._id]      // 并将该 电影id 存入
                    })
                } else {
                    // 如果这个 电影分类 存在，我们再来判断一下 是否保存过 这部电影的id
                    if (cat.movies.indexOf(movie._id) === -1) {
                        cat.movie.push(movie._id)    // 如果不存在，则保存
                    }
                }
                
                // await cat.save()    // 保存数据
                // 这里如果取消注释，不知道为什么 程序好像就被卡住了  不动了


                // 然后再检查 movie.category 
                if (!movie.category) {
                    movie.category.push(cat._id)    // 如果为空，就将其 电影id 保存进去
                } else {
                    // 如果不为空，我们就 就来检查一下，看看有没有 存过 当前的 category
                    if (movie.category.indexOf(cat._id) === -1) {   // 如果没有
                        movie.category.push(cat._id)
                    }
                    // 如果有的话，就不做任何处理
                }
            }

            // movie.movieTypes.forEach(async item => {
            // })


            // 以下是上映日期的处理
            let dates = movieData.pubdates || []     // 拿到电影的上映日期
            let pubdates = []   // 声明上映日期

            dates.map(item => {
                if (item && item.split('(').length > 0) {
                    let parts = item.split('(')
                    let date = parts[0]
                    let country = '未知'

                    if (parts[1]) {
                        country = parts[1].split(')')[0]
                    }

                    pubdates.push({
                        date: new Date(date),
                        country
                    })
                }
            })

            movie.pubdate = pubdates
        }

        // console.log(typeof movie, movie)
        await movie.save()
    }
})()