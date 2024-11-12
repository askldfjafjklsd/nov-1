


function sumArray(numbers){
    if (numbers instanceof Array){
       let countNumbers = 0;
       for (let i = 0; i < numbers.length ; i++){
           countNumbers += numbers[i];
       }
       return countNumbers;
    }else{
        throw ('the element should be a array')
    }
}

module.exports = sumArray;