const { isLeapYear } = require('./index.js');

describe('testing leap years', () => {
    
    test('1996 returns true', () => {
       expect(isLeapYear(2001)).toBe(false);
    });
   
});
