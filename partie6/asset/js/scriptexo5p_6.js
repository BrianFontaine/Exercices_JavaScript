
let firstNumber = Math.round(Math.random()*10);
let secondNumber =Math.round(Math.random()*10);

let tbody = document.querySelector('tbody');
for(var i=0; i < 100 ; i++)
{
    secondNumber = firstNumber *secondNumber;
    if ( secondNumber < 250)
    {
        // On crée la une ligne
        let tr = document.createElement('tr');
        // On crée la cellule
        let td = document.createElement('td');
        // Insére le calcul dans la cellule
        td.textContent = secondNumber;
        // insére la cellule dans une ligne
        tr.appendChild(td);
        // insére la ligne dans le tableau
        tbody.appendChild(tr);
        secondNumber = Math.round(Math.random()*10);
    }
}

