// rest parameter used in the function definition. The rest of the arguments passed in (which represent elements to remove)
// will be in an array "removeElementsArray"
const removeFromArray = function(arr, ...removeElementsArray) {
    // iterate over elements to remove
    for (const element of removeElementsArray) {
        // remove element from the array
        arr = arr.filter(function (item) {return item !== element});
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
