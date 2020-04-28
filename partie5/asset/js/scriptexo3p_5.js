let form = document.querySelector('#form');


// *********************NOM*********************
console.log(form.nom);
//Ecouter la modification du nom
form.nom.addEventListener("change", function(){
          validNom(this);
    });

//RegExp validation nom 
const validNom = function(inputNom){
    let nomregexp = new RegExp(
        '[a-zA_Z]+','g'
    );
    let testNom = nomregexp.test(inputNom.value);
    let small = inputNom.nextElementSibling;
    if (testNom)
    {
        small.innerHTML = 'Nom valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else
    {
        small.innerHTML = 'Veuillez entreé un nom valide !';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
}

// *****************EMAIL*********************************

//Ecouter la modification du Email
form.email.addEventListener("change", function(){
          validEmail(this);
    });

const validEmail = function(inputEmail){
    let emailregexp = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    );
    let testEmail = emailregexp.test(inputEmail.value);
    let small = inputEmail.nextElementSibling;
    if (testEmail)
    {
        small.innerHTML = 'Email valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else
    {
        small.innerHTML = 'Veuillez entreé un Email valide !';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
}



// *********************Age*********************
console.log(form.age);
//Ecouter la modification du age
form.age.addEventListener("change", function(){
          validAge(this);
    });

//RegExp validation nom 
const validAge = function(inputAge){
    let ageregexp = new RegExp(
        '[0-9]+','g'
    );
    let testAge = ageregexp.test(inputAge.value);
    let small = inputAge.nextElementSibling;
    if (testAge)
    {
        small.innerHTML = 'Age valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else
    {
        small.innerHTML = 'Veuillez renseigner que des chiffres ou un age inferieur a 120 ans !';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }

}