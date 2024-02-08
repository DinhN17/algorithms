// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {

    // try 3
        for (let index = 0; index < str.length/2; index++) {
            if (str.charAt(index) !== str.charAt(str.length - index - 1)) {
                return false;
            }
        }
        return true;
    
    // try 2
        // return str === str.split('').reverse().join('');    
    
    // try 1
        // var temp = "";
        // for (let index = str.length - 1; index >= 0; index--) {
        //     temp += str[index];
        // }
        // return temp === str
};