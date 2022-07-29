const { calculator } = require("./calculator");

describe('Test over calculator', () => { 
  it("2 + 2 should be 4", () => {
    expect(calculator("+", 2, 2)).toBe(4);
  });
  it("-2 + 2 should be 0", () => {
    expect(calculator("+", -2, 2)).toBe(0);
  });
  it("-2 + -7 should be 9", () => {
    expect(calculator("+", -2, -7)).toBe(-9);
  });
})
