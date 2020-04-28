let html = document.getElementsByTagsName('html');

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
}

// var coeff = 4; //Coefficient de reduction
// var larg = 600; //largeur maxi de l'image
// var haut = 900; //hauteur maxi de l'image
// var coeffinit = coeff;

// function changer() {
//     if (document.image.width < larg) {
//         coeff = coeff - 0.2;
//         document.image.width = Math.round(larg / coeff);
//         document.image.height = Math.round(haut / coeff);
//         chang = window.setTimeout('changer();', 60); //vitesse de l'effet
//     } else {
//         window.clearTimeout(chang);
//     }
// }

// function initial() {
//     if (document.image.width > larg / coeffinit) {
//         window.clearTimeout(chang);
//         coeff = coeff + 0.2;
//         document.image.width = Math.round(larg / coeff);
//         document.image.height = Math.round(haut / coeff);

//         initi = window.setTimeout('initial();', 60); //vitesse de l'effet
//     } else {
//         window.clearTimeout(initi);
//     }
// }