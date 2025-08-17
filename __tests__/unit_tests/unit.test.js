import exp from "../../src/modules/calculation/util/exp";
import percentage from "../../src/modules/calculation/util/percentage";
import gcd from "../../src/modules/calculation/util/gcd";

describe("exp", () => {
  test("calculates positive exponents correctly", () => {
    expect(exp(2, 3)).toBe(8);
    expect(exp(5, 2)).toBe(25);
    expect(exp(10, 1)).toBe(10);
  });

  test("returns 1 when exponent is 0", () => {
    expect(exp(2, 0)).toBe(1);
    expect(exp(100, 0)).toBe(1);
    expect(exp(0, 0)).toBe(1); // By convention
  });

  test("calculates zero base correctly", () => {
    expect(exp(0, 5)).toBe(0);
    expect(exp(0, 1)).toBe(0);
  });

  test("handles exponent of 1", () => {
    expect(exp(7, 1)).toBe(7);
    expect(exp(-3, 1)).toBe(-3);
  });

  test("handles negative base", () => {
    expect(exp(-2, 3)).toBe(-8);
    expect(exp(-2, 2)).toBe(4);
  });

  test("returns 1 for exp(1, y)", () => {
    expect(exp(1, 100)).toBe(1);
    expect(exp(1, 0)).toBe(1);
  });
});

describe("gcd", () => {
  test("returns the gcd of two positive numbers", () => {
    expect(gcd(12, 8)).toBe(4);
    expect(gcd(100, 10)).toBe(10);
    expect(gcd(27, 36)).toBe(9);
  });

  test("returns the gcd when one number is zero", () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(7, 0)).toBe(7);
    expect(gcd(0, 0)).toBe(0);
  });

  test("returns the gcd of two negative numbers", () => {
    expect(gcd(-12, -8)).toBe(4);
    expect(gcd(-100, -10)).toBe(10);
  });

  test("returns the gcd of a positive and a negative number", () => {
    expect(gcd(12, -8)).toBe(4);
    expect(gcd(-27, 36)).toBe(9);
  });

  test("returns the gcd when both numbers are the same", () => {
    expect(gcd(7, 7)).toBe(7);
    expect(gcd(-9, -9)).toBe(9);
  });

  test("returns the gcd for prime numbers", () => {
    expect(gcd(13, 17)).toBe(1);
    expect(gcd(29, 2)).toBe(1);
  });
});

describe("percentage", () => {
  it("calculates the percentage of x out of y", () => {
    expect(percentage(50, 200)).toBe(25);
    expect(percentage(30, 60)).toBe(50);
    expect(percentage(0, 100)).toBe(0);
    expect(percentage(100, 100)).toBe(100);
  });

  it("returns Infinity when dividing by zero", () => {
    expect(percentage(10, 0)).toBe(Infinity);
  });

  it("handles negative numbers", () => {
    expect(percentage(-50, 200)).toBe(-25);
    expect(percentage(50, -200)).toBe(-25);
    expect(percentage(-50, -200)).toBe(25);
  });

  it("returns NaN when x and y are not numbers", () => {
    expect(percentage("a", 100)).toBeNaN();
    expect(percentage(100, "b")).toBeNaN();
    expect(percentage("a", "b")).toBeNaN();
  });
});
