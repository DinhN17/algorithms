// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    var time = 0;
    let timer = setInterval(() => {
        time++;
    }, 1);
    str.toLowerCase();
    var strArray = str.split("");
    var result = {};
    var countLoop = 0;
    
    //try 2: use object to keep track character
    for (let index = 0; index < strArray.length; index++) {
        countLoop++;
        const element = strArray[index];
        if (!result[element]) {
            result[element] = 1;            
        } else {
            result[element]++;
        };
    };


    //try 1 : 
    // for (let index = 0; index < strArray.length; index++) {
    //     const element = strArray[index];
    //     let i = index + 1;
    //     let count = 1;
    //     do {
    //         countLoop++;
    //         if (element === strArray[i]) {
    //             count++;
    //             result[element] = count;
    //             strArray.splice(i,1);
    //         } else {
    //             result[element] = count;
    //             i++;
    //         }
    //     } while (i < strArray.length);   
    // };

    console.log(result);
    console.log(countLoop);
    clearInterval(timer);
    console.log(time);
    return result;
};
