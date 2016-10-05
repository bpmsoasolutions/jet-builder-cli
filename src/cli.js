import path from 'path'
import run from './common/run'

export const main = function(){

    if (process.argv.length > 2) {
        let localTool = path.resolve(`tool/${process.argv[2]}.js`)
        let globalTool = path.resolve(__dirname, `./builders/${process.argv[2]}.js`)
        let m

        try {
            console.log(localTool)
            m = require(localTool).default;
        } catch(error) {
            console.log(`Warn: Error in project script ${error}`)
            try {
                m = require(globalTool).default;
            } catch(e) {
                console.log(`Warn: Error in global script ${e}`)
                console.log('Neither local/modules task found...exiting')
                process.exit(0)
            }
        }

        run(m).catch(err => { console.error(err.stack); process.exit(1); });
    }
}