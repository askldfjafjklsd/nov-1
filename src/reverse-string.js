
function reverseString(string){

  if(typeof string != 'string'){
    throw ('the element should be a string');
  }
  let reversed = "";

     for (const a of string){
      reversed = a + reversed;
     }
     return reversed;
}

module.exports = reverseString;