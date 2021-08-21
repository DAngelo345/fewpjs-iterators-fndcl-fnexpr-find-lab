
function superbowlWin(arrayObj) {
    let result = arrayObj.find(function (obj) { return obj.result === "W" })
    return !!result ? result.year : undefined
    
} 