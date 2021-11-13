var num = "";

function convertToRoman() {
    num = document.getElementById("checkThis").value;
    if (num > 3999) {
        document.getElementById("solution").innerHTML = "Romans can't count that high!! This is why Rome fell...";
    } else {
    let array = num.toString().split("");
    let romanArr = [];
    if (array.length < 4) {
        while (array.length < 4) {
            array.unshift("0");
        }
    }
    if (array[0] > 0) {
        let thous = array[0];
        while (thous > 0) {
            romanArr.push("M");
            thous--;
        }
    }
    if (array[1] > 0) {
        let hunds = array[1];
        if (hunds <= 3) {
            while (hunds > 0) {
                romanArr.push("C");
                hunds--;
            }
        } else if (array[1] == 4) {
            romanArr.push("CD");
        } else if (array[1] >= 5 && array[1] < 9) {
            let hunds = array[1];
            romanArr.push("D")
            while (hunds > 5) {
            romanArr.push("C");
            hunds--;
            }
        } else if (array[1] == 9) {
            romanArr.push("CM");
        }  
    }
    if (array[2] > 0) {
        let tens = array[2];
        if (tens <= 3) {
            while (tens > 0) {
                romanArr.push("X");
                tens--;
            }
        } else if (array[2] == 4) {
            romanArr.push("XL");
        } else if (array[2] >= 5 && array[2] < 9) {
            let tens = array[2];
            romanArr.push("L")
            while (tens > 5) {
                romanArr.push("X");
                tens--;
            }
        } else if (array[2] == 9) {
            romanArr.push("XC");
        }  
    }
    if (array[3] > 0) {
        let ones = array[3];
        if (ones <= 3) {
            while (ones > 0) {
                romanArr.push("I");
                ones--;
            }
        } else if (array[3] == 4) {
            romanArr.push("IV");
        } else if (array[3] >= 5 && array[3] < 9) {
            let ones = array[3];
            romanArr.push("V")
            while (ones > 5) {
                romanArr.push("I");
                ones--;
            }
        } else if (array[3] == 9) {
            romanArr.push("IX");
        }  
    }
    document.getElementById("solution").innerHTML = romanArr.join("");
    }
}    
