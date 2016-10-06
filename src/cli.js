import path from 'path'
import run from './common/run'
const pkg = require('../package.json')

export const main = function(){

    console.log( '\n'+
        '    __ _____             _     _      _       _ _   _ _           _ \n'+
        ' __|  | __  |   ___     |_|___| |_   | |_ _ _|_| |_| | |_ ___ ___| |\n'+
        '|  |  | __ -|  |___|    | | -_|  _|  | . | | | | | . |  _| . | . | |\n'+
        '|_____|_____|          _| |___|_|    |___|___|_|_|___|_| |___|___|_|\n'+
        '                      |___|                                         \n'+
        `Version: ${pkg.version}`
    )

    if (process.argv.length > 2) {
        let localTool = path.resolve(`tool/${process.argv[2]}.js`)
        let globalTool = path.resolve(__dirname, `./scripts/${process.argv[2]}.js`)
        let m

        try {
            m = require(localTool).default
        } catch(error) {
            try {
                m = require(globalTool).default
            } catch(e) {
                console.log(`Warn: project ${error}`)
                console.log(`Warn: global ${e}`)
                console.log('Neither local/modules task found...exiting')
                process.exit(0)
            }
        }

        return run(m)
            .then(a=> console.log(a))
            .catch(err => { console.error(err.stack); process.exit(1) })

    } else {
        console.log('A command must be specified...')
    }
}