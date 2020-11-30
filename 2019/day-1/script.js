const fs = require("fs");

function fuelReq(mass) {
    return Math.floor(mass/3) - 2;
}

function recFuelReq(mass) {
    let recSum = 0;
    if (fuelReq(mass) <= 0) {
        recSum = 0;
    } else {
        recSum = recSum + fuelReq(mass) + recFuelReq(fuelReq(mass));
    }
    return recSum;
}

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let arr = data.split('\n').map(Number); 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + recFuelReq(arr[i]);
    }
    console.log("sum of the fuel requirements is: ", sum);
});



