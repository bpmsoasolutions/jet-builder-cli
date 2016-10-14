import shell from 'shelljs'
import path from 'path'

import {ncpPwd} from '../index'

// $ copyFolders [source] [destination] [regex to ignore]

async function copyFolders(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)
    let ignore = (args[3]) ? `--ignore=${args[3]}` : ''

    shell.exec(`${ncpPwd} ${args[0]} ${args[1]} ${ignore}`)
}

export default copyFolders