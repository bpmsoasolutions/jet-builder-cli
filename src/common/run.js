import readline from 'readline'

const format = function (time) {
    return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
}


const clearLine = function() {
  readline.clearLine(process.stdout, 0)
  readline.cursorTo(process.stdout, 0)
}

const run = function (fn, options) {
    const task = typeof fn.default === 'undefined' ? fn : fn.default
    const start = new Date()
    console.log(`[${format(start)}] Starting '${task.name}${options ? `(${options})` : ''}'...`)

    return task(options).then(resolution => {
        const end = new Date()
        const time = end.getTime() - start.getTime()

        clearLine()
        console.log(`[${format(end)}] Finished '${task.name}${options ? `(${options})` : ''}' after ${time} ms`)
        return resolution
    })
}

export default run