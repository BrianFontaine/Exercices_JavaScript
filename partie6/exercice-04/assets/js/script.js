let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

let p = document.createElement('p');
for(i=0; i != days.length; i++){
    // crée le span
    let span = document.createElement('span');
    // insère le texte dans le span
    span.textContent = days[i];
    // insère le span dans le p
    p.appendChild(span);
    if (span.textContent == 'Samedi')
    {
        span.style.fontWeight = 'bold';
    }
    else if (span.textContent == 'Dimanche')
    {
        span.style.fontWeight = 'bold';
    }
}
// insère le p après le body
document.querySelector('body').insertAdjacentElement('afterend', p);