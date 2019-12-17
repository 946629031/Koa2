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