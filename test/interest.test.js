import interest from "../src/interest";

describe("interest()", () => {
  // it("should throw an error if time is not a positive number", () => {
  //   expect(() => interest(-1, 5, 10000)).toBeNan();
  // });
  // it("should throw an error if rate is not a number between 0 and 100", () => {
  //   expect(() => interest(12, -1, 10000)).toBeNan();
  //   expect(() => interest(12, 101, 10000)).toBeNan();
  // });
  // it("should throw an error if capital is not a positive number", () => {
  //   expect(() => interest(12, 5, -10000)).toBeNan();
  // });
  it("should return the rate of interest", () => {
    expect(interest(12, 5, 10000)).toBe(625);
  });
});