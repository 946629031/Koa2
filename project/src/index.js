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