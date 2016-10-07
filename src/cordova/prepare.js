import shell from 'shelljs'
import path from 'path'

async function prepare() {
    shell.cd('app')
    shell.exec(`${path.resolve('node_modules/.bin/cordova')} prepare`)
    shell.cd('..')
}

export default prepare;