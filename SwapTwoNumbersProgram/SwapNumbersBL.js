/*
@param(int,int) number,number = 
*/

exports.swapTwoNumbers = (firstNumber,secondNumber)=>{
    let temp;

    temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;

    console.log('Numbers After Swapping are')
    console.log('First number is '+firstNumber);
    console.log('Second number is '+secondNumber);
}