let anchor = document.getElementById('scrollUp');

anchor.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

let anchor1 = document.getElementById('scrollDown1');
let anchor2 = document.getElementById('scrollDown2');
let anchor3 = document.getElementById('scrollDown3');
let anchor4 = document.getElementById('scrollDown4');
let anchor5 = document.getElementById('scrollDown5');

anchor1.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 102,
        left: 0,
        behavior: 'smooth'
    });
});

anchor2.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 678,
        left: 0,
        behavior: 'smooth'
    });
});

anchor3.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 1188,
        left: 0,
        behavior: 'smooth'
    });
});

anchor4.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 2203,
        left: 0,
        behavior: 'smooth'
    });
});

anchor5.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 2945,
        left: 0,
        behavior: 'smooth'
    });
});