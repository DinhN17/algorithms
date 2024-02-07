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

