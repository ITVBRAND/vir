document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider__prev');
    const nextBtn = document.querySelector('.slider__next');
    let currentSlide = 0;

    function showSlide(index) {
        const slideWidth = slides[0].clientWidth; // Получаем ширину слайда
        document.querySelector('.slides').style.transform = `translateX(-${slideWidth * index}px)`; // Плавно перемещаем слайды

        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000); // Автоматическая смена слайдов каждые 5 секунд

    showSlide(currentSlide); // Показываем первый слайд при загрузке страницы
});
