const { palindrome } = require("./palindrome");

describe("Test over palindrome", () => {
    test("Should return if word is a palindrome", () => {
        expect(palindrome('radar')).toBe(true)
    })
})