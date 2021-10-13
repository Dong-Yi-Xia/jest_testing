const isAnagram = require('./anagram')

test('isAnagram function exists', () => {
  expect(typeof isAnagram). toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty roo#m##"', () => {
  expect(isAnagram('Dormitory', 'dirty roo#m##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "BYE"', () => {
  expect(isAnagram('Hello', 'BYE')).toBeFalsy();
});

