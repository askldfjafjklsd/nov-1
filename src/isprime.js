


function isPrime(number){
    if (typeof number != 'number'){
        throw ('the element should be a number')
    }
    if (number < 0){
      throw ('the number should be positive')
  }
  if (number == 0){
    throw ('the number should be natural')
  }
    let divisionNumber = 0;
    let isNumber
        for(let i = 2; i < number ; i++){
          divisionNumber = number/i;
        
           if(Number.isInteger(divisionNumber)){
             return 'not prime';
           }
          } return 'primo';
}

module.exports = isPrime;