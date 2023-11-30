/*
L’utente inserisce due parole in successione, 
con due prompt.

Il software stampa prima la parola più corta, 
poi la parola più lunga.


Tools
 - const
 - prompt
 - strings
 - .length
 - if


PseudoCode
 - Input first string
 - Input second string
 - extract lenghts of two string (.length): 
        lengthFirstString and lengthSecondString  
 - if the first one is shorter
    log the fist string is shortet
 - else if the second one is shorter
    log the second string is shorter
 - else
    log the two strings have equal length
*/

const firstString = prompt('Please type the first string');
console.log(firstString);
const lengthFirstString = firstString.length;

const secondString = prompt('Please type the second string');
console.log(secondString);
const lengthSecondString = secondString.length;

if ( lengthFirstString < lengthSecondString )
{
    console.log( 'The firt string ' + firstString + ' is shorter than the second one ' + secondString);
    confirm( 'The firt string ' + firstString + ' is shorter than the second one ' + secondString);
}
else if ( lengthSecondString < lengthFirstString )
{
    console.log( 'The second string ' + secondString + ' is shorter than the fisrt one ' + firstString);
    confirm( 'The second string ' + secondString + ' is shorter than the fisrt one ' + firstString);
}
else
{
    console.log('The length of two string is equal: ' + firstString + ' ' + secondString);
    confirm('The length of two string is equal: ' + firstString + ' ' + secondString);
}    