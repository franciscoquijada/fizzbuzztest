const { test } = require("@jest/globals");
const fizzbuzz = require('./fizzbuzz');

describe("fizzbuzz", () => {

    test("should be null if receive not number", () => {
        const expected = null;
        const result = fizzbuzz('prueba');
        expect(expected).toBe(result);
    });

    test("should be 1 if receive 1", () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    test("should print fizz if receive 3", () => {
        const expected = 'fizz';
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    test("should print fizz if receive multiplo of 3", () => {
        const expected = 'fizz';
        const result = fizzbuzz(6);
        expect(expected).toBe(result);
    });

    test("should print fizz if receive 5", () => {
        const expected = 'buzz';
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    });

    test("should print buzz if receive multiple of 5", () => {
        const expected = 'buzz';
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    });

    test("should print fizzbuzz if receive multiple of 3 and 5", () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    });
});