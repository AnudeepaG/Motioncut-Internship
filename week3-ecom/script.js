// Script for Product Image Gallery
const thumbnails = document.querySelectorAll('.thumbnail');
const productImages = document.querySelectorAll('.product-image');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        document.querySelector('.thumbnail.active').classList.remove('active');
        thumbnail.classList.add('active');
        
        document.querySelector('.product-image.active').classList.remove('active');
        productImages[index].classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const quickViewButton = document.querySelector('.quick-view');
    const quickViewPopup = document.querySelector('.quick-view-popup');
    const closeBtn = document.querySelector('.close-btn');

    quickViewButton.addEventListener('click', () => {
        quickViewPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        quickViewPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === quickViewPopup) {
            quickViewPopup.style.display = 'none';
        }
    });
});
