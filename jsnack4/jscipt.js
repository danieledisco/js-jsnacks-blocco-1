/*
In un array sono contenuti i nomi degli invitati 
alla festa del grande Gatsby. 
Chiedi all’utente il suo nome e comunicagli 
se può partecipare o no alla festa.

Tools
 - Array
 - for
 - if
 - prompt
 - const/let
 - string.localeCompare(string) = 0 if the string are equal

PseudoCode
 - inizializza un array con i nomi degli invitati
 - inizializza la variabile go a false
 - chiedi il nome
 - confronta carattere per carattere i nomi degli autorizzati con il tuo
    - se già la lumghezza è diversa salta
    - se la corrispondenza arriva a fine cambia go in true ed interromi il ciclo
 - Sulla base di autorizzato dai il benvenuto o saluta




*/

//  -inizializza un array con i nomi degli invitati
const authorized = ['Carlo', 'Federico', 'Nicola', 'Giovanni', 'Marco'];
let go=false;

// - chiedi il nome
const nome = prompt("Introduci il tuo nome");

// - confronta carattere per carattere i nomi degli autorizzati con il tuo
//    - se già la lumghezza è diversa salta
//    - se la corrispondenza arriva a fine cambia go in true ed interromi il ciclo
for ( i=0; i<authorized.length; i++)
{
    if (go)
        break;

    if (authorized[i].length != nome.length)
    {
        go = false;
        continue;
    }
    else
    {
        for ( j=0; j<nome.length; j++)
        {
            if(authorized[i][j] != nome[j])
            {
                go = false;
                break;
            }
            else
            {
                go = true;
            }
        }
    }
}

// - Sulla base di autorizzato dai il benvenuto o saluta
if (go)
{
    confirm("Benvenuto alla festa " + nome);
}
else
{
    confirm("Mi dispiace " + nome + " non sei tra gli invitati")
}