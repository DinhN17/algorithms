// find substring in a string sourced from https://www.thatjsdude.com/interview/js1.html

// try 1
function subStringMatch(str, subStr) {
    // var index = 0;
    var strLength = str.length;
    var subStrLength = subStr.length;
    const length = strLength - subStrLength + 1;
    var i = 0;
    var j = 0;

    for (i = 0; i < length; i++) {
        j = 0;
        while (j < subStrLength) {
            if (str[i+j] != subStr[j]) {
                break;
            } else {j++};
        };

        if (j == subStrLength) {
            return i;
        };
        
    }
    return -1;
};

console.log(subStringMatch('abbcdabbbbbck', 'ab'));
console.log(subStringMatch('abbcdabbbbbck', 'bck'));
console.log(subStringMatch('abbcdabbbbbck', 'bbbck'));