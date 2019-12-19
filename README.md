# Node.js Koa2框架搭建电影预告片网站
- Node.js Koa2 the movie trailer site

- 视频课程出品时间：2018年

----

## 课程大纲
- [第1章 2018 年的编程姿势](#第1章-2018-年的编程姿势)
    - [1-1 koa2导学](#1-1-koa2导学)
    - [1-2 安装跟进最新 node.js 版本](#1-2-安装跟进最新-node.js-版本)
    - [1-3 毫不犹豫的使用promise](#1-3-毫不犹豫的使用promise)
    - [1-4 使用babel 编译es7 async function](#1-4-使用babel-编译es7-async-function)
- [第2章 必会 ES6-7 语法特性与规范](#第2章-必会-ES6-7-语法特性与规范)
    - [2-1 generator 生成器函数 Iterator迭代器？](#2-1-generator-生成器函数-Iterator迭代器？)
    - [2-2 co 库执行 promise 和 generator function](#2-2-co-库执行-promise-和-generator-function)
    - [2-3 箭头函数 arrow function](#2-3-箭头函数-arrow-function)
    - [2-4 异步函数 asyunc function 统一世界](#2-4-异步函数-asyunc-function-统一世界)
    - [2-5 借助 babel 编译 import 与 export](#2-5-借助-babel-编译-import-与-export)
    - [2-6 生产环境使用 babel 支持 es6-7](#2-6-生产环境使用-babel-支持-es6-7)
- [第3章 层层学习 Koa 框架的 API](#第3章-层层学习-Koa-框架的-API)
    - [3-1 koa 核心对象](#3-1-koa-核心对象)
    - [3-2 web服务类 application](#3-2-web服务类-application)
    - [3-3 http 上下文对象 context（ctx）](#3-3-http-上下文对象-context（ctx）)
    - [3-4 http 请求对象 request（req）](#3-4-http-请求对象-request（req）)
    - [3-5 http 响应对象](#3-5-http-响应对象)
    - [3-6 koa 中间件 middlewares](#3-6-koa-中间件-middlewares)
    - [3-7 纯函数-尾递归与魔法大师 koa-compose](#3-7-纯函数-尾递归与魔法大师-koa-compose)
    - [3-8 session-cookie-路由 koa小结](#3-8-session-cookie-路由-koa小结)
- [第4章 Koa2 与 Koa1 、Express 框架对比](#第4章-Koa2-与-Koa1-、Express-框架对比)
    - [4-1 koa2与koa1 的用法对比](#4-1-koa2与koa1-的用法对比)
    - [4-2 koa 与 express 的api 能力对比](#4-2-koa-与-express-的api-能力对比)
    - [4-3 koa 与 express的中间件执行模板对比](#4-3-koa-与-express的中间件执行模板对比)
    - [4-4 koa2 espress 选型及小结（含奖励哦）](#4-4-koa2-espress-选型及小结（含奖励哦）)
- [第5章 从 0 开发一个电影预告片网站](#第5章-从-0-开发一个电影预告片网站)
    - [5-1 设计与分析](#5-1-设计与分析)
    - [5-2 行代码撸一个服务器推到git仓库](#5-2-行代码撸一个服务器推到git仓库)
    - [5-3 服务器返回一个静态 html页面](#5-3-服务器返回一个静态-html页面)
    - [5-4 集成模板引擎 koa 搭建初始模板目录](#5-4-集成模板引擎-koa-搭建初始模板目录)
    - [5-5 集成模板引擎到koa 搭建初始模板目录](#5-5-集成模板引擎到koa-搭建初始模板目录)
    - [5-6 借助 bootstrap 4-x 搭建网站首页](#5-6-借助-bootstrap-4-x-搭建网站首页)
- [第6章 利用爬虫搞定网站基础数据](#第6章-利用爬虫搞定网站基础数据)
    - [6-1 设计与分析](#6-1-设计与分析)
    - [6-2 利用 puppeteer 爬取和分析电影列表](#6-2-利用-puppeteer-爬取和分析电影列表)
    - [6-3 child_process fork 子进程来运行爬虫脚本](#6-3-child_process-fork-子进程来运行爬虫脚本)
    - [6-4 服务器端通过 request 向豆瓣 api 请求详细数据](#6-4-服务器端通过-request-向豆瓣-api-请求详细数据)
    - [6-5 scott 与妹子合租引发的同步异步与阻塞](#6-5-scott-与妹子合租引发的同步异步与阻塞)
    - [6-6 puppeteer 深度爬取封面图和视频地址](#6-6-puppeteer-深度爬取封面图和视频地址)
    - [6-7 上传线上封面图和视频搬砖到七牛云图床上](#6-7-上传线上封面图和视频搬砖到七牛云图床上)
- [第7章 彩蛋篇 - [高难度拔高干货] 深度理解 Node.js 异步 IO 模型](#第7章-彩蛋篇---[高难度拔高干货]-深度理解-Node.js-异步-IO-模型)
    - [7-1 从异步非阻塞的代码案例切入事件循环](#7-1-从异步非阻塞的代码案例切入事件循环)
    - [7-2 从异步非阻塞的代码案例切入事件循环](#7-2-从异步非阻塞的代码案例切入事件循环)
    - [7-3 从libuv 源码来理解event loop的六个阶段](#7-3-从libuv-源码来理解event-loop的六个阶段)
    - [7-4 设计一个测试用例来验证自己对事件循环的理解](#7-4-设计一个测试用例来验证自己对事件循环的理解)
- [第8章 实战篇 - 在 Koa 中向 MongoDB 建立数据模型](#第8章-实战篇---在-Koa-中向-MongoDB-建立数据模型)
    - [8-1 windows mac centos ubuntu安装mongodb-1](#8-1-windows-mac-centos-ubuntu安装mongodb-1)
    - [8-2 koa2 中利用 mongoose链接数据库](#8-2-koa2-中利用-mongoose链接数据库)
    - [8-3 mongodb和mongoose关于 collection schema model entity 的基本](#8-3-mongodb和mongoose关于-collection-schema-model-entity-的基本)
    - [8-4 利用 schema model创建电影的数据模型](#8-4-利用-schema-model创建电影的数据模型)
    - [8-5 创建用户数据模型并实现加盐加密和敏感登控制](#8-5-创建用户数据模型并实现加盐加密和敏感登控制)
    - [8-6 创建电影分类以及初始化所有](#8-6-创建电影分类以及初始化所有)
    - [8-7 向数据库导入爬到的电影数据](#8-7-向数据库导入爬到的电影数据)
- [第9章 实战篇 - 为网站增加路由与控制器层对外提供 API 服务](#第9章-实战篇---为网站增加路由与控制器层对外提供-API-服务)
    - [9-1 第二次迭代快速实现一个最小统计的api服务器](#9-1-第二次迭代快速实现一个最小统计的api服务器)
    - [9-2 第二次迭代了解koa-router的基本能力以及取舍套路](#9-2-第二次迭代了解koa-router的基本能力以及取舍套路)
    - [9-3 通过装饰器来把路由进行拆分和继承](#9-3-通过装饰器来把路由进行拆分和继承)
    - [9-4 结合decorator 对 koa-router 进行抽象封装支持路由空间](#9-4-结合decorator-对-koa-router-进行抽象封装支持路由空间)
    - [9-5 分拆项目服务层与路由层对外暴露api服务](#9-5-分拆项目服务层与路由层对外暴露api服务)
- [第10章 实战篇 - 集成 AntDesign 与 Parcel 打通前后端与构建](#第10章-实战篇---集成-AntDesign-与-Parcel-打通前后端与构建)
    - [10-1 第三次迭代 配置babel postcss来支持 parcel 的打包构建](#10-1-第三次迭代-配置babel-postcss来支持-parcel-的打包构建)
    - [10-2](#10-2)
    - [10-3 第三次迭代 结合 react-router-dom 与import 来动态加载前端路由](#10-3-第三次迭代-结合-react-router-dom-与import-来动态加载前端路由)
    - [10-4 第三次迭代 实现网站的布局模板组件和导航菜单](#10-4-第三次迭代-实现网站的布局模板组件和导航菜单)
- [第11章 实战篇 - 实现网站前端路由与页面功能](#第11章-实战篇---实现网站前端路由与页面功能)
    - [11-1 第四次迭代 axios封装可控制](#11-1-第四次迭代-axios封装可控制)
    - [11-2 第四次迭代 开发网站首页电影列表](#11-2-第四次迭代-开发网站首页电影列表)
    - [11-3 第四次迭代 抽象网站首页电影卡片内容组件](#11-3-第四次迭代-抽象网站首页电影卡片内容组件)
    - [11-4 第四次迭代 为电影卡片增加视频播放及切换功能](#11-4-第四次迭代-为电影卡片增加视频播放及切换功能)
    - [11-5 第四次迭代 开发电影详情页](#11-5-第四次迭代-开发电影详情页)
- [第12章 实战篇 - 实现后台登录权限与管理功能](#第12章-实战篇---实现后台登录权限与管理功能)
    - [12-1 实现网站的后端登录页面及密码校检](#12-1-实现网站的后端登录页面及密码校检)
    - [12-2 实现网站后端管理列表页](#12-2-实现网站后端管理列表页)
    - [12-3 增加登录权限](#12-3-增加登录权限)
    - [12-4 增加用户会话](#12-4-增加用户会话)
- [第13章 服务器部署与发布](#第13章-服务器部署与发布)
    - [13-1 简单配置本地与服务器](#13-1-简单配置本地与服务器)
    - [13-2 服务器第一次部署与发布](#13-2-服务器第一次部署与发布)
- [第14章 课程总结与展望](#第14章-课程总结与展望)
    - [14-1 koa2 课程回顾总结](#14-1-koa2-课程回顾总结)

----


# 第1章 2018 年的编程姿势
- ## 1-1 koa2导学
    - 市场常见 Node.js Web 服务框架
        - Express
        - Koa
        - Sail
        - Hapi
    - 本课程概况
        - 做什么？
            - 开发一个可以实时更新的预告片网站
        - 有哪些功能？
            - 网站首页
            - 网站首页播放窗口
            - 网站播放详情页
            - 网站详情
            - 同类推荐
            - 网站后台登陆
            - 网站后台管理列表
        - 技术栈？
            - Koa2
            - Nodejs
            - MongoDB
            - Puppeteer
            - Parcel
            - AntDesign
    - 解答 过去我们 遇到的问题？
        - Koa 框架到底为我们做了什么？
        - 他的内部到底是什么样子？
        - 他向下一直到 Node.js 底层，到底是怎么处理事件循环的？
        - 一个异步的 HTTP 过程，到底是怎么样进行的？

- ## 1-2 安装跟进最新 node.js 版本
    - https://node.green/
        - 查看 当前阶段 各个Node.js版本 对ECMA规范 实现的程度，及支持情况
    - NVM
        - 问题：本地如何管理 那么多的 Node.js 版本？
        - 什么是 NVM？
            - Node.js版本管理工具
        - 使用 NVM 这个 Node.js版本管理工具
        - 如何安装 NVM ？
            - 到 github [搜索](https://github.com/search?o=desc&q=nvm&s=stars&type=Repositories)
            - Mac / Linux 安装 NVM 方式
                - ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash```
            - 由于 Windows 和 Mac / Linux 的安装方式不同
                - [《nvm-windows github》Windows 安装 NVM](https://github.com/coreybutler/nvm-windows)
                - [nvm介绍 安装 及使用](https://www.jianshu.com/p/d0e0935b150a)
    - 如何使用 NVM
        ```shell
        nvm ls              #查看本地安装的node版本
        nvm install stable  # 安装最新稳定版 node，现在是 5.0.0
        nvm install 4.2.2   # 安装 4.2.2 版本
        nvm install 0.12.7  # 安装 0.12.7 版本

        # 特别说明：以下模块安装仅供演示说明，并非必须安装模块
        nvm use 4           # 切换至 4.2.2 版本
        npm install -g mz-fis # 安装 mz-fis 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v0.12.7/lib/mz-fis
        nvm use 0           # 切换至 0.12.7 版本
        npm install -g react-native-cli #安装 react-native-cli 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v4.2.2/lib/react-native-cli

        nvm alias default 0.12.7 #设置默认 node 版本为 0.12.7
        ```


- ## 1-3 毫不犹豫的使用promise
    - Promises 官网
        - https://www.promisejs.org/
    - Promises 是什么？
        - 问题来了，Promise是什么玩意呢？是一个类？对象？数组？函数？
        - 别猜了，直接打印出来看看吧，console.dir(Promise)，就这么简单粗暴。
        ```
        ➡ console.dir(Promise)
            ⬇ function Promise()
                ➡ all: function all()
                ➡ allSettled: function allSettled()
                    arguments: (...)
                    caller: (...)
                    length: 1
                    name: "Promise"
                ⬇ prototype: Promise
                   ➡  catch: function catch()
                   ➡  constructor: function Promise()
                   ➡  finally: function finally()
                   ➡  then: function then()
                      Symbol(Symbol.toStringTag): "Promise"
                   ➡  __proto__: Object
                ➡ race: function race()
                ➡ reject: function reject()
                ➡ resolve: function resolve()
                  Symbol(Symbol.species): (...)
                ➡ get Symbol(Symbol.species): function [Symbol.species]()
                ➡ __proto__: function ()
                ➡ [[Scopes]]: Scopes[0]
        ```
        - 这么一看就明白了
            ```
            - Promise是一个构造函数
            - 自己身上有 `all、reject、resolve` 这几个眼熟的方法
            - 原型上有 `then、catch` 等同样很眼熟的方法。
            - 这么说用Promise new出来的对象肯定就有then、catch方法喽，没错。
            ```

        - 古人云：“君子一诺千金”，这种 `“承诺将来会执行”` 的对象在JavaScript中称为Promise对象。
        - Promises 不是一个简单的语法糖
        - 而是一个规范
            - 如 bluebird 就实现了这个规范
        - 各种各样的库 都可以去实现这套规范，进而向我们 提供Promises能力的接口 函数
    - ### 1.在过去 我们使用 **回调方式**
        ```js
        const fs = require('fs')

        // 1.回调方式
        fs.readFile('./1-3 Promise.js', (err, data) =>{
            if (err) throw err

            console.log(data.toString())
        })
        ```
    - ### 2.使用Promise 过渡时期 ES6 (2015-2017左右)
        ```js
        const fs = require('fs')

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
        ```
        - 虽然这种写法 有点冗长，但是也没有什么弊端
    - ### 3.现在 util 的 promisify
        - Node.js 进入 v8.x 版本以后
        - 我们就可以使用 nodejs util 模块提供的 promisify 让我们可以轻易的 包装一个 回调式的 Api ，让它直接支持 promise
        ```js
        const fs = require('fs')
        const util = require('util')

        util.promisify(fs.readFile)('./1-3 Promise.js')
            .then(data => {
                console.log(data.toString())
            })
            .catch(err => {
                console.log(err)
            })
        ```
        - 解释
            - ```util.promisify()```
                - 传入某一个回调函数，这里传入 fs.readFile ，fs.readFile 它本身是一个回调的异步函数
            - ```util.promisify(fs.readFile)```
                - 我们把这个函数包装之后，它会返回一个 promise function，再来调用
            - ```util.promisify(fs.readFile)('./1-3 Promise.js')```
                - 后面的这个 () 才是传参数
        - 总结
            - 优点：减少了代码量。将原来 promise 方法中的 20行代码，减少到 10行
            - 在项目中遇到有 **回调处理异步的场景**，推荐大家 使用这种 promisify，来完成 从回调到 向promise 迁移到工作


- ## 1-4 使用babel 编译es7 async function
    - 先来看 这段 使用 async function 实现 上一节中的同样的功能
    ```js
    const fs = require('fs')
    const util = require('util')
    const readAsync = util.promisify(fs.readFile)

    async function init () {
        try {
            let data = await readAsync('./1-3 Promise.js')
            console.log(data.toString())
        } catch (err) {
            console.log(err)
        }
    }

    init()
    ```
    - 存在的问题
        - 使用这些新的语法，虽然用起来很爽
        - 但是，也带来一些问题
            - 当你的运行环境不支持 这些前卫的新语法时，就会导致无法正确运行代码。
            - 如：你在node v4.x 或者 v6.x 版本中使用时
        - 所以这个时候，就需要用到 babel 来编译, 将这些 旧版本不支持的新语法，编译成 他们能够识别执行的语法

# 第2章 必会 ES6-7 语法特性与规范
- ## 2-1 generator 生成器函数 Iterator迭代器？
    - 1.generator function
        - generator function 是ES6 新增的特性，node.js v4.x 版本后就可以直接使用了
        - generator function 的核心是 ```generator 生成器```
        - ```generator 生成器``` 的本质是 ```Iterator 迭代器```
        - 所以我们先要理解，什么是 ```Iterator 迭代器``` 这个概念
    - ### 2.什么是 Iterator 迭代器？
        - 定义：迭代器是一个拥有 next() 方法的特殊对象，每次调用 next() 都返回一个结果对象
        - Iterator 迭代器
            - 跟 Promise 一样，并不是 某一个具体的语法 或者 对象
            - 它是一个 **协议**
            - 只要遵循这个 协议 所实现的，都是迭代器对象
        - 下面来手写一个 Iterator 迭代器
            - 例1
                ```js
                function makeIterator (arr) {
                    let nextIndex = 0

                    // 返回一个迭代器对象
                    return {
                        next: () => {
                            // next() 方法返回的结果对象
                            if (nextIndex < arr.length) {
                                return { value: arr[nextIndex++], done: false }
                            } else {
                                return { done: true }
                            }
                        }
                    }
                }

                const it = makeIterator(['吃饭', '睡觉', '打豆豆'])

                console.log('首先', it.next().value)
                console.log('其次', it.next().value)
                console.log('然后', it.next().value)
                console.log('最后', it.next().done)

                // 打印结果
                首先 吃饭
                其次 睡觉
                然后 打豆豆
                最后 true
                ```
                - 这是一个非常简易的 Iterator 迭代器
            - 例2
                - 感受一下用ES5语法模拟创建一个迭代器：
                ```js
                function createIterator(items) {
                    var i = 0;
                    
                    return { // 返回一个迭代器对象
                        next: function() { // 迭代器对象一定有个next()方法
                            var done = (i >= items.length);
                            var value = !done ? items[i++] : undefined;
                            
                            return { // next()方法返回结果对象
                                value: value,
                                done: done
                            };
                        }
                    };
                }

                var iterator = createIterator([1, 2, 3]);

                console.log(iterator.next());  // "{ value: 1, done: false}"
                console.log(iterator.next());  // "{ value: 2, done: false}"
                console.log(iterator.next());  // "{ value: 3, done: false}"
                console.log(iterator.next());  // "{ value: undefiend, done: true}"
                // 之后所有的调用都会返回相同内容
                console.log(iterator.next());  // "{ value: undefiend, done: true}"
                ```
                - 下面我们来调用 一下 迭代器
                    ```js
                    var colors = ["red", "green", "blue"];
                    var iterator = createIterator(colors);
                    while(!iterator.next().done){
                        console.log(iterator.next().value);
                    }
                    ```
                    - createIterator()只需写一次，就可以一直复用
        - ### Iterator 迭代器 特征
            ```
            - 以上，我们通过调用createIterator()函数，返回一个对象
            - 这个对象存在一个next()方法
            - 当next()方法被调用时，返回格式 { value: 1, done: false} 的结果对象。
            - 因此，我们可以这么定义：迭代器是一个拥有next()方法的特殊对象，每次调用next()都返回一个结果对象。
            ```
            - 参考文章 [ES6系列---迭代器（Iterator）与生成器（Generator）](https://segmentfault.com/a/1190000010747122)
            ```
            - 每一次迭代的值，都是跟上一次迭代的值 有关系的，它是处于上一个值，下一个序列中 即将被执行的链路
            - 每一次迭代的值，都反映了 迭代器内部的状态
            - 这些状态的组合 是一个完整的状态流程
            - 我们通过 next 方法，依次拿到某个状态的值
            - 迭代器内部 总有一个 next 方法，通过它 总能拿到一个对象
            - 其中 value 是某一次迭代的结果，done 是当前是否迭代完成的标志
            ```
    - ### 3.generator 生成器
        - 1.什么是 generator 生成器？
            - ```generator 生成器函数``` 是一个可以 `生成迭代器` 的函数 (返回迭代器)
            - 我们本质上 来是在操作 迭代器，只不过 借助于生成器函数 来完成这个过程
            - ES6引入了生成器对象，可以让创建迭代器的过程变得更加简单。
        - #### 2.generator 生成器 特征
            - generator 生成器 比普通 function 多一个 * 星号
            - 生成器 每一次迭代，都是通过 yield 关键字来实现
        - 3.来看一下 如何使用 generator 生成器
            - 例1
                ```js
                function *makeIterator (arr) {
                    for (let i = 0; i < arr.length; i++) {
                        yield arr[i]
                    }
                }

                const it = makeIterator(['吃饭', '睡觉', '打豆豆'])

                console.log('首先', it.next().value)
                console.log('其次', it.next().value)
                console.log('然后', it.next().value)
                console.log('最后', it.next().done)

                // 打印结果
                首先 吃饭
                其次 睡觉
                然后 打豆豆
                最后 true
                ```
            - 例2
                ```js
                function *createIterator(items) {
                    for(let i=0; i<items.length; i++) {
                        yield items[i];
                    }
                }

                let iterator = createIterator([1, 2, 3]);

                // 既然生成器返回的是迭代器，自然就可以调用迭代器的next()方法
                console.log(iterator.next());  // "{ value: 1, done: false}"
                console.log(iterator.next());  // "{ value: 2, done: false}"
                console.log(iterator.next());  // "{ value: 3, done: false}"
                console.log(iterator.next());  // "{ value: undefiend, done: true}"
                // 之后所有的调用都会返回相同内容
                console.log(iterator.next());  // "{ value: undefiend, done: true}"
                ```
                ```
                - 上面，我们用 `ES6` 的生成器，大大简化了迭代器的创建过程。
                - 我们给生成器函数 createIterator() 传入一个items数组，
                - 函数内部，for循环不断从数组中 **生成新的元素放入迭代器中**，
                - 每遇到一个 `yield` 语句循环都会停止；
                - 每次调用迭代器的next()方法，循环便继续运行并停止在下一条 `yield` 语句处。
                ```
        - #### 4.总结
                - 通过 generator 生成器，我们实现了 跟上面 Iterator 迭代器 一样的结果
                - 生成器的出现，就是为了简化掉 我们以前需要 手写 这一大坨 返回的迭代器对象
                - **生成器** 就是 为了更方便 我们使用 **迭代器** 而出现的
                - 简化掉 我们手写 迭代器的过程
                - 通过 yield 关键字，我们还能够做到 断点执行，一步一步调用 的效果
            ```js
            // 返回一个迭代器对象
            return {
                next: () => {
                    // next() 方法返回的结果对象
                    if (nextIndex < arr.length) {
                        return { value: arr[nextIndex++], done: false }
                    } else {
                        return { done: true }
                    }
                }
            }
            ```


            - [参考资料 《generator-认识生成器函数 - ES6 新语法入门 石川》](https://github.com/946629031/hello-ES6#13generator-%E8%AE%A4%E8%AF%86%E7%94%9F%E6%88%90%E5%99%A8%E5%87%BD%E6%95%B0)

- ## 2-2 co 库执行 promise 和 generator function
    - ### 1.什么是 co ？
        - https://github.com/tj/co
        - co 是一个 js 库
        - 由 tj 大神所贡献的，tj 活跃于 node.js社区、go社区 ... 很多编程语言社区
        ```
        - co 是一个 function, 它试图把 所有传入的 参数，都转成 promise。 co 这个库 非常的单纯，就只是一个包装 和 转化 的作用
        - 用于 Generator 函数的自动执行
        - co 函数库可以让你不用编写 Generator 函数的执行器
        - co 会把 所有传入的 generator function 都转成 promise
        ```
        - 将接收到的参数，如 `数组、函数、generator function、对象 ...` 全都转成 promise
    - ### 2.如何使用 co ？
        ```js
        const co = require('co')
        const fetch = require('node-fetch') // node-fetch 用于异步请求数据

        co(function *() {
            const res = yield fetch('https://api.douban.com/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a')
            const movie = yield res.json() // 将文本解析为 json
            const summary = movie.summary

            console.log('summary', summary)
        })



        // 打印结果
        // summary 《古田军号》是庆祝中华人民共和国成立70周年献礼影片。影片用真诚的艺术表达和创新的手法，以一个红军小号手的视角，讲述了红军从井冈山突围到闽西期间，年轻的革命领袖带领年轻的红军，在绝境中探索真理，开辟了中国革命成功的非凡历程。
        ```
        - 上面代码解析
            - co()  传入一个 generator function
            - 题外话 res.json()
                ```js
                const movie = yield res.json() // 将文本解析为 json
                ```
                - `Body`  mixin 的 `json()` 方法接收一个 Response 流，并将其读取完成。它返回一个 Promise，Promise 的解析 resolve 结果是将文本体解析为 `JSON`。
                - 参考链接 Body.json()  https://developer.mozilla.org/zh-CN/docs/Web/API/Body/json

        - 总结
            - 结合上节 和 现在的这个代码，我们可以非常直观的理解 `genertor function` 和 它内部的 `yield`
            - 通过 yield 这种同步的方式，基本上就实现了 一个状态 或者 一个进程 **的暂停**
            - 当 第一个 yield 没有执行完的时候，第二个 yield 是不会执行的，也就是说实现了一个 函数暂停
            - #### 3.co 的意义
                ```
                - co 这个函数，让里面的每一个 暂停函数 ，都能够得到 一步一步的自动执行
                - 也就是 实现了 generator function 的自动执行
                ```

            - 在上一节中，我们看到，generator function 必须手动调用 next ，才能继续往下执行
            - 但是，我们有了 co，就能实现自动执行完 里面的 暂停函数了
    - ### 3.如何理解 co ？
        - 下面我们用 run() 函数 来模拟一下，co库 的内部执行过程，让大家直观的理解 co库 的内部是如何运作的
        ```js
        function run (generator) {
            const iterator = generator()        // generator 执行的结果 是最终生成了一个 iterator 迭代器
            const it = iterator.next()
            const promise = it.value

            promise.then(data => {
                const it2 = iterator.next(data)
                const promise2 = it2.value

                promise2.then(data2 => {
                    iterator.next(data2)
                })
            })
        }

        // 调用 run函数
        run(function *() {
            const res = yield fetch('https://api.douban.com/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a')
            const movie = yield res.json() // 将文本解析为 json，参考链接 Body.json()  https://developer.mozilla.org/zh-CN/docs/Web/API/Body/json
            const summary = movie.summary

            console.log('summary', summary)
        })

        
        // 打印结果
        // summary 《古田军号》是庆祝中华人民共和国成立70周年献礼影片。影片用真诚的艺术表达和创新的手法，以一个红军小号手的视角，讲述了红军从井冈山突围到闽西期间，年轻的革命领袖带领年轻的红军，在绝境中探索真理，开辟了中国革命成功的非凡历程。
        ```
        - 上面代码解析
            ```
            - 我们用 run() 函数 来模拟一下，co库 的内部执行过程，让大家直观的理解 co库 的内部是如何运作的
            - run() 函数 里面，有两次 promise 分别对应 上面co() 函数中的两次 yield
            - 着两段代码，执行的结果是一样，执行的过程是类似的
            ```

        - co() 内部的工作原理
            ```
            - 将传入的 generator function 转化成 iterator, 然后再将 iterator 转化成 promise
            - 然后不断的 调用 promise.then() 直到所有的 promise 的链路都执行完毕
            ```

        - co 存在的意义：
            ```
            - 在这个例子中，只有两个 promise ，手写起来还可以接受，
            - 但是 在其他情况下，如果 promise 多了的话，还需要手动去写 去调用，就基本不可能了 (要么就烦死)
            - 但是 有了 co库 就不一样了，整个过程 被它自动化掉了，这就是 co 带给我们的便利
            ```

        - co 的缺点：
            ```
            - co 只能 yield 对象、数组、promise、generator、chunck function
            - 不能 yield 字符串、布尔值
            ```

- ## 2-3 箭头函数 arrow function
    - ES6 中允许使用“箭头”（=>）定义函数
    - ### 1.箭头函数的N种写法
        ```js
        const arrow = function (param) {}           // ES5 函数定义
        const arrow = (param) => {}                 // ES6 中箭头函数
        const arrow = param => {}                   // 如果只有一个 参数
        const arrow = param => console.log(param)   // 如果函数内 只有一行代码
        const arrow = param => ({param: param})     // 如果要返回一个对象
        const arrow = (param1, param2) => {}        // 如果要传入多个参数

        // {id: 1, movie: xxx}
        const arrow = ({id, movie}) => {    // 如果传入的参数是一个 Object
            console.log(id, movie)
        }
        ```
    - ### 2.箭头函数的大杀器 —— this
        ```js
        const luke = {
            id: 2,
            say: function () {
                setTimeout(function(){
                    console.log('id: ', this.id)
                }, 50)
            },
            sayWithThis: function(){
                let _this = this

                setTimeout(function(){
                    console.log('this id: ', _this.id)
                }, 500)
            },
            sayWithArrow: function(){
                setTimeout(() => {
                    console.log('arrow id: ', this.id)
                }, 1500)
            },
            sayWithGlobalArrow: () => {
                setTimeout(() => {
                    console.log('global arrow id: ', this.id)
                }, 2000)
            }
        }

        luke.say()
        luke.sayWithThis()
        luke.sayWithArrow()
        luke.sayWithGlobalArrow()

        // 考察 对于箭头函数，this 作用域 的掌握程度


        // 打印结果
        // id:  undefined
        // this id:  2
        // arrow id:  2
        // global arrow id:  undefined
        ```
    - ### 3.总结
        ```
        - 箭头函数 语法简洁
        - this 指向函数定义时候 所属的作用域下，而不是运行时的作用域
        - 这种作用域 更加可控、安全
        ```


- ## 2-4 异步函数 asyunc function 统一世界
    - 1.JS 语言特性变迁史
        ```
        - 1.我们从前锁定 this 的作用域，都是通过 `var _this = this`, 这种形式 交给另外一个变量进行缓存。
        - 然而 有了箭头函数后 这种方式就成为历史了
        ```
        ```
        - 2.我们从前 控制异步的流程，一般通过回调函数
        - 然而有了 Promise 、generator function、async function 之后，它又成为历史了
        ```
    - ### 2.下面我们看看 **控制异步流程**
        - ### 1.过去的 回调函数 控制异步流程
            ```js
            const fs = require('fs')

            // 过去回调函数  控制异步流程
            function readFile (callback) {
                fs.readFile('./package.json', (err, data) => {
                    if (err) return callback(err)
                    callback && callback(null, data)
                })
            }

            readFile((err, data) => {
                if (err) throw err
                data = JSON.parse(data)
                console.log(data)
            })
            ```
        - ### 2.第二阶段 promise
            ```js
            const fs = require('fs')

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
            ```
        - ### 3.第三个阶段  剑走偏锋  co + generator function + Promise
            - 借助 co 让generator function自动迭代完毕
            ```js
            const fs = require('fs')
            const co = require('co')
            const util = require('util')

            co(function *() {
                let data = yield util.promisify(fs.readFile)('./package.json')
                data = JSON.parse(data)
                console.log(data)
            })
            ```
        - ### 4.第四个阶段  Async function 统一世界
            ```js
            const fs = require('fs')
            const util = require('util')
            const readAsync = util.promisify(fs.readFile)

            async function init () {
                let data = await readAsync('./package.json')
                data = JSON.parse(data)
                console.log(data)
            }

            init()
            ```
        - 从上面的例子中，我们可以看到、了解到 这些年 控制异步的历史


- ## 2-5 借助 babel 编译 import 与 export
- ## 2-6 生产环境使用 babel 支持 es6-7