    var btn = document.querySelectorAll('button')
    var txt = document.querySelector('p');
    
    btn[0].addEventListener('click', updateBtn);
    btn[1].addEventListener('click', updateBtn1);
    btn[2].addEventListener('click', updateBtn2);
    btn[3].addEventListener('click', updateBtn3);
    btn[4].addEventListener('click', updateBtn4);
    
    function updateBtn() 
    {
        if (btn[0].textContent == 'Rose')
        {
            txt.className = "text-rose";
        }
    }
    function updateBtn1() 
    {
        if (btn[1].textContent == 'Bleu')
        {
            txt.className = "text-bleu";
        }
    }
    function updateBtn2() 
    {
        if (btn[2].textContent == 'Violet')
        {
            txt.className = "text-violet";
        }
    }
    function updateBtn3()
     {
        if (btn[3].textContent == 'Gras')
        {
            txt.className = "text-gras";
        }
    }
    function updateBtn4() 
    {
        if (btn[4].textContent == 'Italique')
        {
            txt.className = "text-italique";
        }
    }