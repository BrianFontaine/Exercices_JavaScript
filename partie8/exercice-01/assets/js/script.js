
       
// function setScrollBtn(e){
//     // on cree le bouton 
//     var btn = document.createElement('button');
//     // sélectionner l'élément que nous souhaitons modifier
//     document.querySelector('body');
//     // SI LE SCROLLY depasse 120 alor il affiche le boutton 
//     document.querySelector('h2').insertAdjacentElement('afterend', btn);
//     if (scrollY < 120)
//     {
//         delete btn;
        
//         btn.classList.remove("button-scroll-Bas");
//         btn.classList.add("button-scroll-haut");
        
//     }
    
//     if (scrollY)
//     {
//         btn.textContent = ('^');
//         btn.classList.add("button-scroll-Bas");
//         e.preventDefault();
 
//     } 
    
// }
// // btn.addEventListener('click',() => {

// //     window.scrollTo({
// //         top: 0,
// //         left: 0
// //     })
// // })
// // Ecouter l'évènement pour appeler la fonction

// window.addEventListener('scroll', setScrollBtn);

// console.clear();

let anchor = document.getElementById('scrollTop');
let arrow = document.querySelector('.arrow');

arrow.addEventListener('mouseover', () => {
    arrow.classList.toggle('arrow-animation');
});
arrow.addEventListener('mouseout', () => {
    arrow.classList.toggle('arrow-animation');
});

anchor.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});