const fs = require("fs");

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let arr = data.split('\n');

    let freq = (letter, word) => {
        let letterFreq = 0;
        for (let i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                letterFreq += 1;
            }
        }
        return letterFreq;
    }

    let count = 0;
    let validCount = 0;
    
    for (let i = 0; i < arr.length-1; i++) {
        let b = arr[i].split(' ');
        let freqArr = b[0].split('-');
        let letterSearch = b[1][0];
        let password = b[2];

        if (freq(letterSearch, password) >= freqArr[0] && freq(letterSearch, password) <= freqArr[1]) {
            count = count + 1;
        }

        let validity = 0;
        
        if (password.charAt(freqArr[0]-1) === letterSearch) {
            validity += 1;
        }
        
        if (password.charAt(freqArr[1]-1) === letterSearch) {
            validity += 1;
        }

        if (validity === 1) {
            validCount += 1;
        }
    }

    console.log('Total number of valid passwords is: ', count);
    console.log('Actual number of valid passwords is: ', validCount);
});



