/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

Tools
 - prompt
 - array
 - for
 - log/confirm


PseudoCode
 - initialize an array empty
 - make a loop of ten time where input by prompt a number
 - verify if all the inputs are numbers otherwise save the firts item that is not a number
 - initialize the sum to 0
 - make a loop of ten time where sum the element of the array
 - log/confirm the result
*/

// - initialize an array empty
const numbers = [];

// - make a loop of ten time where input by prompt a number
for ( let i=0; i<10; i++ ) 
{
    const number = Number(prompt(`Please input the number ${i+1} `))
    numbers.push(number);
}

// - verify if all the inputs are numbers otherwise save the firts item that is not a number 
let error = false;
let iError;         // This variable must be declared out of loop. If declared in loop
// the scope of the variable is in the loop not out 
for (let i = 0; i<numbers.length; i++)
{
    if ( isNaN(numbers[i]) )
    {
        iError = i+1;
        error = true;
        break;
    }
}

if (error)
{
    console.log('Prease type 10 numbers - first error happens for element numer ' + iError + '. This element is not a number');
    confirm('Prease type 10 numbers - first error happens for element numer ' + iError + '. This element is not a number')
}
else
{
    let sum = 0.;

    for ( let i=0; i<numbers.length; i++ )
    {
        sum += numbers[i];
    }
    
    console.log('The sum of the ten numbers inserd is: ' + sum);
    confirm('The sum of the ten numbers inserd is: ' + sum)
}






