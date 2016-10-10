import shell from 'shelljs'
import path from 'path'

import {cordovaPwd} from '../index'
// $ add [platform1] [platform2] ...

async function add(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    shell.cd('app')
    args.map(target=>{
        shell.exec(`${cordovaPwd} platform rm ${target}`);
        shell.exec(`${cordovaPwd} platform add ${target}`);
    })
    shell.cd('..')
}

export default add;


