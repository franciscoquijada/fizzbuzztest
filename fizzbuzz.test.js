const { test } = require("@jest/globals");
const fizzbuzz = require ('./fizzbuzz');

describe("fizzbuzz", () => {
    test("should be 1 if recibe 1", () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });
});