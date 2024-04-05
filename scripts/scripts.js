window.addEventListener('scroll', function() {
    var headerFixed = document.querySelector('.header__fixed');
    if (window.scrollY > 200) {
        headerFixed.classList.add('show');
    } else {
        headerFixed.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.header__burger-btn');
    const menu = document.querySelector('.header__menu');
    const closeBtn = document.querySelector('.header__close-btn');

    burgerBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function() {
        menu.classList.remove('show');
    });
});