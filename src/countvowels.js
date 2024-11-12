function countVowels(phrase) {
    if (typeof phrase !== 'string') {
      throw ('the phrase should be a string');
    }
    
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for(let i= 0; i < phrase.length ; i++){
        if(vowels.indexOf(phrase[i]) !== -1){
            ++count;
        }
    }


    return count;
  }

  module.exports = countVowels;