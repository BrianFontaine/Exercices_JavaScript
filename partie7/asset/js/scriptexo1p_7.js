function multiNb1Nb2(e){

let firstNumber =  document.getElementById('number1');
let secondNumber = document.getElementById('number2');

let p = document.createElement('p');


    let result = firstNumber.value *secondNumber.value;
    if ( firstNumber)
    {
        // crée le span
        let span = document.createElement('span');
        // insère le texte dans le span
        span.textContent = result;
        // insère le span dans le p
        p.appendChild(span);

    }
document.querySelector('button').insertAdjacentElement('afterend', p);
}