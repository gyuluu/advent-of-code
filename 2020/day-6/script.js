const fs = require("fs");
const { group } = require("console");

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let groups = data.split('\n\n');
    let groupLine = [];
    for (let i = 0; i < groups.length; i++) {
        groupLine[i] = groups[i].replace(/[\n\r]/g, '');;
    }

    const countUnique = (str) => {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            let unique = true;
            for (let j = i + 1; j < str.length; j++) {
                if (str[i] === str[j]) {
                    unique = false;
                }
            }
            if (unique) count++;
        }
        return count;
    }

    let sum = 0;
    for (let i = 0; i < groupLine.length; i++) {
        sum = sum + countUnique(groupLine[i]);
    }

    console.log('The sum of all counts is: ', sum);

    let sumEvery = 0;
    
    for (let i = 0; i < groups.length; i++) {
        let ques = groups[i].split('\n');
        let countEvery = 0;
        if (ques.length === 1) {
            countEvery = ques[0].length;
        } else {
            for (let j = 0; j < ques[0].length; j++) {
                let bool = true;
                for (let k = 1; k < ques.length; k++) {
                    if (ques[k].includes(ques[0][j]) === false) {
                        bool = false;
                    }
                }
                if (bool) {
                    countEvery++;
                }
            }
        }

        sumEvery += countEvery;
    }

    console.log('The sum of everyone counts is: ', sumEvery);

});



