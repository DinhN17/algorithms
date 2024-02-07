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
