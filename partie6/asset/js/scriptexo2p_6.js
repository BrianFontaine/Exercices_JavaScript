let p = document.createElement('p');
for(i=0; i<=100; i++){
    // On crée une variable temporaire pour éviter d'écraser notre compteur
    let number = i;
    // crée le span
    let span = document.createElement('span');
    // compteur multiple de 15 on modifie la variable temporaire
    if(i % 15 === 0){
        number = '...';
    }
    // insère le texte dans le span
    span.textContent = number;
    // insère le span dans le p
    p.appendChild(span);
}
// insère le p après le h1
document.querySelector('h1').insertAdjacentElement('afterend', p);