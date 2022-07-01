// Challenge #1 - #3
const sum = (num1, num2) => {
    return num1 + num2;
}

const testTruthy = () => {
    return true;
}

const testFalsy = () => {
    return false;
}

// Challenge #4 - Create a function that creates an object with 2 properties
const carParkMonitor = () => {
    return carParkChecker = {
        "chargeRate": 1.5,
        "totalSpace": 20,
    }
}


// Challenge #5 - A function that will return items in an array 
const shoppingList = () => {
    return [
        'bathing soda',
        'beatles records',
        'chilly jam',
        'haribos',
        'witabix']
};


// Challenge #6 - Function converts a number to a string
const convNum2String = (num) => {
    return num.toString();
};


// Challenge #7 - Object showing correct planet number
const planetNumber = () => {
    return {
        1: "Mercury",
        2: "Venus",
        3: "Earth",
        4: "Mars",
        5: "Jupyter",
        6: "Saturn",
        7: "Uranus",
        8: "Neptune",
    }
};


// Challenge #8 - Make an array of all students being presnet or not
const studentAttendance = (inputList) => {
    return inputList.filter(x => x == true).length;
}


// Challenge #9 - Make a function that squares every digit in a number, and then concatenate them (must return an integer)
const squareDigitConcatFunc = (inputDigit) => {
    let splitArr = inputDigit.toString().split('');
    return splitArr.map(x => parseInt(x) * parseInt(x)).join('');
}

// Challenge #10 -  Function that returns back the century it is in

// Approac#1 --> take the first two digits of the integer, seperate and then concat and output them
// Approac#2 --> delete the last two numbers, return what is left
// Approac#3 --> divide by 100 and add 1

// Going for approach#3 becos easiest
const yearToCentury = (year) => {
    return (Math.floor(year / 100) + 1).toString();
}


// Challenge #11 -  Return the array of integers to binary
// Approach#1 -- use switch and make cases for all possible binary values

// Approach#2 -- follow the solution from : https://www.tutorialspoint.com/convert-an-array-of-binary-numbers-to-corresponding-integer-in-javascript

// TODO -- Come up with a better solution later
// const arrOfInts2Binary = (intArr) => {

// }


module.exports = {
    sum,
    testTruthy,
    testFalsy,
    carParkMonitor,
    shoppingList,
    convNum2String,
    planetNumber,
    studentAttendance,
    squareDigitConcatFunc,
    yearToCentury,
    arrOfInts2Binary
};


