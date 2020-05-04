let tbody = document.querySelector('tbody');
for(year=2020; year<=2030; year++){
    // On crée la une ligne
    let tr = document.createElement('tr');
    // On crée la cellule
    let td = document.createElement('td');
    // Insére la date dans la cellule
    td.textContent = year;
    // Recherche année bisextile
    if((year % 400 == 0) || ((year % 4 == 0) && !(year % 100 == 0))){
        td.style.color = 'white';
        td.style.backgroundColor = 'red';
    }
    // insére la cellule dans une ligne
    tr.appendChild(td);
    // insére la ligne dans le tableau
    tbody.appendChild(tr);
}