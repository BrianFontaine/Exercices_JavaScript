// document.querySelector('body');


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
        typeOfCard(type);
    }
});

function typeOfCard (type){
    
    document.querySelectorAll('.fab').forEach(function(icon){
        icon.classList.remove('active');
        if (icon.classList.contains('fa-cc-'+type)) 
        {
            icon.classList.add('active');
        }
        if (type == 'diners') 
        {
            document.querySelector('.fa-cc-diners-club').classList.add('active')
        }else 
        {
            document.querySelector('.fa-cc-diners-club').classList.remove('active')
        }
    });
}
