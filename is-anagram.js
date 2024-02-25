// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    function countChars(str) {
        var obj = {};
        for (let index = 0; index < str.length; index++) {
            const element = str[index];
            if (!obj[element]) {
                obj[element] = 1;
            } else {
                obj[element]++;
            }
        }
        return obj;
    }

    if (strA.length != strB.length) {
        return false;
    }
    
    // try 1: count chars in strA and strB then check if each char in strA has appearance != strB
    var strAChars = countChars(strA);
    var strBChars = countChars(strB);

    // console.log(strAChars, strBChars);

    for (const char in strAChars) {
        if (Object.hasOwnProperty.call(strAChars, char)) {
            if (!strBChars[char] || (strAChars[char] != strBChars[char])) {
                return false;
            };
        };
    };
    
    return true;
};

console.log(isAnagram("abc", "cba")); //expect true
console.log(isAnagram("octagonal", "tganoalco")); //expect true
console.log(isAnagram("obsidian", "danisboba")); //expect false
console.log(isAnagram("targaryen", "targaryen")); //expect true
console.log(isAnagram("abcoctagonaltargaryenx", "cbatganoalcotargaryeny")); //expect false
