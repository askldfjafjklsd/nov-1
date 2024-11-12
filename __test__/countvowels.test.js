const countVowels = require('../src/countvowels')


describe('count the vowels of a string', () => {

 test('count of vowels (escribir)',()=>{
    expect(countVowels('escribir')).toBe(3);
 });

 test('the string not return null',()=>{
    expect(countVowels('arroz')).not.toBeNull();
});

 test('when the element is not a string', () => {
    expect(() => countVowels(34)).toThrow('the phrase should be a string');
  });


});