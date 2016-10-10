import shell from 'shelljs'
import path from 'path'
import {cordovaPwd} from '../index'

// $ cordovaCompile --target=''

async function run(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    shell.cd('app')
    shell.exec(`${cordovaPwd} run ${args.join(' ')}`);
    shell.cd('..')
}

export default run;