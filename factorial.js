// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    
    
    //try 2
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    };

    // try 1
    // var result =1;

    // if (num === 0 || num === 1) {
    //     return result;
    // };

    // for (let index = 1; index < num; index++) {
    //     result = result * (index + 1);
    // };

    // return result;
};
