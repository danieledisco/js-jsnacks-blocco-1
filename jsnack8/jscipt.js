/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

const input = prompt("Introduci un numero intero di 4 cifre");

let sum=0;

for (i=0; i<input.length; i++)
{
    sum += Number(input[i]);
}

confirm("La somma delle 4 cifre e: " + sum)