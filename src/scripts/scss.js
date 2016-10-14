import run, {assets} from '../index'

// $ devCordova

async function scss(args) {
    await run(assets, 'temp')
}
export default scss


