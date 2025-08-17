import numberCruncher from '../../src/modules/calculation/numberCruncher.js';
const percentage = require('../../src/modules/calculation/util/percentage.js');
const exp = require('../../src/modules/calculation/util/exp.js');
const gcd = require('../../src/modules/calculation/util/gcd.js');

// Mock the utility functions
jest.mock('../../src/modules/calculation/util/percentage.js', () => jest.fn(() => 50));
jest.mock('../../src/modules/calculation/util/exp.js', () => jest.fn(() => 8));
jest.mock('../../src/modules/calculation/util/gcd.js', () => jest.fn(() => 2));

describe('numberCruncher', () => {
    it('should add two numbers', () => {
        expect(numberCruncher({ numOne: '2', numTwo: '3', operator: 'add' })).toBe(5);
    });

    it('should subtract two numbers', () => {
        expect(numberCruncher({ numOne: '5', numTwo: '3', operator: 'subtract' })).toBe(2);
    });

    it('should multiply two numbers', () => {
        expect(numberCruncher({ numOne: '4', numTwo: '3', operator: 'multiply' })).toBe(12);
    });

    it('should divide two numbers', () => {
        expect(numberCruncher({ numOne: '10', numTwo: '2', operator: 'divide' })).toBe(5);
    });

    it('should calculate percentage using util', () => {
        percentage.mockReturnValue(20);
        expect(numberCruncher({ numOne: '50', numTwo: '40', operator: 'percentage' })).toBe(20);
        expect(percentage).toHaveBeenCalledWith(50, 40);
    });

    it('should calculate exponent using util', () => {
        exp.mockReturnValue(16);
        expect(numberCruncher({ numOne: '2', numTwo: '4', operator: 'exponent' })).toBe(16);
        expect(exp).toHaveBeenCalledWith(2, 4);
    });

    it('should calculate gcd using util', () => {
        gcd.mockReturnValue(5);
        expect(numberCruncher({ numOne: '15', numTwo: '10', operator: 'gcd' })).toBe(5);
        expect(gcd).toHaveBeenCalledWith(15, 10);
    });

    it('should return null for unknown operator', () => {
        expect(numberCruncher({ numOne: '1', numTwo: '2', operator: 'unknown' })).toBeNull();
    });

    it('should handle string numbers', () => {
        expect(numberCruncher({ numOne: '7', numTwo: '2', operator: 'subtract' })).toBe(5);
    });

    it('should handle invalid numbers', () => {
        expect(numberCruncher({ numOne: 'a', numTwo: '2', operator: 'add' })).toBeNaN();
    });
});