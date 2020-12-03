const fs = require("fs");
const { count } = require("console");

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let arr = data.split('\n');

    // traverse the matrix and count the trees
    let traverse = (right, down) => {

        // find out the number of times we have to clone our lines
        const cloneCount = Math.floor(((arr.length - 1) * right + 1) / arr[0].length);

        // clone every line x cloneCount
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].repeat(cloneCount+1);
        }

        let j = 0;
        let countTrees = 0;
        for (let i = 0; i < arr.length-1; i += down) {
            if (arr[i][j] === '#') {
                countTrees++;
            }
            j += right;
        }

        return countTrees;
    }

    console.log('The number of trees encountered is: ', traverse(3,1));
    console.log('Multiply trees all listed slopes: ', traverse(1,1) * traverse(3,1) * traverse(5,1) * traverse(7,1) * traverse(1,2));
});



