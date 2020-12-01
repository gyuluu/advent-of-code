const fs = require("fs");

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let arr = data.split('\n').map(Number); 
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 2020) {
                console.log("Multiplying the entries that sum up to 2020 gives us: ", arr[i] * arr[j]);
                break;
            }

            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 2020) {
                    console.log("Multiplying the 3 entries that sum up to 2020 gives us: ", arr[i] * arr[j] * arr[k]);
                    break;
                }
            }
        }
    }
});



