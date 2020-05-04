let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let p = document.createElement('p');
for(i=0; i != languages.length; i++){
    // crée le span
    let span = document.createElement('span');
    // insère le texte dans le span
    span.textContent = languages[i];
    // insère le span dans le p
    p.appendChild(span);
}
// insère le p après le html
document.querySelector('body').insertAdjacentElement('afterend', p);