import del from 'del'

async function removeCordova(opts) {
    await del('app')
}

export default removeCordova