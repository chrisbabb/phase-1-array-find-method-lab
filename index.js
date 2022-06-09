// code your solution here
function superbowlWin(result) {
    const foundYear = result.find(recordWL => recordWL.result === "W")
    if(typeof foundYear !== 'undefined'){
        return foundYear.year
    }
    return foundYear
}