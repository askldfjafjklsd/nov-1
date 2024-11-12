

function maxNumber(numbers){
    if (numbers instanceof Array){
       let countMaxNumbers = 0;
       for(let i = 0; i < numbers.length ; i++){
           if(numbers[i]>countMaxNumbers){
            countMaxNumbers = numbers[i];
           }
       }
       return countMaxNumbers;
    }else{
        throw ('the element should be a array')
    }
}

module.exports = maxNumber;