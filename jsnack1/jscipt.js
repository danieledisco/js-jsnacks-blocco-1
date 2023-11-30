/*
Snack 1: 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.


Tools:
 - const
 - prompt
 - Number()
 - console/confirm
 - if

PseudoCode
- input firstNumber
- input secondNumber
- check if the user typed number insted strings
- if fistNumber > secondNumber
    log firstNumber
- else if secondNumer > fistNumber
    log secondNumer
- else
    log numers are equal
*/

const firstNumber = Number(prompt('Please input first number'));
console.log('Fist number is: ' + firstNumber);
const secondNumber = Number(prompt('Please input second number'));
console.log('Second number is: ' + secondNumber);

if ( isNaN(firstNumber) || isNaN(secondNumber))
{
    alert('Please insert numbers, probably you have typed string/s')
}
else if ( firstNumber > secondNumber)
{
    console.log('first number: ' + firstNumber + ' is geatrer than second number: ' + secondNumber);
    confirm('first number: ' + firstNumber + ' is geatrer than second number: ' + secondNumber);
}
else if ( secondNumber > firstNumber)
{
    console.log('second number: ' + secondNumber + ' is geatrer than first number: ' + firstNumber);
    confirm('second number: ' + secondNumber + ' is geatrer than first number: ' + firstNumber);
}
else
{
    console.log('The two number are equal: ' + firstNumber + ' e ' + secondNumber);
    confirm('The two number are equal: ' + firstNumber + ' e ' + secondNumber);

}


