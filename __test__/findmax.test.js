const maxNumber = require('../src/findmax')


describe('find the max number', () => {

  test('the max number shouls be 10',()=>{
      expect(maxNumber([1,10,9,8,7,6,5,3,4])).toBe(10);
  
  });

  test('the array not return null',()=>{
    expect(maxNumber([5,6,6])).not.toBeNull();
});
  // no entiendo porque esta funcion me dio error
  //test('when the element is not a array',()=>{
  //    expect(maxNumber('string')).toThrow('the element should be a array');
  
  //});
  test('when the element is not a array', () => {
    expect(() => maxNumber('string')).toThrow('the element should be a array');
  });
});