const fs = require("fs");

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let passports = data.split('\n\n');
    
    const checkByr = (year) => {
        let bool = false;
        if (year >= 1920 && year <= 2002) {
            bool = true;
        }
        return bool;
    }

    const checkIyr = (year) => {
        let bool = false;
        if (year >= 2010 && year <= 2020) {
            bool = true;
        }
        return bool;
    }

    const checkEyr = (year) => {
        let bool = false;
        if (year >= 2020 && year <= 2030) {
            bool = true;
        }
        return bool;
    }

    const checkHgt = (height) => {
        let bool = false;
        if (height.includes('cm')) {
            let heightNum = height.replace('cm', '');
            if (parseInt(heightNum) >= 150 && parseInt(heightNum) <= 193) {
                bool = true;
            }
        } else if (height.includes('in')) {
            let heightNum = height.replace('cm', '');
            if (parseInt(heightNum) >= 59 && parseInt(heightNum) <= 76) {
                bool = true;
            }
        }
        return bool;
    }

    const checkHcl = (color) => {
        let bool = false;

        if (color[0] === '#' && color.length === 7) {
            let colorSmall = color.substring(1);
            if (colorSmall.match(/^[a-z0-9]+$/i)) {
                bool = true;
            }
        }

        return bool;
    }

    const checkEcl = (color) => {
        let bool = false;

        if (color === 'amb' || color === 'blu' || color === 'brn' || color === 'gry' || color === 'grn' || color === 'hzl' || color === 'oth') {
            bool = true;
        }

        return bool;
    }

    const checkPid = (id) => {
        let bool = false;

        if (id.length === 9) {
            bool = true;
        }

        return bool;
    }

    let countValid = 0;
    let countStrictValid = 0;
    for (let i = 0; i < passports.length; i++) {
        passports[i] = passports[i].replace(/\n/g, " ");

        let passData = passports[i].split(" ");
        
        if ((passData.length === 8) || (passData.length === 7 && passports[i].includes('cid') === false)) {
            countValid++;

            let strictValid = true;
            for (let j = 0; j < passData.length; j++) {
                let info = passData[j].split(':');

                switch (info[0]) {
                    case 'byr':
                        if (checkByr(parseInt(info[1])) === false) {
                            strictValid = false;
                        }
                        break;
                    case 'iyr':
                        if (checkIyr(parseInt(info[1])) === false) {
                            strictValid = false;
                        }
                        break;
                    case 'eyr':
                        if (checkEyr(parseInt(info[1])) === false) {
                            strictValid = false;
                        }
                        break;
                    case 'hgt':
                        if (checkHgt(info[1]) === false) {
                            strictValid = false;
                        }
                        break;
                    case 'hcl':
                        if (checkHcl(info[1]) === false) {
                            strictValid = false;
                        }
                        break;
                    case 'ecl':
                        if (checkEcl(info[1]) === false) {
                            strictValid = false;
                        }
                        break;
                    case 'pid':
                        if (checkPid(info[1]) === false) {
                            strictValid = false;
                        }
                        break;
                    default: 
                        break;
                }
            }

            if (strictValid) {
                countStrictValid++;
            }
        }
    }

    console.log('The number of valid passports are: ', countValid);
    console.log('The number of valid passports after new restrictions are: ', countStrictValid);

});



