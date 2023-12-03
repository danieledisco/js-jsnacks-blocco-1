/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const numbers = [];
let item;

for (i=0; i<6; i++)
{
    item = Number(prompt("introduci un numero intero"));
    if (item%2 != 0)
    {
        numbers.push(item);
    }
}

console.log(numbers);