const isPrime = require('../src/isprime')

describe('calculateIsPrime', () => {
test('el numero 7 debe ser primo',()=>{
    expect(isPrime(7)).toBe( 'primo');

})

test('should throw error when the element is not a number', () => {
    expect(() => isPrime('nombre')).toThrow('the element should be a number');
  });

test('should throw error when the number is zero or negative', () => {
    expect(() => isPrime(-1)).toThrow('the number should be positive');
    expect(() => isPrime(0)).toThrow('the number should be natural');
  });
});