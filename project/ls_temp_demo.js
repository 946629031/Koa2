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
