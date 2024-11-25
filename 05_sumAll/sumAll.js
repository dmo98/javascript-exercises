const sumAll = function(num1, num2) {
    // check if both values are integers
    if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return 'ERROR';
    }

    smallerNum = Math.min(num1, num2);
    largerNum = Math.max(num1, num2);

    if (smallerNum < 0) {
        return 'ERROR';
    }

    let total = 0
    for (let number = smallerNum; number <= largerNum; number++) {
        total += number;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
