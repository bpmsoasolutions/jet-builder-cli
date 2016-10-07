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