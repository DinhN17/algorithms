// Write code to return the largest number in the given array
var maxNum = function(arr) {
    var max = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element > max) {
            max = element;
        }
    }
    return max;
};

// Write code to return the the number of vowels in `str`
var vowelCount = function(str) {
    var test = str.toLowerCase();
    var strArray = test.split("");
    var result = 0;

    console.log(strArray);

    for (let index = 0; index < strArray.length; index++) {
        const element = strArray[index];
        if (element === "a" ||
            element === "e" || 
            element === "i" || 
            element === "o" || 
            element === "u") {
                result++;
        }
    }
    console.log(result);
    return result;
};

// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two
var productOfLargestTwo = function(arr) {
    //try 2
    var result = [];
    
    if (arr[0] > arr[1]) {
        result[0] = arr[1];
        result[1] = arr[0];
    } else {
        result[0] = arr[0];
        result[1] = arr[1];
    };

    if (arr.length > 2) {
        for (let index = 2; index < arr.length; index++) {
            const element = arr[index];
            if (element > result[1]) {
                result[0] = result[1];
                result[1] = element;
            } else if (element > result[0]) {
                result[0] = element;
            }; 
        }
    };        
    return result[0] * result[1];
        
    //try 1
    // arr.sort(function(a, b) {return b - a});
    // return arr[0] * arr[1];
};

// Write code to create a function that accepts a string and returns the string in camelCase
var camelCase = function(str) {
    
    //try 2
    var strArr = str.trim().split(" ");
    strArr[0] = strArr[0].toLowerCase();
    for (let index = 1; index < strArr.length; index++) {
        let element = strArr[index];
        strArr[index] = element[0].toUpperCase() + element.slice(1).toLowerCase();
    }
    
    return strArr.join("");
    
    //try 1
    // var lowerCase = str.toLowerCase().trim();
    // var strArr = lowerCase.split("");

    // for (let index = 0; index < strArr.length; index++) {
    //     if (strArr[index] === " ") {
    //         strArr.splice(index, 1);
    //         strArr[index] = strArr[index].toUpperCase();
    //     }
    // }
    // return strArr.join("");
};