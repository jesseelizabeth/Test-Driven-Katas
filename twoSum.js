
twoSum = function(arr,expectedSum){
    let res = []
    for (let i = 0; i<arr.length; i++){
        const diff = expectedSum - arr[i];
        //is the difference in the array?
        const idx = arr.indexOf(diff)
        const isPresent = (idx > -1)
        // is it distinct frm current
        const isDistinct = (idx !== i)
        console.log(i, diff, idx, isPresent, isDistinct)
        if (isPresent && isDistinct) {
            res.push(i)
            res.push(idx)
           break; //only need one result
        }
    }
    return res
}
module.exports = twoSum