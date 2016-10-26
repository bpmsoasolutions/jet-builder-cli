export const textReplace = function(tagStart, tagEnd, replacement, text){
    if (!tagEnd){
        tagEnd = tagStart
    }

    let start = text.indexOf(tagStart)
    let end = text.indexOf(tagEnd)

    let startText = text.slice(0,start)
    let endText = text.slice(end+tagEnd.length,text.length)

    return `${startText}${replacement}${endText}`
}

export const argsParser = function(args){
    return args
        .reduce((last, actual, index, arr) => {
            //console.log(last, actual, index, arr)
            let result = {}
            if (actual && actual.indexOf('--') > -1 && actual.indexOf('=') > -1){
                let cmds = actual.split('=')
                result = {[cmds[0].replace('--','')]: cmds[1]}
            } else if (actual && actual.indexOf('--') > -1){
                result = {[actual.replace('--','')]: true}
            } else {
                result = {}
            }

            return Object.assign(last, result)
        }, {})
}