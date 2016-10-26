import run, {serve} from '../index'

// $ dev

async function dev() {
    let args = process.argv.slice(4, process.argv.length)
    await run(serve, `src --es6 --scss ${(args[0])?args[0]:''}`)
}

export default dev
