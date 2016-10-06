import run, {serve} from '../index'

// $ dev

async function dev() {
    await run(serve, 'src --es6 --sass')
}

export default dev;
