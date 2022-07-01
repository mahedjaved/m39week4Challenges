const { sum, testTruthy, testFalsy, carParkMonitor, shoppingList, convNum2String, planetNumber, studentAttendance, squareDigitConcatFunc, yearToCentury, arrOfInts2Binary } = require('./app.js');


// console.log());

// Challenge #1 : To make sure it is NOT a NULL
test(`adding 1+2 should NOT be a null`, () => {
    expect(sum(1, 2)).not.toBe(null);
});

// Challenge #2 : make sure it is truthy
test(`must be truthy`, () => {
    expect(testTruthy()).toBeTruthy();
});

test(`adding 1 + 2 should get 3`, () => {
    expect(sum(1, 2)).toBe(3);
})


// Challenge #3 : make sure it is falsy
test(`must be falsy`, () => {
    expect(testFalsy()).toBeFalsy();
});

test(`adding 1+2 should not give 5`, () => {
    expect(sum(1, 2)).not.toBe(5);
});


// Challenge #4 - Test if the object properties are exactly what the function returns
describe(`Car park monitor tests`, () => {
    test(`Charge at 1.5`, () => {
        expect(carParkMonitor().chargeRate).toBe(1.5)
    });
    test(`Total space should be 20`, () => {
        expect(carParkMonitor().totalSpace).toBe(20)
    });
});

// Challenge #5 - Check if the array has 6 or more characters
shoppingList().forEach(x => it(`Item should be of length 6 for item :${x}`, () => { expect(x.length).toBeGreaterThanOrEqual(6); }))

// // [N.B] This one will only pass if the Length will have 6
// Challenge #5 STRETCH - Check if the array has 6 or more characters with .toHaveLength
// shoppingList().forEach(x => it(`Item should be of length 6 for item :${x}`, () => { expect(x).toHaveLength(6); }))


// Challenge #6 - Test the function that converts a number to a string!
// DBT ? how is below not working
// test(`should return a string`, () => {
//     expect(convNum2String(Math.floor(Math.random(10)) instanceof String)).toBe(true);
// }); NOR expect(function).toBeInstanceOf(String)
test(`should return a string`, () => {
    expect(typeof convNum2String(Math.floor(Math.random(10))) == 'string').toBe(true);
});


// Challenge #7 - Check if the third option from list is Earth
test(`value returned should be "Earth"`, () => {
    expect(planetNumber()[3]).toEqual("Earth")
});

// Challenge #8 - Count the number of true, i.e. present students in the class
test(`count the present/not present in the function returning class registry, e.g. for [true, true] it should return the integer 2`, () => {
    expect(studentAttendance([true, false, false, true, true])).toEqual(3);
    expect(studentAttendance([true, false, false, false, false])).toEqual(1);
    expect(studentAttendance([false])).toEqual(0);
});
//  SOIRSE RECIPE on having multiple expects, THIS WAY IS BETTER than having to use describe which is TOO MESSY
// test(`Checks that the function returns the number of true values in an array`, () => {
//     expect(funcs.takeAttendance([true, true, false, true, true, false, true])).toBe(5)
//     expect(funcs.takeAttendance([false, true, true, false, true, false])).toBe(3)
// })


// Challenge #9 - Check if the square and concatenation function works properly
test(`the function that squares a digit and concatenates the result in a string should return for example 123 to "149", and lets say 225 to "4425"`, () => {
    expect(squareDigitConcatFunc(123)).toEqual("149");
    expect(squareDigitConcatFunc(225)).toEqual("4425")
});


// Challenge #10 - Check if the year to century function works
test(`this function should return the century of a given year e.g. (1705) should return 18th, 1066 should return 11th`, () => {
    expect(yearToCentury(1705)).toEqual("18");
    expect(yearToCentury(1066)).toEqual("11");
})

