const removeFromArray = function (arr, ...rem) {
    const newArray = [];
    arr.forEach((item) => {
        if (!rem.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
