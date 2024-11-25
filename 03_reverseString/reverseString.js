const reverseString = function(string) {
    let chars = string.split("");

    // reverse the characters
    for (let i = 0; i < Math.floor(chars.length / 2); i++) {
        let left = chars[i];
        let right = chars[chars.length - i - 1];
        chars[i] = right;
        chars[chars.length - i - 1] = left;
    }
    return chars.join("");
};

// Do not edit below this line
module.exports = reverseString;
