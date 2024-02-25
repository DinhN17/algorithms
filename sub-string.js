// find substring in a string sourced from https://www.thatjsdude.com/interview/js1.html

//try 3
var index =0;
function subStringMatch(str, subStr) {
    
    if (str == "" && subStr == "") {
        return index;
    };
    if (str == "") {
        return -1;
    };
    if (subStr == "") {
        return index;
    } else { if (str[index] == subStr[0]) {
            return subStringMatch(str.substring(index+1), subStr.substring(1));
        } else {
            index++;
            return subStringMatch(str.substring(index), subStr.substring(0));
        };
    };
};

// try 2
// function subStringMatch(str, subStr) {
    
//     return str.indexOf(subStr);
    
// }

// try 1
// function subStringMatch(str, subStr) {
//     // var index = 0;
//     var strLength = str.length;
//     var subStrLength = subStr.length;
//     const length = strLength - subStrLength + 1;
//     var i = 0;
//     var j = 0;

//     for (i = 0; i < length; i++) {
//         j = 0;
//         while (j < subStrLength) {
//             if (str[i+j] != subStr[j]) {
//                 break;
//             } else {j++};
//         };

//         if (j == subStrLength) {
//             return i;
//         };
        
//     }
//     return -1;
// };

console.log(subStringMatch('abbcdabbbbbck', 'ab')); //expect 0
console.log(subStringMatch('abbcdabbbbbck', 'bck')); //expect 10
console.log(subStringMatch('abbcdabbbbbck', 'bbbck')); //expect 8