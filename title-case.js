// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    str.trim();
    if (str.length === 0) {
        return str;
    }

    // try 3
    return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");

    // try 2
    var arr = str.split(" ");

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        arr[index] = element[0].toUpperCase() + element.slice(1).toLowerCase();
    };

    return arr.join(" ");

    // try 1
    // var arr = str.split("");

    // arr[0] = arr[0].toUpperCase();
    // for (let index = 1; index < arr.length; index++) {
    //     if (arr[index - 1] === " ") {
    //         arr[index] = arr[index].toUpperCase();
    //         index++;
    //     } else {
    //         arr[index] = arr[index].toLowerCase();
    //     };
    // };

    // return arr.join("");
};
