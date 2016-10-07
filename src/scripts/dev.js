import run, {serve} from '../index'

// $ dev

async function dev() {
    await run(serve, 'src --es6 --scss')
}

export default dev;
