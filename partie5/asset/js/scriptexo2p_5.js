document.getElementById("inscription").addEventListener("submit", function(e) {
	
    var password = document.getElementById('mdp');
    var c_password = document.getElementById('c_mdp');

    if (password.value != c_password.value)
    {
         e.preventDefault();
        document.getElementById("mdp").className = "form-control border border-danger";
        document.getElementById("c_mdp").className = "form-control border border-danger";
        
    }
    else
    {
        e.preventDefault();
        document.getElementById("mdp").className = "form-control border border-success";
        document.getElementById("c_mdp").className = "form-control border border-success";
    }

});