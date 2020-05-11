
let firstNumber = Math.floor(Math.random()*9)+2;
let secondNumber =Math.floor(Math.random()*9)+2;

let tbody = document.querySelector('tbody');
while(firstNumber *secondNumber < 250 )
{
    secondNumber = firstNumber *secondNumber;
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
}

