// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    
    
    // try 1
    str.trim();
    if (str.length === 0) {
        return str;
    };

    var arr = str.split("");

    arr[0] = arr[0].toUpperCase();
    for (let index = 1; index < arr.length; index++) {
        if (arr[index - 1] === " ") {
            arr[index] = arr[index].toUpperCase();
            index++;
        } else {
            arr[index] = arr[index].toLowerCase();
        };
    };

    return arr.join("");
};
