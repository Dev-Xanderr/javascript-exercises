const sumAll = function(min,max) {
   
    if (!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }
    if (min< 0 || max < 0){
        return "ERROR";
    }
    if (min > max){
        const tep = min;
        min = max;
        max = tep;
    }


    let totalSum = 0;
    for(let i = min; i <= max ; i++){
        totalSum += i
    } 
    return totalSum;
};
// Do not edit below this line
module.exports = sumAll;
