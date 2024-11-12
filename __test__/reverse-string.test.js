const reversedString = require('../src/reverse-string')

describe('reverse the order of a string', () => {

  test('the string(arroz) reversed is(zorra)',()=>{
      expect(reversedString('arroz')).toBe('zorra');
  });

  test('the string not return null',()=>{
    expect(reversedString('arroz')).not.toBeNull();
});

  test('when the element is not a string', () => {
    expect(() => reversedString(34)).toThrow('the element should be a string');
  });
});