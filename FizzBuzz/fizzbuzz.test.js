const fizzbuzz = require("./fizzbuzz");

test("1 should print 1", () => {
  expect(fizzbuzz(1)).toBe("1");
});

test("3 should print 'fizz", () => {
  expect(fizzbuzz(3)).toBe("fizz");
});

test("5 should print 'buzz", () => {
  expect(fizzbuzz(5)).toBe("buzz");
});
test("15 should print 'fizzbuzz", () => {
  expect(fizzbuzz(15)).toBe("fizzbuzz");
});
