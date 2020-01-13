# Node.js Koa2框架搭建电影预告片网站
- Node.js Koa2 the movie trailer site

- 视频课程出品时间：2018年 年初

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
    - [3-8 session cookie 路由 koa小结](#3-8-session-cookie-路由-koa小结)
        - [3.本章总结](#3.本章总结)
- [第4章 Koa2 与 Koa1 、Express 框架对比](#第4章-Koa2-与-Koa1-、Express-框架对比)
    - [4-1 koa2与koa1 的用法对比](#4-1-koa2与koa1-的用法对比)
    - [4-2 koa 与 express 的api 能力对比](#4-2-koa-与-express-的api-能力对比)
    - [4-3 koa 与 express的中间件执行模板对比](#4-3-koa-与-express的中间件执行模板对比)
    - [4-4 koa2 espress 选型及小结](#4-4-koa2-espress-选型及小结)
- [第5章 从 0 开发一个电影预告片网站](#第5章-从-0-开发一个电影预告片网站)
    - [5-1 设计与分析](#5-1-设计与分析)
    - [5-2 行代码撸一个服务器推到git仓库](#5-2-行代码撸一个服务器推到git仓库)
    - [5-3 服务器返回一个静态 html页面](#5-3-服务器返回一个静态-html页面)
    - [5-4 集成模板引擎 koa 搭建初始模板目录](#5-4-集成模板引擎-koa-搭建初始模板目录)
    - [5-5 模版引擎中间件 集成模板引擎到koa 搭建初始模板目录](#5-5-模版引擎中间件-集成模板引擎到koa-搭建初始模板目录)
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
    - [7-1 前言](#7-1-前言)
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
    - ### 2.下面我们看看 **控制异步流程**
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
    - 1.先来看以前的用法
        ```js
        const fs = require('fs')

        const { writeFile } = require('fs')  // 解构方式的模块加载
        ````
        - ### 运行时加载
            - 像上面这种 `require()` 方法
            - 是 **运行时的模块加载**
            - 先加载整个 fs 对象，然后再从 fs对象 上拿到 writeFile，
            - 并且 这个加载必须要等待代码运行的时候 才会 来获取，所以这种加载方式又叫做 **运行时加载** (而不是静态加载)
        - ### 静态加载
            - 静态加载 是代码在编译的时候 就能够获取到这个方法 (而不是在运行到时候)
            - 那么，如何才能实现 静态加载呢？
            - 这就需要用到 `import` 模块加载方式
            ```js
            import { writeFile } from 'fs'
            ```

    - ### 2.import 和 export
        - `import 和 export` 是 ES6 的新特性
        - 上面的例子，可以这样改写
            ```js
            import { writeFile } from 'fs'
            ```
        - 存在的问题
            - 最新的几个 Node.js 版本 都没有实现 `import` 这个关键字，不支持
            - 先来看个 案例
                ```js
                // demo.js

                import fs from 'fs'
                ```
                - 执行代码，`node demo.js`
                - 然后出现报错
                ```shell
                import fs from 'fs'
                ^^^^^^

                SyntaxError: Cannot use import statement outside a module
                    at Module._compile (internal/modules/cjs/loader.js:895:18)
                    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)
                    at Module.load (internal/modules/cjs/loader.js:815:32)
                    at Function.Module._load (internal/modules/cjs/loader.js:727:14)
                    at Function.Module.runMain (internal/modules/cjs/loader.js:1047:10)
                    at internal/main/run_main_module.js:17:11
                ```
                - 大概意思是nodejs不支持import语法，如果要支持，需要babel来支持

        - 解决的问题
            - 所以这个时候，就需要用到 babel 来编译 `import`
            - 但是，使用 babel 又会带来另外一个问题，使得 **项目的依赖** 变得比较臃肿
    - ### 3.babel
        - #### 3-1 安装 babel
            - `npm i babel-cli babel-preset-env -D`
        - #### 3-2 使用 babel
            - bable 配置文件
                - 在项目根目录下 新建 .babelrc 文件
                ```js
                // .babelrc
                {
                    "presets": [
                        [
                            "env",
                            {
                                "targets": {
                                    "node": "current"
                                }
                            }
                        ]
                    ]
                }
                ```
        - #### 3-3 新建 index.js
            ```js
            // /src/index.js

            import fs from 'fs'
            ```
            - 这时候 执行 `node src/index.js` 会报错，跟上面提到的错误一样
        - #### 3-4 定义 监控命令，自动编译
            - 我们这里使用 `nodemon` 来做 自动监听
            - nodemon用来监视node.js应用程序中的任何更改并自动重启服务,非常适合用在开发环境中。
            
            ```js
            // /package.json
            {
                "scripts": {
                    "dev": "nodemon -w src --exec \"babel-node src --presets env\""
                }
            }
            ```
                - 这句命令的意思是，监听 src目录下的 写入操作，如果监听到，就执行 后面的代码
            - 安装 nodemon `npm i nodemon -D`
                - `-D` 保存到开发依赖当中
            - 开启监控 `npm run dev`, 如果有变化 则自动重新编译
                ```shell
                [nodemon] 2.0.2
                [nodemon] to restart at any time, enter `rs`
                [nodemon] watching dir(s): src/**/*
                [nodemon] watching extensions: js,mjs,json
                [nodemon] starting `babel-node src --presets env`
                [nodemon] clean exit - waiting for changes before restart
                ```
            - 示例代码
                ```js
                // /src/index.js

                import { promisify } from 'util'
                import { resolve as r } from 'path'
                import { readFile, writeFileSync as wfs } from 'fs'
                import * as qs from 'querystring'

                promisify(readFile)(r(__dirname, '../package.json'))
                    .then(data => {
                        data = JSON.parse(data)

                        console.log(data.name)

                        wfs(r(__dirname, './name_demo.js'), String(data.name), 'utf8')
                    })
                    .catch(err => {
                        console.log(err)
                    })
                ```
                - 一旦文件改动，就会自动执行 这个文件
                - 为什么会自动执行，而不是 编译这个文件？
                    - 添加 `start` 命令 ：`nodemon --exec babel-node src/server.js` 。这个命令是告诉 `nodemon` 去监听文件的变化，一旦检测到有文件发生了变化，就会重启并用babel-node去运行 `src/server.js` 文件。这个命令一般用于本地开发。
                    - 参考文章： [[译]使用Babel7+nodemon打造你的Node.js项目开发](https://juejin.im/post/5cbe734ff265da036b4a649c)

    - ### 4.export
        ```js
        // /src/ex.js

        export const name = 'Luke'
        export const getName = () => {
            return name
        }
        ```
        ```js
        // /src/index.js

        import { name } from './ex'
        import { getName } from './ex'

        // import { name, getName } from './ex'   // 或者一次性拿到两个
        ```
        - 执行 `npm run dev` , 也就是 `"nodemon -w src --exec \"babel-node src --presets env\""`
        - 他会打印
            ```
            Luke
            Luke
            ```
        - 注意：
            - 我们在 import export 的时候，要注意默认值的问题
            - 1.在 import 的时候，要把变量名 放在花括号 `{}` 里, 如 `import { name } from './ex'`
            - 2.但是，在导出 **默认值** 的时候 是可以直接导出的
                ```js
                // /src/ex.js

                const age = 19
                export default age
                ```
                ```js
                import age from './ex'

                // 或者
                import ageeee from './ex'

                // 或者
                import yourAge from './ex'
                ```
                - 在导出的时候，可以 更改变量名
                - 但，上面那种，不是导出默认值的，不能直接更改变量名
                    - 可以这样改 `import { resolve as r } from 'path'`
        - 批量导出
            ```js
            // /src/ex.js

            export const name = 'Luke'
            export const getName = () => {
                return name
            }


            const age = 19
            export default age


            // 批量导出
            export {
                name as name2,
                getName as getName2,
                age 
            }
            ```
            ```js
            // /src/index.js

            // 批量导入
            import {
                name2 as name3,
                getName2 as getName3,
                age as age3
            }
            ```


- ## 2-6 生产环境使用 babel 支持 es6-7
    - ### 1.存在问题
        - 在上一节中，我们通过介绍 使用 nodemon 来监听代码修改 ，然后使用 babel-node 实时执行代码
            - 以达到 实时修改，实时编译，实时服务重启
        - 那么，到了线上的时候，就需要有一份编译后的 **静态脚本** 来运行
    - ### 2.新增 build 编译脚本
        ```js
        // /package.json
        {
            "scripts": {
                "dev": "nodemon -w src --exec \"babel-node src --presets env\"",
                "build": "babel src -s -D -d dist --presets env"
            }
        }
        ```
    - ### 3.执行脚本 `npm run build`
    - ### 4.改进
        - 在每次执行编译的时候，我们希望 每次编译前都能自动删除 dist 目录下所有文件，然后重新编译
        - 借助 rimraf 来实现这个 删除操作
            - rimraf dist 删除这个文件夹
        ```js
        // /package.json
        {
            "scripts": {
                "dev": "nodemon -w src --exec \"babel-node src --presets env\"",
                "build": "rimraf dist && babel src -s -D -d dist --presets env"
            }
        }
        ```
        - 安装 rimraf
            - `npm i rimraf -D`
        - 执行代码 `npm run build`
    - ### 5.编译async function的时候会报错
        - 5-1.问题描述：
            - 当我们在编译 async function 的时候 会报错
            - bable 编译的时候 配置的不太正确
        - 5-2.原因
            - async function 转 generator function 的时候，
            - async function 是 ES7 的特性，但是 目前的 babel 是只支持 ES6 的，所以会报错
        - 5-3.问题重现
            ```js
            // /src/index.js
            
            import { promisify } from 'util'
            import { resolve as r } from 'path'
            import { readFile, writeFileSync as wfs } from 'fs'
            import * as qs from 'querystring'

            promisify(readFile)(r(__dirname, '../package.json'))
                .then(data => {
                    data = JSON.parse(data)

                    console.log(data.name)

                    wfs(r(__dirname, './name_demo.js'), String(data.name), 'utf8')
                })
                .catch(err => {
                    console.log(err)
                })


            // async function
            async function init () {
                let data = await promisify(readFile)(r(__dirname, '../package.json'))

                data = JSON.parse(data)

                console.log(data.name)
            }
            init()
            ```
            ```js
            // /package.json
            {
                "scripts": {
                    "dev": "nodemon -w src --exec \"babel-node src --presets env\"",
                    "build": "rimraf dist && babel src -s -D -d dist --presets env"
                }
            }
            ```
            - 编译完后，执行 `node dist/index.js`
            - 然后就会报错
                ```
                /Users/limi/Documents/Node.js-Koa2-the-movie-trailer-site/project/dist/index.js:5
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                                            ^

                ReferenceError: regeneratorRuntime is not defined
                    at /Users/limi/Documents/Node.js-Koa2-the-movie-trailer-site/project/dist/index.js:5:48
                    at Object.<anonymous> (/Users/limi/Documents/Node.js-Koa2-the-movie-trailer-site/project/dist/index.js:33:2)
                    at Module._compile (internal/modules/cjs/loader.js:959:30)
                    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)
                    at Module.load (internal/modules/cjs/loader.js:815:32)
                    at Function.Module._load (internal/modules/cjs/loader.js:727:14)
                    at Function.Module.runMain (internal/modules/cjs/loader.js:1047:10)
                    at internal/main/run_main_module.js:17:11
                ```
        - 5-4.解决问题
            - 安装两个插件
                - 一个是 babel 的运行环境，一个是 babel 插件的编译 运行环境
                - `npm i -S babel-plugin-transform-runtime babel-runtime`
            - 修改 babel 配置
                ```js
                {
                    "presets": [
                        [
                            "env",
                            {
                                "targets": {
                                    "node": "current"
                                }
                            }
                        ]
                    ],
                    "plugins": [
                        [
                            "transform-runtime", {
                                "polufill": false,
                                "regenerator": true
                            }
                        ]
                    ]
                }
                ```
            - 重新编译 `npm run build`
            - 执行 `node dist/index.js
            - 这样 就不会报错了`


# 第3章 层层学习 Koa 框架的 API
- ## 3-1 koa 核心对象
    - ### 1.Koa Express
        - Koa 和 Express 其实是一样的
            - 都是 Node.js 上的 web 服务框架
            - 他们都是围绕 核心服务 而展开的
        - 那么 什么是核心服务呢？
            - 1.接收 HTTP 请求
            - 2.`HTTP -> 接收 -> 解析 -> 响应`
            - 3.`中间件             执行上下文`
        - 其中 响应，可以返回 html页面、JSON 文本
        - 在 `解析请求` 和 `响应请求` 之间 会有一些 第三方的 `中间件`
            - 如 日志、表单解析... 来增强服务能力
        - 执行上下文
            - 可以理解为 HTTP 请求周期内的 `作用域环境`
            - 来托管请求响应 和 中间件，方便它们之间 互相访问
        - 应用服务对象
            ```
            Application   Context
            Request       Response
            Middlewares
            Session       Cookie
            ```
    - ### 2.跑一个最简单的 Koa 服务
        ```js
        // /server/index.js

        const Koa = require('koa')
        const app = new Koa()

        app.use(async (ctx, next) => {
            ctx.body = 'Hi Luck'
        })

        app.listen(2333)
        ```
        - 安装 koa `npm i koa -S`
        - 启动服务 `node server/index.js`
        - 访问网站 `localhost:2333`
    - ### 3.Koa源码
        - 在 node_modules 中找到 koa，打开 package.json
        - 其中 main 就是 koa 的入口文件
            ```js
            "main": "lib/application.js",
            ```

- ## 3-2 web服务类 application
    - 源码解读，具体请查看视频
    - 1.其实，我们在 起一个 Koa 服务的时候，只需要3行代码就够了
        ```js
        const app = new Koa()  // Application

        app.use(middleware)

        app.listen(2333)
        ```
    - 2.Application 思维导图
        ```js
        Application - Class App extends Emitter
            - constructor
            - use
            - listen
                - this.callback()
            - callback
                - createContext
                - handleRequest
                    - compose(middlewares)
                        - context
                        - request/response
                        - context.app = this
                        - context.req/res = req/res
                        - request/response - ctx - context
                        - cookies/ip
                    - respond
                        - res.end
                            - buffer
                            - string
                            - stream.pipe
                            - json
        ```
    - 3.Application 核心源码
        ```js
        // Koa/application.js

        module.exports = class Application extends Emitter {

            constructor(options) {
                super();
                options = options || {};
                this.proxy = options.proxy || false;
                this.subdomainOffset = options.subdomainOffset || 2;
                this.proxyIpHeader = options.proxyIpHeader || 'X-Forwarded-For';
                this.maxIpsCount = options.maxIpsCount || 0;
                this.env = options.env || process.env.NODE_ENV || 'development';
                if (options.keys) this.keys = options.keys;
                this.middleware = [];
                this.context = Object.create(context);
                this.request = Object.create(request);
                this.response = Object.create(response);
                if (util.inspect.custom) {
                this[util.inspect.custom] = this.inspect;
                }
            }

            listen(...args) {
                debug('listen');
                const server = http.createServer(this.callback());
                return server.listen(...args);
            }

            use(fn) {
                debug('use %s', fn._name || fn.name || '-');
                this.middleware.push(fn);
                return this;
            }

            callback() {
                const fn = compose(this.middleware);

                if (!this.listenerCount('error')) this.on('error', this.onerror);

                const handleRequest = (req, res) => {
                const ctx = this.createContext(req, res);
                return this.handleRequest(ctx, fn);
                };

                return handleRequest;
            }

            handleRequest(ctx, fnMiddleware) {
                const res = ctx.res;
                res.statusCode = 404;
                const onerror = err => ctx.onerror(err);
                const handleResponse = () => respond(ctx);
                onFinished(res, onerror);
                return fnMiddleware(ctx).then(handleResponse).catch(onerror);
            }

            createContext(req, res) {
                const context = Object.create(this.context);
                const request = context.request = Object.create(this.request);
                const response = context.response = Object.create(this.response);
                context.app = request.app = response.app = this;
                context.req = request.req = response.req = req;
                context.res = request.res = response.res = res;
                request.ctx = response.ctx = context;
                request.response = response;
                response.request = request;
                context.originalUrl = request.originalUrl = req.url;
                context.state = {};
                return context;
            }

            onerror(err) {
                if (!(err instanceof Error)) throw new TypeError(util.format('non-error thrown: %j', err));

                if (404 == err.status || err.expose) return;
                if (this.silent) return;

                const msg = err.stack || err.toString();
                console.error();
                console.error(msg.replace(/^/gm, '  '));
                console.error();
            }
        };
        ```

- ## 3-3 http 上下文对象 context（ctx）
    - 源码解读，详情看视频
- ## 3-4 http 请求对象 request（req）
    - 源码解读，详情看视频
- ## 3-5 http 响应对象
    - 源码解读，详情看视频
- ## 3-6 koa 中间件 middlewares
    - 源码解读，详情看视频
- ## 3-7 纯函数-尾递归与魔法大师 koa-compose
    - 源码解读，详情看视频
    >  - 在中间件执行的策略中，是会先通过 koa-compose，来吧这些 中间件 来组合到一起，一个接一个的 把数组里面的函数 依次执行，通过一个 next() 中间的回调函数 不断的将 控制权（执行权） 向下传递
    > - 理解了 koa-compose 就理解了 koa 的洋葱模型，也是理解 koa中间件 的关键
    >   - 洋葱模型： 一层层进去，处理核心业务，然后再一层层出来
    - ### 纯函数、尾递归、可组合
    - ### 纯函数
        - 什么是纯函数？
            - 对于一个函数，如果 输入一个的变量 X , 那么它一定能输出一个结果 y
            - 不管调用多少次，只要 x 相等，那么得到的 y 也一定相等
        - 举个例子
            ```js
            function pure (x) {
                return x + 1
            }

            console.log(pure(1))
            console.log(pure(1))
            console.log(pure(1))
            console.log(pure(1))
            ```
        - #### 纯函数特点
            - 1.不管你调用多少次，只要入参一样，那么输出的结果也一样
            - 2.纯函数与外界交换数据，只有一个渠道，就是入参 的参数 与返回值
            - 3.**`无副作用：既不依赖，也不会改变全局的状态`**
        - 为什么要提到 纯函数 和 函数式 编程？
            - 因为一个函数 一旦纯化之后，他就可以像积木一样，跟更多的函数进行组合 compose
            - 而这种 **`可组合`** 又是函数式编程非常重要的概念

        - 参考文章
            - [JavaScript函数式编程之为什么要函数式编程（非严谨技术层面的扯淡）](https://github.com/zhuanyongxigua/blog/issues/20)

    - ### 2.尾递归
        - 先来看个 基础递归 的例子
            ```js
            function tail (i) {
                if (i > 3) return
                console.log('修改前', i)
                tail(i + 1)
                console.log('修改后', i)
            }
            tail(0)


            // 打印结果
            修改前 0
            修改前 1
            修改前 2
            修改前 3
            修改后 3
            修改后 2
            修改后 1
            修改后 0
            ```
            - 每次递归的时候，程序都会保存当前的方法调用栈，我们执行 `tail(2)` 的时候必须要记住，之前是如何调用 `tail(1)` 的，这样的话 才能在执行完毕 `tail(2)` 之后，返回到 `tail(1)` 的下一行代码 来打印一下 `console.log('修改后', i)`
            - 缺点：
                - 在整个函数执行过程中，需要记住太多的 堆栈深度、堆栈状态 比较浪费性能
        - 把上面的函数 改成 尾递归
            ```js
            function tail (i) {
                if (i > 3) return i
                console.log('修改前', i)
                return tail(i + 1)
            }
            tail(0)


            // 打印结果
            修改前 0
            修改前 1
            修改前 2
            修改前 3
            ```
            - 这样修改后：
                - 它每次调用的结果，就是下次执行的入参

        - 参考文章
            - [《尾递归、尾调用优化 - 阮一峰》](https://www.ruanyifeng.com/blog/2015/04/tail-call.html)
            - [JavaScript函数式编程之为什么要函数式编程（非严谨技术层面的扯淡）](https://github.com/zhuanyongxigua/blog/issues/20)
            - [什么是对象，为什么要面向对象，怎么才能面向对象？](https://github.com/946629031/Blog/blob/master/What%20is%20OOP%EF%BC%9F%E4%BB%80%E4%B9%88%E6%98%AF%E5%AF%B9%E8%B1%A1%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%8C%E6%80%8E%E4%B9%88%E6%89%8D%E8%83%BD%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%9F.md)
            - [js面向对象编程](https://github.com/946629031/Blog/blob/master/js%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%20Object-oriented%20programming.md)


        - 什么是 尾递归？
            - 1.函数调用自身，称为递归。如果尾调用自身，就称为尾递归。
            - 2.如果一个函数中所有递归形式的调用都出现在函数的末尾，我们称这个递归函数是尾递归的。
        - #### 什么是尾调用？
            - 1.尾调用的概念非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
                ```js
                function f(x){
                    return g(x);
                }
                ```
                上面代码中，函数f的最后一步是调用函数g，这就叫尾调用。

            - 2.以下两种情况，都不属于尾调用。
                ```js
                // 情况一
                function f(x){
                    let y = g(x);
                    return y;
                }

                // 情况二
                function f(x){
                    return g(x) + 1;
                }
                ```
                上面代码中，情况一是调用函数g之后，还有别的操作，所以不属于尾调用，即使语义完全一样。情况二也属于调用后还有操作，即使写在一行内。

            - 3.尾调用不一定出现在函数尾部，只要是最后一步操作即可。
                ```js
                function f(x) {
                    if (x > 0) {
                        return m(x)
                    }
                    return n(x)
                }
                ```
                上面代码中，函数m和n都属于尾调用，因为它们都是函数f的最后一步操作。



- ## 3-8 session cookie 路由 koa小结
    - 源码解读，详情看视频
    - `npm i koa-session`
    - ### 1.session
        - #### session 是什么？
            - session 原理
                - 客户端 和 服务端 有一个会话
                - 这个会话会 交流并保存 一些状态 (变量)，如 登陆状态、参数变量 ... 等
            - 直接来看个直观的
                ```js
                Response Headers

                Connection: keep-alive
                Content-Length: 7
                Content-Type: text/plain; charset=utf-8
                Date: Thu, 02 Jan 2020 08:07:42 GMT
                Set-Cookie: koa:sess=eyJ2aWV3cyI6NSwiX2V4cGlyZSI6MTU3ODAzODg2MjIyOCwiX21heEFnZSI6ODY0MDAwMDB9; path=/; expires=Fri, 03 Jan 2020 08:07:42 GMT; httponly
                Set-Cookie: koa:sess.sig=vLtDOmkiYkcjEX3ouxAfg_NULhI; path=/; expires=Fri, 03 Jan 2020 08:07:42 GMT; httponly
                ```
                - 其中 `Set-Cookie: koa:sess=ID;` 这个id 就是 session id，每一个用户的身份识别，就是靠这个 session id 了
        - #### session最小模型
            - [《koa-session》 github](https://github.com/koajs/session#example)
            ```js
            // /server/index.js
            const Koa = require('koa')
            const session = require('koa-session')
            const app = new Koa()

            app.keys = ['Hi Luke'];
            app.use(session(app));  // app.use(session(CONFIG, app));  当不传config的时候 使用 默认配置

            app.use(ctx => {
                // ignore favicon
                if (ctx.path === '/favicon.ico') return

                let n = ctx.session.views || 0
                ctx.session.views = ++n
                ctx.body = n + ' views'
                    
            })

            app.listen(2333)
            ```
            - 执行结果
                - 启动服务器后，访问 `localhost:2333`
                - 显示 `1 views`，刷新一次 `2 views`，再刷新一次 `3 views`... 以此类推
    - ### 2.路由 router
        - 什么是路由？
            - 一个网站 肯定有很多 **`不同的页面`**，不同的页面对应不同的 **`URL地址`**，服务器要能识别出不同的页面，然后 **`给不同的页面返回不同的结果`**。这个时候就需要用到路由了
        - 最简示例
            ```js
            const Koa = require('koa')
            const session = require('koa-session')
            const app = new Koa()

            app.keys = ['Hi Luke'];
            app.use(session(app));

            app.use(ctx => {
                if (ctx.path === '/favicon.ico') return
                if (ctx.path === '/') {
                    let n = ctx.session.views || 0
                    ctx.session.views = ++n
                    ctx.body = n + ' views'
                } else if (ctx.path == '/hi') {
                    ctx.body = 'Hi Luke'
                } else {
                    ctx.body = '404'
                }
            })

            app.listen(2333)
            ```
        - 原理 就是这样
        - 我们后面是不会使用这么简单的方式，而是 使用第三方的中间件
    - ### 3.本章总结
        - 1.在 Koa 里一切的流程都是中间件
        - 2.一个 HTTP请求 进入了 Koa 之后，都会流经 预先配置好的中间件 (middlewares)
        - 3.在中间件执行的策略中，是会先通过 koa-compose，来吧这些 中间件 来组合到一起，一个接一个的 把数组里面的函数 依次执行，通过一个 **`next()`** 中间的回调函数 不断的将 控制权（执行权） 向下传递
            - 理解了 koa-compose 就理解了 koa 的洋葱模型，也是理解 koa中间件 的关键
        - 4.每一个中间件 都会拿到整个 HTTP 请求的上下文 (也就是 **`context`**)，通过 context 能访问到 **`request对象`**，也能访问到 **`respond对象`**，而且能访问到 他们上面的属性 和方法
        - 5.**`请求上下文`**：贯穿中间件的请求上下文，也就是 context、request、respond 之间互相引用，方便调用。
            - 特别是 request, respond 他们在 Koa中 分别扩展出两个对象，它们两个并非是 node 原生的对象。
            - Node 原生的是 req res
        - 6.**`request, respond`** 和 **`req, res`** 因为互相引用，所以我们能够通过 **`context`** 来访问到
            - `request, respond` 是 Koa扩展对象
            - `req, res` 是 Node原生对象
        - 7.通过这一章 源代码 读下来之后，发现，其实只有4个 核心概念
            > - 请求上下文 context
            > - 请求对象 request
            > - 响应对象 respond
            > - 中间件 middlewares
        - 8.但是真正复杂的是
            > - HTTP协议
            > - 资源
            > - TCP/IP 相关的网络通信知识
            > - 前后端请求的策略设定
            > - 请求流程的性能优化
            - 
            - 以上这些都不是属于 Koa web服务框架中的知识，但却是 这个框架之上的硬知识

# 第4章 Koa2 与 Koa1 、Express 框架对比
- ## 4-1 koa2与koa1 的用法对比
    - 本节目标
        - 通关例子讲解，帮助大家理解 koa2 和 koa1 的异同之处
    - 1.先来看个 koa1 的例子
        ```js
        var Koa = require('koa')
        var app = new Koa()
        var logger = require('koa-logger') // 打印日志，第三方模块

        var indent = function (n) {
            return new Array(n).join('&nbsp;')
        }

        var mid1 = function () {
            return function *(next) {
                this.body = '<h3>请求 => 第一层中间件</h3>'
                yield next
                this.body += '<h3>请求 <= 第一层中间件</h3>'
            }
        }

        var mid2 = function () {
            return function *(next) {
                this.body += '<h3>请求' + indent(4) + ' => 第二层中间件</h3>'
                yield next
                this.body += '<h3>请求' + indent(4) + ' <= 第二层中间件</h3>'
            }
        }

        var mid3 = function () {
            return function *(next) {
                this.body += '<h3>请求' + indent(8) + ' => 第三层中间件</h3>'
                yield next
                this.body += '<h3>请求' + indent(8) + ' <= 第三层中间件</h3>'
            }
        }

        app.use(logger())
        app.use(mid1())
        app.use(mid2())
        app.use(mid3())

        app.use(function *(next) {
            this.body += '<p style="color: #f60">' + indent(12) + 'Koa 核心处理业务</p>'
        })

        app.listen(2333)
        ```
        - 执行之前，先安装 koa1 
            - `npm i koa@1.2.0 koa-logger@1.3.0 -S` -S 是保存
            - 切换koa版本
                - 直接 `npm i koa@1.2.0 -S` 即可
                - 切换到 koa2 `npm i koa@2.4.1 -S`
        - koa-logger 的作用
            - 在命令行中打印日志
            ```js
            node server  // 启动服务

              <-- GET /
              --> GET / 200 12ms 342b
            ```
    - 2.再来看个 koa2 的例子
        - 把koa1改成koa2
            - 1.把所有 var 改成 const / let
            - 2.把所有 function 都改成 箭头函数
            - 3.把 generator function 改成 async function
            - 4.把`this.body` 改成 `ctx.body`
            - 5.把 yield next 改成 await next
            - 6.把字符串拼接的方式，改成模版字符串
                ```js
                '<h3>请求' + indent(4) + ' => 第二层中间件</h3>'

                // 改成
                `<h3>请求${indent(4)} <= 第二层中间件</h3>`
                ```
        ```js
        const Koa = require('koa')
        const app = new Koa()
        const logger = require('koa-logger') // 打印日志，第三方模块

        const indent = (n) => new Array(n).join('&nbsp;')

        const mid1 = () => {
            return async (ctx, next) => {
                ctx.body = `<h3>请求 => 第一层中间件</h3>`
                await next()
                ctx.body += `<h3>请求 <= 第一层中间件</h3>`
            }
        }

        const mid2 = () => {
            return async (ctx, next) => {
                ctx.body += `<h3>请求${indent(4)} => 第二层中间件</h3>`
                await next()
                ctx.body += `<h3>请求${indent(4)} <= 第二层中间件</h3>`
            }
        }

        const mid3 = () => {
            return async (ctx, next) => {
                ctx.body += `<h3>请求${indent(8)} => 第三层中间件</h3>`
                await next()
                ctx.body += `<h3>请求${indent(8)} <= 第三层中间件</h3>`
            }
        }

        app.use(logger())
        app.use(mid1())
        app.use(mid2())
        app.use(mid3())

        app.use(async (ctx, next) => {
            ctx.body += `<p style="color: #f60">${indent(12)}Koa 核心处理业务</p>`
        })

        app.listen(2333)
        ```

        - 执行结果
            ```html
            请求 => 第一层中间件
            请求    => 第二层中间件
            请求        => 第三层中间件
                    Koa 核心处理业务
            请求        <= 第三层中间件
            请求    <= 第二层中间件
            请求 <= 第一层中间件
            ```
    - 3.总结
        - 1.依托的方式不一样
            - koa1 依托于 generator function ，以及 配套的 co库
            - koa2 依托于 async function
        - 2.语法
            - koa1 语法主要以 ES5 为主，有部分ES6
            - koa2 语法跟进新规范 ES6 ES7
        - 3.koa2 koa1 中间件 执行特征、链路 虽然相似，但是 代码层面的设计策略 执行逻辑稍微不一样

- ## 4-2 koa 与 express 的api 能力对比
    - koa 与 express 其实是同一班人的 开发者
    - express
        - 出现的够早，占了整个市场的先机，市场份额大
        - 当时还没有 成熟的 generator function , async function 这些语言规范的推出
        - 从最开始的 大而全，囊括大部分中间件 -> 到后面 抽离出这些 中间件
            - 每次大升级 都会引发社区火热的讨论
            - 这充分说明 express 有很好的 社区支持 和群众基础
    - ### Koa VS Express
        - express
            - 提供更多的控制权 和 配置权
            - 更让人省心，拿过来就能用，不需要操心太多 定制的东西
        - koa
            - koa 比 express 更容易做底层的深度定制
    - api 对比
    ```js
    Koa
    - cosnt app = new Koa()
    
    - app
        - settings
            - env
            - proxy
            - subdomains
        - listen(3000)
        - callback()
        - use( async () )
        - keys = []
        - context
        - on('error')

    - ctx API
        - req
        - res

        - request
            - header
            - headers
            - methods
            - url
            - originUrl
            - origin
            - href
            - path
            - query
            - queryString ???????
            - host
            - hostname
            - fresh
            - stale
            - socket
            - protocol
            - secure
            - ip
            - ips
            - subdomains
            - is()
            - accepts()
            - acceptEncodings()
            - acceptCharsets()
            - acceptLanguages()
            - get()
            
        - respond
            - ctx
            - body
            - status
            - message
            - length
            - type
            - headerSent
            - redirect()
            - attachment()
            - set()
            - append()
            - lastModified
            - etag

        - state
        - app
        - cookies.get()
        - cookies.set()
        - throw()
        - assert()
        - respond()
        - method
        - url
        - path
        
    ```
    ```js
    Express
    - const app = express()

    - app
        - settings
            - env
            - trust proxy
            - json callback name
            - json replace
            - case sensitive routing
            - strict routing
            - view cache
            - view engine
            - views

        - set()
        - get()
        - enable() - enabled()
        - disable()
        - use()
        - listen()
        - engine()
        - param()
        - VERB - get('/a/:b')
        - all()
        - route()
        - locals()
        - render()

    - request - req
        - query
        - params
        - param()
        - route
        - cookies
        - signedCookies
        - get()
        - accepts()
        - acceptsCharset()
        - acceptsLanguage()
        - is()
        - ip
        - ips
        - path
        - host
        - fresh
        - stale
        - xhr
        - protocol
        - secure
        - subdomains
        - originUrl
            
    - respond - res
        - status()
        - set()
        - get()
        - redirect()
        - cookie()
        - clearCookie()
        - location()
        - send()
        - json()
        - jsonp()
        - type()
        - format()
        - attachment()
        - sendfile()
        - download()
        - links()
        - locals()
        - locals
        - render()
    ```

- ## 4-3 koa 与 express的中间件执行模板对比
    - ### 1.Express 使用中间件
        - 安装 `npm i express -S`
        - 用 express 起一个服务
            ```js
            const express = require('express')
            const app = express()

            app.get('/', (req, res) => {
                res.send('Hi Luke')
            })

            app.listen(2334)
            ```
        - 把之前 [4-1 koa2与koa1 的用法对比](#4-1-koa2与koa1-的用法对比) 中 koa2 使用中间件的代码，改成 express
            - 改动
                - 把 async function 改成 普通箭头函数
                - 把 `(ctx, next) => {}` 改成 `(req, res, next) => {}`
                - 把 `await next()` 改成 `next()`
                - 把 `ctx.body` 改成 `res.body`
                - 最后
                    ```js
                    // koa

                    app.use((ctx, next) => {
                        ctx.body += `<p style="color: #f60">${indent(12)}Koa 核心处理业务</p>`
                    })
                    ```
                    - 改成
                    ```js
                    // express
                    
                    app.get('/', (req, res, next) => {
                        res.send( `${res.body}<p style="color: #f60">${indent(12)}Koa 核心处理业务</p>`)
                    })
                    ```
        ```js
        // express 使用中间件

        const express = require('express')
        const app = express()

        const indent = (n) => new Array(n).join('&nbsp;')

        const mid1 = () => {
            return (req, res, next) => {
                res.body = `<h3>请求 => 第一层中间件</h3>`
                next()
                res.body += `<h3>请求 <= 第一层中间件</h3>`
            }
        }

        const mid2 = () => {
            return (req, res, next) => {
                res.body += `<h3>请求${indent(4)} => 第二层中间件</h3>`
                next()
                res.body += `<h3>请求${indent(4)} <= 第二层中间件</h3>`
            }
        }

        const mid3 = () => {
            return (req, res, next) => {
                res.body += `<h3>请求${indent(8)} => 第三层中间件</h3>`
                next()
                res.body += `<h3>请求${indent(8)} <= 第三层中间件</h3>`
            }
        }

        app.use(mid1())
        app.use(mid2())
        app.use(mid3())

        app.get('/', (req, res, next) => {
            res.send( `${res.body}<p style="color: #f60">${indent(12)}Express 核心处理业务</p>`)
        })

        app.listen(2334)
        ```
        - 执行结果
            ```
            请求 => 第一层中间件
            请求    => 第二层中间件
            请求        => 第三层中间件
                    Express 核心处理业务
            ```
    - ### 2.Koa2 使用中间件
        ```js
        const Koa = require('koa')
        const app = new Koa()
        const logger = require('koa-logger') // 打印日志，第三方模块

        const indent = (n) => new Array(n).join('&nbsp;')

        const mid1 = () => {
            return async (ctx, next) => {
                ctx.body = `<h3>请求 => 第一层中间件</h3>`
                await next()
                ctx.body += `<h3>请求 <= 第一层中间件</h3>`
            }
        }

        const mid2 = () => {
            return async (ctx, next) => {
                ctx.body += `<h3>请求${indent(4)} => 第二层中间件</h3>`
                await next()
                ctx.body += `<h3>请求${indent(4)} <= 第二层中间件</h3>`
            }
        }

        const mid3 = () => {
            return async (ctx, next) => {
                ctx.body += `<h3>请求${indent(8)} => 第三层中间件</h3>`
                await next()
                ctx.body += `<h3>请求${indent(8)} <= 第三层中间件</h3>`
            }
        }

        app.use(logger())
        app.use(mid1())
        app.use(mid2())
        app.use(mid3())

        app.use(async (ctx, next) => {
            ctx.body += `<p style="color: #f60">${indent(12)}Koa 核心处理业务</p>`
        })

        app.listen(2333)
        ```

        - 执行结果
            ```html
            请求 => 第一层中间件
            请求    => 第二层中间件
            请求        => 第三层中间件
                    Koa 核心处理业务
            请求        <= 第三层中间件
            请求    <= 第二层中间件
            请求 <= 第一层中间件
            ```
    - ### 3.Koa2 与 Express 对比异同 的结果
        - 1.进出模型
            - 观察
                - Koa 的中间件 是一个 **`洋葱模型`**，一层层进去，然后一层层出来
                - 但是在 Express 里面，虽然代码 也是这样写的，中间件也生效了
                - Express 的整个链路 只进不出
            - 总结：如果不借助外力，仅仅是语言本身的能力，Express 是很难做到， 跟 Koa 一样 数据流入流出能力的
            - 如果 express 想要一层层进去，目前这些代码是不够的，我们需要加上 **`事件触发`**，类似这样的机制，才能保证 它跟 koa 一样的 **`进出模型`**
        - 2.编程体验上
            - express，是这种常规的编程模型
            - koa，是 async function 这种新语言特性
        - 3.中间件
            - express，是单向流动。而且需要借助事件机制，才能保障 一个数据进去之后 能够返程流动
            - koa，由于有语法特性，又加强了 异步编程模型，所以 整个 HTTP流 处理起来 就非常的灵活。
                - 这是非常美妙的编程体验，不仅仅是写起来爽
                - koa 中间件的模型，运行起来的过程 非常的清晰，无论是调试、捕捉异常、做加减法的维护 都非常的轻松
                
- ## 4-4 koa2 espress 选型及小结
    - koa 是基于新的语法特性，实现了 promise 链的传递
    - 错误处理 也更友好
    - koa 不绑定任务中间件，是非常干净的 裸的框架
    - 如果 express 是 **`大而全`**，那么 koa 就是 **`小而精`** ，两者定位不同
        - koa 扩展性 非常好，只要装几个中间件 就马上可以跟 express 匹敌了
    - koa 代码质量高，设计理念先进，语法特性比较超前


# 第5章 从 0 开发一个电影预告片网站
- ## 5-1 设计与分析
    - 网站前台
        - 首页
            - 展示电影海报 和 部分信息
            - 首页顶部 有电影分类
        - 视频：点击首页海报图 弹出视频 弹窗
        - 详情页：点击首页 电影标题 进入详情页，详情页内 又同类电影推荐
    - 网站后台
        - 后台登陆功能
        - 后台管理页面：展示 爬取到的 所有电影列表

- ## 5-2 行代码撸一个服务器推到git仓库
    - github 新建仓库，并 clone 到本地

- ## 5-3 服务器返回一个静态 html页面
    ```js
    // /server/index.js
    
    const Koa = require('koa')
    const app = new Koa()
    const { normal } = require('./template')

    app.use(async (ctx, next) => {
        ctx.type = 'text/html; charset=utf-8'
        ctx.body = normal
    })

    app.listen(2333)
    ```
    ```js
    // /server/template/index.js
    const normalTpl = require('./normal')

    module.exports = {
        normal: normalTpl
    }
    ```
    ```js
    // /server/template/normal.js

    module.exports = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        hello world
    </body>
    </html>
    `
    ```

- ## 5-4 集成模板引擎 koa 搭建初始模板目录
    - 本节介绍3个 模版引擎
        - ejs
        - pug
        - jage

    - BootCDN  CDN 加速服务
        - https://www.bootcdn.cn/
        - https://cdn.bootcss.com/jquery/3.4.1/jquery.js
    - ### 1.ejs
        - https://github.com/tj/ejs
        - 安装 `npm i ejs`
        ```js
        // /server/template/ejs.js

        module.exports = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            hello world
            <h1>Hi <%= you %></h1>
            <p>this is <%= me %></p>
        </body>
        </html>
        `
        ```
        - 其中 `<%= you %>` 里面放的是变量名
        ```js
        // /server/index.js
        const Koa = require('koa')
        const app = new Koa()
        const ejs = require('ejs')
        const { ejsTpl } = require('./template')

        app.use(async (ctx, next) => {
            ctx.type = 'text/html; charset=utf-8'
            ctx.body = ejs.render(ejsTpl, {
                you: 'Luke',    // 为模版里的变量赋值
                me: 'Scott'
            })
        })

        app.listen(2333)
        ```
        ```js
        // /server/template/index.js

        module.exports = {
            ejsTpl: require('./ejs')
        }
        ```
    - ### 2.pug
        - https://github.com/pugjs/pug
        - 安装 `npm i pug`
        ```js
        // /server/template/pug.js
        module.exports = `
        doctype html
        html
            head
                meta(charset="utf-8")
                meta(name="viewport", content="width=device-width, initial-scale=1")
                title Koa Server Pug
                link(href="https://cdn.bootcss.com/animate.css/3.7.2/animate.css" rel="stylesheet")
                script(src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js")
            body
                .container
                    .row
                    .clo-md-8
                        h1 Hi #{you}
                        p This is #{me}
                    .clo-md-4
                        p 测试动态 Pug 页面
        `
        ```
        ```js
        // /server/index.js
        const Koa = require('koa')
        const app = new Koa()
        const pug = require('pug')
        const { pugTpl } = require('./template')

        app.use(async (ctx, next) => {
            ctx.type = 'text/html; charset=utf-8'
            ctx.body = pug.render(pugTpl, {
                you: 'Luke 111',
                me: 'Scott 22'
            })
        })

        app.listen(2333)
        ```
        ```js
        // /server/template/index.js
        module.exports = {
            normal: require('./normal'),
            ejsTpl: require('./ejs'),
            pugTpl: require('./pug')
        }
        ```

    - ### 3.jade
        - [《带你学习Jade模板引擎》 - 慕课网](https://www.imooc.com/learn/259)

- ## 5-5 模版引擎中间件 集成模板引擎到koa 搭建初始模板目录
    - 存在的问题
        - 在上一节中，我们使用模版引擎，都是通过 拼接字符串的方式
        - 这种方式不是不行，只是比较的人肉，比较麻烦
        - 那么，这一节，我们通过使用 **`模版引擎中间件`** 的形式 集成到项目里
    - 解决问题
        - 在 github 搜索 [koa-views](https://github.com/queckezz/koa-views)
        - 点击 [List of supported engines](https://github.com/tj/consolidate.js#supported-template-engines) 查看支持的 **`模版引擎`**
        - 这节 我们选择 pug 模版引擎
    - ### 模版引擎中间件 koa-views
        - 安装 `npm i koa-views`
        ```js
        // /server/index.js

        const Koa = require('koa')
        const app = new Koa()
        const views = require('koa-views')
        const { resolve } = require('path')

        app.use(views(resolve(__dirname, './views'), { // 配置 koa-views
            extension: 'pug'
        }))

        app.use(async (ctx, next) => {
            await ctx.render('index', {
                you: 'Luke',
                me: 'Scoot'
            })
        })

        app.listen(2333)
        ```
        ```pug
        // /server/views/index.pug

        doctype html
        html
            head
                meta(charset="utf-8")
                meta(name="viewport", content="width=device-width, initial-scale=1")
                title Koa Server Pug
                link(href="https://cdn.bootcss.com/animate.css/3.7.2/animate.css" rel="stylesheet")
                script(src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js")
            body
                .container
                    .row
                    .clo-md-8
                        h1 Hi #{you}
                        p This is #{me}
                    .clo-md-4
                        p 测试动态 Pug 页面
        ```
    - ### Pug 使用
        - 选择 pug 到原因
            - 语法简洁
            - 支持 模版继承
            - 支持 模块声明
        - 项目目录
            ```
            +  |- /dist
            +  |- /node_modules
            +  |- /server
            +     |- /template
            +     |- /views
                     |- index.pug
            +        |- /layouts        页面布局
                        |- default.pug
            +        |- /includes       公用模块
                        |- script.pug
                        |- style.pug
                  |- index.js
            +  |- /src
               |- package-lock.json
               |- package.json
            ```
        - pug 语法
            - `include ../includes/style` 引入
            - `extends ./layouts/default` 继承
            - `block content` block 定义模块
                ```
                block content     //定义模块，模块名 content
                    .container
                        .row
                        .clo-md-8
                            h1 Hi #{you}
                            p This is #{me}
                        .clo-md-4
                            p 测试动态 Pug 页面
                ```
        - pug 模块拆分
            ```pug
            // /server/views/index.pug

            extends ./layouts/default    // 继承

            block title                  // 模块定义
                title Koa Douban 首页

            block content
                .container
                    .row
                    .clo-md-8
                        h1 Hi #{you}
                        p This is #{me}
                    .clo-md-4
                        p 测试动态 Pug 页面
            ```
            ```pug
            // /server/views/layouts/default.pug

            doctype html
            html
                head
                    meta(charset="utf-8")
                    meta(name="viewport", content="width=device-width, initial-scale=1")
                    block title
                    include ../includes/style
                body
                    block content
                    include ../includes/script
            ```
            ```pug
            // /server/views/includes/script.pug

            script(src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js")
            ```
            ```pug
            // /server/views/includes/style.pug

            link(href="https://cdn.bootcss.com/animate.css/3.7.2/animate.css" rel="stylesheet")
            ```

- test pull request

- ## 5-6 借助 bootstrap 4-x 搭建网站首页
    - DPlayer
        - [DPlayer github](https://github.com/MoePlayer/DPlayer)
        - H5播放器，B站也在用这个播放器，可添加弹幕
        
    - 项目目录
        ```
        +  |- /dist
        +  |- /node_modules
        +  |- /server
        +     |- /template
        +     |- /views
                    |- index.pug
        +        |- /layouts         页面布局
                    |- default.pug
        +        |- /includes        公用模块
                    |- header.pug
                    |- script.pug
                    |- style.pug
                |- index.js
        +  |- /src
            |- package-lock.json
            |- package.json
        ```
    - 代码
        ```js
        // /server/index.js
        const Koa = require('koa')
        const app = new Koa()
        const views = require('koa-views')
        const { resolve } = require('path')

        app.use(views(resolve(__dirname, './views'), {
            extension: 'pug'
        }))

        app.use(async (ctx, next) => {
            await ctx.render('index', {
                you: 'Luke',
                me: 'Scoot'
            })
        })

        app.listen(2333)
        ```
        ```pug
        // /server/views/index.pug
        
        extends ./layouts/default

        block title
            title Koa Douban 首页

        block content
            style.
                header{
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0;
                    background: #00474f;
                    color: #e7dacb;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 50px;
                    z-index: 500;
                }

                @media (min-width: 768px) {
                    .sidebar {
                        position: -webkit-sticky;
                        position: sticky;
                        top: 4rem;
                        z-index: 1000;
                        height: calc(100vh - 4rem);
                        border-right: 1px solid rgba(0,0,0,.1);
                        order: 0;
                        border-bottom: 1px solid rgba(0,0,0,.1);
                    }
                    .cat-links {
                        display: block!important;
                        max-height: calc(100vh - 9rem);
                        overflow-y: auto;
                        padding-top: 1rem;
                        padding-bottom: 1rem;
                        margin-right: -15px;
                        margin-left: -15px;
                    }
                    .modal-dialog {
                        max-width: 800px;
                    }
                }
                .sidebar-link {
                    display: block;
                    padding: .25rem 1.5rem;
                    font-weight: 500;
                    color: rgba(0,0,0.65)
                }
                .sidebar .nav>li>a{
                    display: block;
                    padding: .25rem 1.5rem;
                    font-size: 90%;
                    color: rgba(0,0,0,.65)
                }
                .sidebar-item.active > .sidebar-inner {
                    display: block;
                }
                .card{
                    margin-bottom: 1.5rem;
                }
                .swithcher{
                    position: relative;
                    padding: 1rem 15px;
                    margin-right: -15px;
                    margin-left: -15px;
                    border-bottom: 1px solid rgba(0,0,0,.05)
                }
                .sidebar-toggle{
                    line-height: 1;
                    color: #212529;
                }
                .p-0{
                    padding: 0!important;
                }
                .ml-3, .mx-3{
                    margin-left: 1rem!important;
                }
                .btn-link{
                    font-weight: 400;
                    color: #007bff;
                    background-color: transparent;
                }

            include ./includes/header

            .container-fluid
                .row
                    .col-12.col-md-3.col-xl-2.sidebar
                        .collapse.cat-links
                            .sidebar-item.active
                                a.sidebar-link(href='/') Links
                                ul.nav.sidebar-inner
                                    li.active.sidebar-inner-active
                                        a(href='/') Link1
                                    li.sidebar-inner-active
                                        a(href='/') Link2
                    .col-12.col-md-9.col-xl-9.py-md-3.pl-md-5.content
                        .row
                            .col-md-6
                                .card
                                    img.card-img-top(src="https://img9.doubanio.com/view/photo/l/public/p2567198874.webp",
                                    data-video="http://vfx.mtime.cn/Video/2017/03/31/mp4/170331093811717750.mp4",
                                    data-title='小丑 Joker (2019)'
                                    data-toggle="modal", data-target="#exampleModal")
                                    .card-body
                                        h4.card-title 小丑 Joker (2019)
                                        p.card-desc 这是电影描述
                                    .card-footer
                                        small.text-muted 1 天前更新
                            .col-md-6
                                .card
                                    img.card-img-top(src="https://img9.doubanio.com/view/photo/l/public/p2578045524.webp",
                                    data-video="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                                    data-title='82年生的金智英 82년생 김지영 (2019)'
                                    data-toggle="modal", data-target="#exampleModal")
                                    .card-body
                                        h4.card-title 82年生的金智英 82년생 김지영 (2019)
                                        p.card-desc 这是电影描述
                                    .card-footer
                                        small.text-muted 1 天前更新
                        .row
                            .col-md-6
                                .card
                                    img.card-img-top(src="https://img9.doubanio.com/view/photo/l/public/p2568902055.webp",
                                    data-video="http://www.w3school.com.cn/example/html5/mov_bbb.mp4",
                                    data-title='爱尔兰人 The Irishman'
                                    data-toggle="modal", data-target="#exampleModal")
                                    .card-body
                                        h4.card-title 爱尔兰人 The Irishman
                                        p.card-desc 这是电影描述
                                    .card-footer
                                        small.text-muted 1 天前更新
                            .col-md-6
                                .card
                                    img.card-img-top(src="https://img1.doubanio.com/view/photo/l/public/p2571760178.webp",
                                    data-video="https://media.w3.org/2010/05/sintel/trailer.mp4",
                                    data-title='婚姻故事 Marriage Story'
                                    data-toggle="modal", data-target="#exampleModal")
                                    .card-body
                                        h4.card-title 婚姻故事 Marriage Story
                                        p.card-desc 这是电影描述
                                    .card-footer
                                        small.text-muted 1 天前更新


            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="dplayer" referrerpolicy ="never"></div>
                </div>
                </div>
            </div>
            </div>

            include ./includes/script

            script.
                var player = null

                $(function(){
                    $('.card-img-top').click(function(){
                        var title = $(this).data('title')
                        var video = $(this).data('video')
                        var image = $(this).attr('src')
                        $('.modal-title').text(title)

                        player = new DPlayer({
                            container: document.getElementById('dplayer'),
                            video: {
                                url: video,
                                pic: image,
                                thumbnails: image
                            },
                        });
                    })
                })
        ```
        ```pug
        // /server/views/layouts/default.pug

        doctype html
        html
            head
                meta(charset="utf-8")
                meta(name="viewport", content="width=device-width, initial-scale=1")
                block title
                include ../includes/style
            body
                block content
        ```
        ```pug
        // /server/views/includes/header.pug

        header.navbar.narbar-expand.navbar-dark.flex-column.flex-md-row
            a.navbar-brand.mr-0.mr-md-2(href='/') 豆瓣预告片
            .navbar-nav-scroll
                ul.navbar-nav.bd-navbar-nav.flex-row
                    li.nav-item
                        a.nav-link.active(href='/link1') 快捷连接 1
        ```
        ```pug
        // /server/views/includes/script.pug

        script(src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js")
        script(src="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js")
        script(src="https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js")
        ```
        ```pug
        // /server/views/includes/style.pug

        link(href="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet")
        link(href="https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css" rel="stylesheet")
        ```



# 第6章 利用爬虫搞定网站基础数据
- ## 6-1 设计与分析
    - 网站框架上 骨架， 网站数据才是 血肉

    ```
    ···············
    ·             ·
    ·   动态网站   ·
    ·             ·
    ···············

        - 静态网站
        - 数据服务

        - Koa2
            - 父子进程通信

        - 数据爬取
            - 储存
                - MongoDB
                - MySQL
            - 获取
                - 模拟浏览器
                    - phantomJS
                    - NightMare
                    - pupeteer

                - API同步接口
- ## 6-2 利用 puppeteer 爬取和分析电影列表
    - ### 什么是 Puppeteer ？
        - [Puppeteer github](https://github.com/puppeteer/puppeteer)
        - Puppeteer 可以简单理解为 它能够模拟浏览器
        - 官方解释：Puppeteer 是 Google Chrome 团队官方的无界面（Headless）Chrome 工具
            - Chrome Headless 必将成为 web 应用 **`自动化测试`** 的行业标杆
    - ### 如何使用 Puppeteer ?
        - 安装 `npm i puppeteer`
        - 示例
            - 对于如何使用 Puppeteer，这非常之容易；如下简易的示例，即实现了：导航到 https://example.com 并将截屏保存为 example.png；
            ```js
            const puppeteer = require('puppeteer');

            (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://example.com');
            await page.screenshot({path: 'example.png'});
            await browser.close();
            })();
            ```
    ```js
    // /server/crawler/trailer-list.js
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
    ```

    - 执行脚本 `node server/crawler/trailer-list.js` ，然后会打印出下面结果
        ```js
        [
            {
                doubanID: 6981153,
                title: '爱尔兰人',
                rate: 9,
                poster: 'https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2568902055.jpg'
            },
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
            },
            // ...
        ]
        ```

- ## 6-3 child_process fork 子进程来运行爬虫脚本
    - 对于一个网站，我们通常提到一个词 —— **`可用性`**
        - 换一个词来描述，就是 **`稳定`**
        - 服务器上运行的程序、提供的服务 要足够的稳定，不能说挂就挂了
    - 而在 Node.js 它天生就是单线程的，这时候 如果我们在 Node.js 里面跑一个比较 重的服务的话，很容易导致 服务器整个挂掉
        - 所以，我们为了不让 服务器有挂掉的风险，我们会在 服务器 里，起若干个 **`子进程`** 来跑一些其他程序，降低服务器 挂掉的风险
        - 这样的话，即使 子进程挂了，主进程还健在
    - fork 可以派生出一个子进程
    ```js
    // /server/tasks/movie.js

    const cp = require('child_process')
    const { resolve } = require('path')

    ;(async () => {     // 自动执行函数
        const script = resolve(__dirname, '../crawler/trailer-list')
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
            let result = data.result

            console.log(result)
        })

    })()
    ```
    - 在我们上一节的代码中，只是 简单的 拿到了信息，然后打印了一下
        - 现在我们加上
        ```js
        // ...

        process.send({result})      // 将结果发送出去
        process.exit(0)             // 退出程序
        ```
        
    ```js
    // /server/crawler/trailer-list.js

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

        process.send({result})      // 将结果发送出去
        process.exit(0)             // 退出程序
    })()
    ```
    - 执行代码 验证一下 `node server/tasks/movies.js`

- ## 6-4 服务器端通过 request 向豆瓣 api 请求详细数据
    - 前言
        - 互联网上的 **`信息传递`**，都是基于各种 **`请求和返回`** , 比如说基于 TCP/IP 的 HTTP 协议
        - 而上节课 我们的方法 比较不一样，他是在本地 启动一个 puppeteer 无界面浏览器（Headless browser），**`来爬一些 比较难以爬取的数据`**
            - 请求网页 -》 分析文本 -》 提取目标信息
        - 本节，我们介绍 平常 服务器端 对 服务器端 的数据请求 ，也就是 HTTP 协议请求
    - 搜索 `douban API` , 找到 豆瓣API 官网 https://douban-api-docs.zce.me/
        - 找到 电影条目信息 https://douban-api-docs.zce.me/movie.html#subject
    - 遇到的问题
        - 豆瓣接口调用失败
            - http://api.douban.com/v2/movie/subject/1764796
            - 当我直接访问上面的连接时，回返回下面的 错误提示
            ```
            {
                msg: "invalid_apikey, Please contact bd-team@douban.com for authorized access.",
                code: 104,
                request: "GET /v2/movie/subject/1764796"
            }
            ```
        - 解:
            - 豆瓣API有变化，需要在请求API的url后面跟一个apikey参数：

            - 电影列表API：http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10

            - 电影详情API：`http://api.douban.com/v2/movie/subject/${event.movieid}?apikey=0df993c66c0c636e29ecbb5344252a4a`
        - 最终解：http://api.douban.com/v2/movie/subject/1764796?apikey=0df993c66c0c636e29ecbb5344252a4a

    - 安装 `npm i request-promise-native`
        - `npm i request`

    ```js
    // /server/tasks/douban_api.js

    // http://api.douban.com/v2/movie/subject/1764796?apikey=0df993c66c0c636e29ecbb5344252a4a


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
    ```
    - 执行脚本 能打印出爬出结果，即为 脚本没有错误

- ## 6-5 scott 与妹子合租引发的同步异步与阻塞
- ## 6-6 puppeteer 深度爬取封面图和视频地址
    - 本节目标：
        - 爬取 视频地址
        - 爬取 视频封面图
    ```js
    // /server/crawler/movie.js

    const puppeteer = require('puppeteer')

    console.log('You in...')

    const url = 'https://movie.douban.com/subject/'
    const doubanID = 1652592
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
    ```
    ```js
    // /server/tasks/trailer.js

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
    ```
    - 执行脚本 `node server/tasks/trailer.js`
    - 打印结果
        ```
        You in...
        Start visit the target page...
        {
            doubanID: 1652592,
            coverImage: 'background-image:url(https://img1.doubanio.com/img/trailer/medium/2545038147.jpg?)',
            video: 'http://vt1.doubanio.com/202001121811/3c584fc7b6d3bf46a64cd4c1fd90ad4a/view/movie/M/402410829.mp4'
        }
        {
            doubanID: 1652592,
            coverImage: 'background-image:url(https://img1.doubanio.com/img/trailer/medium/2545038147.jpg?)',
            video: 'http://vt1.doubanio.com/202001121811/3c584fc7b6d3bf46a64cd4c1fd90ad4a/view/movie/M/402410829.mp4'
        }
        null
        ```

- ## 6-7 上传线上封面图和视频搬砖到七牛云图床上
    - 由于这个节课 视频文件是 .exe ，下载最新 迅雷影音 双击即可播放
    - 为啥要另外上传到 **`对象存储`** 上？
        - 因为网络资源 有时候会不稳定，现在能访问，过一会就可能 无法访问了，**`数据源不可靠`**
        - 所以，我们要把它下载下来，保存在 自己可控 的地方
        - 但是，由于视频什么的，文件体积非常大，保存到服务器中，又很占地方
        - 所以，我们把 数据 上传到第三方的 **`对象存储`** 是最合适的



# 第7章 彩蛋篇 - [高难度拔高干货] 深度理解 Node.js 异步 IO 模型

        ```
        ···············
        ·             ·
        ·   进程模型   ·
        ·             ·
        ···············

            - 子进程模型

            - 进程的9个问题
                - 什么是同步异步
                - 什么是异步IO
                - 什么是阻塞非阻塞
                - 什么是事件循环与事件驱动
                - 什么是单线程
                - 什么是进程
                - 什么是子进程
                - 怎样启动子进程
                - 进程间如何通信

        ```
- ## 7-1 前言
- ## 7-2 从异步非阻塞的代码案例切入事件循环
    - 什么是IO？
        - Input / Output
        - 说白了，就是数据的进出
    - 3个线索
        - process.nextTick 优先级
        - libuv 相关知识
        - eventEmitter 
    - ### 看下面代码，先自己 预测一下 它们的执行顺序，然后再执行代码 验证结果
    ```js
    const { readFile } = require('fs')
    const EventEmitter = require('events')

    class EE extends EventEmitter {}

    const yy = new EE()

    yy.on('event', () => {
        console.log('出大事了！')
    })

    setTimeout(() => {
        console.log('0 毫秒后到期执行的定时器回调')
    }, 0)

    setTimeout(() => {
        console.log('100 毫秒后到期执行的定时器回调')
    }, 100)

    setTimeout(() => {
        console.log('200 毫秒后到期执行的定时器回调')
    }, 200)

    readFile('../package.json', 'utf-8', data => {
        console.log('完成文件 1 读取操作的回调')
    })

    readFile('../README.md', 'utf-8', data => {
        console.log('完成文件 2 读取操作的回调')
    })

    setImmediate(() => {
        console.log('immediate 立即回调')
    })

    process.nextTick(() => {
        console.log('process.nextTick 的回调')
    })

    Promise.resolve()
        .then(() => {
            yy.emit('event')

            process.nextTick(() => {
                console.log('process.nextTick 的第 2 次回调')
            })

            console.log('Promise 的第 1 次回调')
        })
        .then(() => {
            console.log('Promise 的第 2 次回调')
        })
    ```
    
- ## 7-3 从libuv 源码来理解event loop的六个阶段
    - 前言
        - Node.js 采用 Google Chrome V8 作为脚本解释引擎
        - 在 处理 IO 方面，采用的是 自家设计的 libuv
            - libuv 是一座桥 ，它封装了 针对不同系统的 IO 操作，向上呢 对 Node.js 提供了一致的 异步非阻塞接口 和 事件循环
            - 当我们讨论 事件循环 的时候，往往都和 libuv 息息相关，下面 我们来看 libuv 的代码
    - 打开 libuv github 代码
        - https://github.com/libuv/libuv
        - 按 t 键会打开一个文件浏览器，搜索 `core.c`, 选择 `unix/core.c` 文件
        - 看里面的 核心函数 `uv_run()`
            - `uv_loop_t` 就是事件循环结构, 每次执行 `uv_run` 的时候 都会执行 **`事件循环迭代`** ( iteration )
            - **`迭代`** ( iteration )，我们之前的课程 也介绍过：把一个对象 内部运行的几个状态 通过 next() 这样的语法糖 可以把 它一层层的迭代完毕
            - 这里 uv_run() 也是一样的
        - 里面有个 while , 会依次去执行 
            ```c
            uv__update_time()
            uv__run_timers()
            uv__run_pending()
            uv__run_idle()
            uv__run_prepare()
            uv__io_poll()
            uv__run_check()
            uv__run_closing_handles()
            ```
            - 这8个函数 可以看作是 头尾相连 的阶段，它们串起来 就组成了 **`事件循环的完整过程`**
                - 所谓的循环 就是这个 while 的循环了
                - 所谓的处理顺序 无非就是这几个 函数调用来 调用去
                - 事件循环 (event loop) 每次跑一圈 都是经过这里面的几个阶段
            - 但是 这几个函数是做什么的呢？
                - https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
                - 这篇文章 非常完整的介绍了 Node.js 的事件循环模型
                - ### 什么是事件循环？
                    - 事件循环 就是允许 node.js 去执行一些 异步非阻塞的操作，因为 js 是单线程的，所以 这些异步操作 都交给 **操作系统的内核** 去做。操作系统 基本都是 多线程的，可以在后台 同时处理 多个不同的操作。
                    - 一旦 某个操作完成了 比如说 文件读取到了，内核 就会通知 node.js 在合适的时机 去执行一个回调函数。
                    - 而这个时机，就是 我们上面提到的 uv_run() 里的 8个函数
                - ### 事件循环说明 Event Loop Explained
                    - 这个 8个函数 有自己的执行顺序
                    - 这个顺序 就是 下面这张图
                    - node.js 在启动的时候会 **`初始化事件循环`**
                    - 然后 处理在 node.js 中运行的代码，这些代码中 包含各种 api 的调用
                    - 然后才运行事件循环
                    ```
                       ┌───────────────────────────┐
                    ┌─>│           timers          │
                    │  └─────────────┬─────────────┘
                    │  ┌─────────────┴─────────────┐
                    │  │   pending callbacks (I/O) │
                    │  └─────────────┬─────────────┘
                    │  ┌─────────────┴─────────────┐
                    │  │       idle, prepare       │
                    │  └─────────────┬─────────────┘      ┌───────────────┐
                    │  ┌─────────────┴─────────────┐      │   incoming:   │
                    │  │           poll            │<─────┤  connections, │
                    │  └─────────────┬─────────────┘      │   data, etc.  │
                    │  ┌─────────────┴─────────────┐      └───────────────┘
                    │  │           check           │
                    │  └─────────────┬─────────────┘
                    │  ┌─────────────┴─────────────┐
                    └──┤      close callbacks      │
                       └───────────────────────────┘
                    ```
                    - 它把 idle, prepare 并成了一个，而且 拿掉了 uv__update_time(), 整理成了 6个阶段
                    - 第一阶段：timmer
                        - setTimeout, setInterval 在这个阶段被执行。这个阶段 对应的 源代码 就是 `uv__run_timers()`
                    - 第二阶段：pending callbacks (I/O callbacks) 
                        - 执行一些错误处理，如 socket , stream , TCP , Pipe。这个阶段 对应的 源代码 就是 `uv__run_pending`
                    - 第三阶段：
                    - 第四阶段：poll 轮循阶段
                        - 向系统去获取 新的 I/O 事件，执行对应的 I/O 回调




--------------  05:40 -------------






                    - 第三阶段：
                    - 第三阶段：
                    - 第三阶段：
        ```c
        /* /src/unix/core.c */

        int uv_run(uv_loop_t* loop, uv_run_mode mode) {
          int timeout;
          int r;
          int ran_pending;

          r = uv__loop_alive(loop);
          if (!r)
            uv__update_time(loop);

          while (r != 0 && loop->stop_flag == 0) {
            uv__update_time(loop);
            uv__run_timers(loop);
            ran_pending = uv__run_pending(loop);
            uv__run_idle(loop);
            uv__run_prepare(loop);

            timeout = 0;
            if ((mode == UV_RUN_ONCE && !ran_pending) || mode == UV_RUN_DEFAULT)
              timeout = uv_backend_timeout(loop);

            uv__io_poll(loop, timeout);
            uv__run_check(loop);
            uv__run_closing_handles(loop);

            if (mode == UV_RUN_ONCE) {
              /* UV_RUN_ONCE implies forward progress: at least one callback must have
              * been invoked when it returns. uv__io_poll() can return without doing
              * I/O (meaning: no callbacks) when its timeout expires - which means we
              * have pending timers that satisfy the forward progress constraint.
              *
              * UV_RUN_NOWAIT makes no guarantees about progress so it's omitted from
              * the check.
              */
              uv__update_time(loop);
              uv__run_timers(loop);
            }

            r = uv__loop_alive(loop);
            if (mode == UV_RUN_ONCE || mode == UV_RUN_NOWAIT)
              break;
          }

          /* The if statement lets gcc compile it to a conditional store. Avoids
          * dirtying a cache line.
          */
          if (loop->stop_flag != 0)
            loop->stop_flag = 0;

          return r;
        }
        ```

- ## 7-4 设计一个测试用例来验证自己对事件循环的理解
