const sumArray = require('../src/sumarray')

describe('make the sume of a array', () => {


  test('count of the array (3,4,5)',()=>{
      expect(sumArray([3,4,5])).toBe(12);
    });

    test('the array not return null',()=>{
        expect(sumArray([5,6,2])).not.toBeNull();
    });

  test('when the element is not a array', () => {
    expect(() => sumArray('string')).toThrow('the element should be a array');
  });
  
});