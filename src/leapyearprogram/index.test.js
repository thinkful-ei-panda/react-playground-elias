// Use this line to import the function, made possible by
// the export default line in the other file
import leapYear  from './index';

it.skip('should NOT be a leap year if divisible by 100, not 400', () => {
  expect(leapYear(1900)).toBe(false);
});

it.skip('should be a leap year if divisible by 4, not 100', () => {
  expect(leapYear(1984)).toBe(true);
});

it.skip('should NOT be a leap year if not divisible by 4', () => {
  expect(leapYear(1983)).toBe(false);
});

it.skip('should be a leap year if divisible by 400', () => {
  expect(leapYear(2000)).toBe(true);
});

it.skip('should throw an error for years before 1582', () => {
  expect(() => {
    leapYear(1568);
  }).toThrow();
});