document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки с классом 'open-form-btn'
    const openFormButtons = document.getElementsByClassName('open-form-btn');
    const openFormBtnFixed = document.getElementById('openFormBtnFixed');
    const openForm = document.getElementById('openForm');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const backdrop = document.getElementById('backdrop');
    const formPopup = document.getElementById('formPopup');

    // Добавляем обработчик событий для всех кнопок с классом 'open-form-btn'
    for (let i = 0; i < openFormButtons.length; i++) {
        openFormButtons[i].addEventListener('click', function() {
            backdrop.style.display = 'block';
            formPopup.style.display = 'block';
        });
    }

    // Действия для других кнопок, если они существуют
    if(openFormBtnFixed) {
        openFormBtnFixed.addEventListener('click', function() {
            backdrop.style.display = 'block';
            formPopup.style.display = 'block';
        });
    }

    if(openForm) {
        openForm.addEventListener('click', function() {
            backdrop.style.display = 'block';
            formPopup.style.display = 'block';
        });
    }

    if(closeFormBtn) {
        closeFormBtn.addEventListener('click', function() {
            backdrop.style.display = 'none';
            formPopup.style.display = 'none';
        });
    }
});
