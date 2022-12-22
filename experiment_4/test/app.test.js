const assert = require ('chai').assert;
const isPrime = require ('./../app').isPrime;
const number = 2

describe('isPrimeFunction', () => {
    it ('Should ensure the base condition that number lies above 1', () => {
        let result = isPrime (number);
        assert.equal (result, number > 1);
    })

    it ('Should ensure the output is boolean', () => {
        let result = isPrime (number);
        assert.typeOf (result, 'boolean');
    })
})
