const fs = require("fs");

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    const up = (data.match(/\(/g) || []).length;
    const down = (data.match(/\)/g) || []).length;
    const answer = up - down;
    console.log("The instructions take Santa to floor number: ", answer);
    
    let sum = 0;
    for (let i=0; i<data.length; i++) {
        if (data[i] === '(') {
            sum += 1;
        } else {
            sum -= 1;
        }

        if (sum < 0) {
            console.log('Santa enters the basement at position: ', i+1);
            break;
        }
    }
});