document.getElementById("inscription");
	
    var password = document.getElementById('mdp');
    var c_password = document.getElementById('c_mdp');
    var Email = document.getElementById('email');

    Email.addEventListener('mouseover', function(){
      this.classList.add('focus');
    });
    Email.addEventListener('mouseout', function(){
      this.classList.remove('focus');
    });

    password.addEventListener('mouseover',function(){
        this.classList.add('focus');
    });
    password.addEventListener('mouseout', function(){
        this.classList.remove('focus');
    });

    c_password.addEventListener('mouseout', function(){
        this.classList.remove('focus');
    });
    c_password.addEventListener('mouseover', function(){
        this.classList.add('focus');
    });