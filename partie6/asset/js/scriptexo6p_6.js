
let firstNumber = Math.floor(Math.random()*10) + 1;
let secondNumber = Math.floor(Math.random()*10) + 1;

let tbody = document.querySelector('tbody');

do {
    firstNumber /= secondNumber;
    if(firstNumber < 1 ){
        break;
    }
            // On crée la une ligne
            let tr = document.createElement('tr');
            // On crée la cellule
            let td = document.createElement('td');
            // Insére le calcul dans la cellule
            td.textContent = firstNumber;
            // insére la cellule dans une ligne
            tr.appendChild(td);
            // insére la ligne dans le tableau
            tbody.appendChild(tr);
}while(true);