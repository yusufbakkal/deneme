function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 3000; // 3 saniye
    let slideTimer;

    function showSlide(index) {
        // Aktif slide'ı kaldır
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Yeni slide'ı aktif yap
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    }

    // Dot'lara tıklama olayı
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideTimer);
            showSlide(index);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });

    // Otomatik geçişi başlat
    slideTimer = setInterval(nextSlide, slideInterval);
} 