const fs = require("fs");

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let arr = data.split('\n');

    const row = (pass) => {
        let low = 0;
        let high = 127;
        for (let i = 0; i < 7; i++) {
            let middle = Math.floor((low + high) / 2);

            if (pass[i] === 'F') {
                high = middle;
            } else {
                low = middle + 1;
            }
        }

        return low;
    }

    const col = (pass) => {
        let low = 0;
        let high = 7;
        for (let i = 7; i < 10; i++) {
            let middle = Math.floor((low + high) / 2);

            if (pass[i] === 'L') {
                high = middle;
            } else {
                low = middle + 1;
            }
        }

        return low;
     }

    const seatId = (pass) => {
         return (row(pass) * 8 + col(pass));
     }

    let max = 0;
    let seatArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let seat = seatId(arr[i]);
        seatArr.push(seat);
        if (seat > max) {
            max = seat;
        }
    }

    seatArr.sort();

    let missing = 0;
    for (let i = 1; i < seatArr.length; i++) {
        if (seatArr[i] - seatArr[i-1] !== 1) {
            missing = (seatArr[i] + seatArr[i-1]) / 2;
            break;
        }
    }

    console.log('Your missing number is: ', missing);
    console.log('Highest seat ID is: ', max);   
});



