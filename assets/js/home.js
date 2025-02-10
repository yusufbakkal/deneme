// Araba kartları slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.car-slider-container');
    const cards = document.querySelectorAll('.car-card');
    const cardWidth = cards[0].offsetWidth + 24; // 24px gap
    let currentIndex = 0;

    // Kaydırma butonlarını ekle
    const sliderContainer = document.querySelector('.car-slider');
    sliderContainer.insertAdjacentHTML('beforeend', `
        <button class="slider-nav prev" onclick="slideCards('prev')">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="slider-nav next" onclick="slideCards('next')">
            <i class="fas fa-chevron-right"></i>
        </button>
    `);

    // Kaydırma fonksiyonu
    window.slideCards = function(direction) {
        const maxIndex = cards.length - 1;
        
        if (direction === 'next') {
            currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        } else {
            currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        }

        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };
}); 