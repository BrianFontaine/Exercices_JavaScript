let firstNumber =  Math.round(Math.random()*10);
let secondNumber = Math.round(Math.random()*10);

let tbody = document.querySelector('tbody');
for(var i=0; i < 100 ; i++)
{
    firstNumber = firstNumber /secondNumber;
    if ( firstNumber >= 1)
    {
        // On crée la une ligne
        let tr = document.createElement('tr');
        // On crée la cellule
        let td = document.createElement('td');
        // Insére le calcul dans la cellule
        td.textContent = parseInt(firstNumber);
        // insére la cellule dans une ligne
        tr.appendChild(td);
        // insére la ligne dans le tableau
        tbody.appendChild(tr);
        firstNumber = Math.round(Math.random()*10);
    }
}

