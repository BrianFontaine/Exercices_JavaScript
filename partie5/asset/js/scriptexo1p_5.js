document.getElementById("inscription").addEventListener("submit", function(e) {
	
    var password = document.getElementById('mdp');
    var c_password = document.getElementById('c_mdp');

    if (password.value != c_password.value)
    {
         e.preventDefault();
         document.getElementById("mdp").style.border = "5px solid red";
         document.getElementById("c_mdp").style.border = "5px solid red";
    }
    else
    {
        e.preventDefault();
        document.getElementById("mdp").style.border = "5px solid green";
        document.getElementById("c_mdp").style.border = "5px solid green";
    }
// ********************* SAVOIR SITOUT LES CHANP SONT REMPLIE ************************
    // var erreur;
    // var inputs = this.getElementsByTagName("input");
    // for (var i = 0; i < inputs.length; i++) {
    //     console.log(inputs[i]);
    //     if (!inputs[i].value) {
    //         erreur = "Veuillez renseigner tous les champs";
    //     }      
    // }
    
 
    // if (erreur) {
    //     e.preventDefault();
    //     document.getElementById("mdp").style.border = "5px solid red";
    //     document.getElementById("c_mdp").style.border = "5px solid red";
    //     document.getElementById("erreur").innerHTML = erreur;
    //     return false;
    // } 
});

