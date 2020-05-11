document.querySelector('body');
console.clear();

var cleave = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: 'fr'
});

var cleave = new Cleave('.date', {
    date: true,
    delimiter: '-',
    datePattern: ['d','m','Y'],
});

var cleave = new Cleave('.card', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        if (type == 'visa') 
        {
            document.querySelector('.fa-cc-visa').classList.add('active')
        }else 
        {
            document.querySelector('.fa-cc-visa').classList.remove('active')
        }
        if (type == 'mastercard') 
        {
            document.querySelector('.fa-cc-mastercard').classList.add('active')
        }else 
        {
            document.querySelector('.fa-cc-mastercard').classList.remove('active')
        }
        if (type == 'amex') 
        {
            document.querySelector('.fa-cc-amex').classList.add('active')
        }else 
        {
            document.querySelector('.fa-cc-amex').classList.remove('active')
        }
        if (type == 'jcb') 
        {
            document.querySelector('.fa-cc-jcb').classList.add('active')
        }else 
        {
            document.querySelector('.fa-cc-jcb').classList.remove('active')
        }
        if (type == 'discover') 
        {
            document.querySelector('.fa-cc-discover').classList.add('active')
        }else 
        {
            document.querySelector('.fa-cc-discover').classList.remove('active')
        }
        if (type == 'diners') 
        {
            document.querySelector('.fa-cc-diners-club').classList.add('active')
        }else 
        {
            document.querySelector('.fa-cc-diners-club').classList.remove('active')
        }
    }
});










