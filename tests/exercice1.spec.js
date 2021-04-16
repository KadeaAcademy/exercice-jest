// ./tests/exercice1.spec.js

const { arraySum } = require('../src/exercice1');

describe('Test exercice 1', () => {

    test('should return sum of array', () => {
        const elements = [1, 2, 3, 4, 5];
        const sum = arraySum(elements);
        expect(sum).toBe(15)

        const elements2 = [1];
        const sum2 = arraySum(elements2)
        expect(sum2).toEqual(1)
    });

    test('should throw error with empty array', () => {
        const elements = [];
        expect(() => {
            arraySum(elements)
        }).toThrow(Error('array is empty'));
    });


    it('should throw TypeError', () => {
        const elements = [1, 2, 'merveille'];
        expect(() => {
            arraySum(elements)
        }).toThrow(TypeError('Not a number'));
    });
});