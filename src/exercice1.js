// ./src/exercice1.js

/**
 * return sum of the elements of an array
 * @param {[]} elements 
 * @returns 
 */
const arraySum = (elements) => {
    if (elements.length === 0) {
        throw new Error('array is empty');
    }
    const sum = elements.reduce((previousValue, currentValue) => {
        if (isNaN(currentValue)) {
            throw new TypeError('Not a number');
        }
        return previousValue + currentValue;
    }, 0);
    return sum;
}

module.exports = { arraySum };