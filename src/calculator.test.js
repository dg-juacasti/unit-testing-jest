const { calculator } = require('./calculator') // Arrange

describe('Test over calculator', () => {

  test("2 + 2 should be 4", () => {
    const result = calculator("+", 2, 2) //Act
    expect(result).toBe(4); // Assert
  });

  it("-2 + 2 should be 0", () => {
    const result = calculator("+", -2, 2)
    expect(result).toBe(0);
  });

  it("-2 + -7 should be 9", () => {
    const result = calculator("+", -2, -7)
    expect(result).toBe(-9);
  });

  it("-2 - -7 should be 9", () => {
    const result = calculator("-", -2, -7)
    expect(result).toBeGreaterThan(4)
  });

  it("10 / 3 should be close to 3.33 with 5 decimals", () => {
    const result = calculator("/", 10, 3)
    expect(result).toBeCloseTo(3.33333, 5)
  })

  it("should return undefined", () => {
    const result = calculator(undefined, 2, 2)
    expect(result).toBeUndefined()
  })

  it("Should return an error", () => {
    const result = () => calculator("+", 'f', 'a')
    expect(result).toThrow(/Values/)
  })


})
