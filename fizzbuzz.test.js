const { test } = require("@jest/globals");
const fizzbuzz = require('./fizzbuzz');

describe("fizzbuzz", () => {
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
    })
});