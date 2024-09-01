document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slides img');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const captionTitle = document.getElementById('caption-title');
    const captionDescription = document.getElementById('caption-description');
    
    const captions = [
        { title: "LONDON", description: "IMMERSE IN THE BEAUTY OF LONDON" },
        { title: "Buckingham Palace", description: "The London residence and administrative headquarters of the monarch of the United Kingdom." },
        { title: "Tower Bridge", description: "A combined bascule and suspension bridge in London, built between 1886 and 1894." },
        { title: "London Eye", description: "A giant Ferris wheel on the South Bank of the River Thames in London." },
        { title: "London Tower", description: "A historic castle on the north bank of the River Thames in central London." },
        { title: "St. Paul's Cathedral", description: "An Anglican cathedral in London, the seat of the Bishop of London." }
    ];
    
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.classList.remove('fade-in');
            if (i === index) {
                slide.classList.add('active');
                setTimeout(() => slide.classList.add('fade-in'), 10); // Trigger animation
            }
        });

        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        captionTitle.textContent = captions[index].title;
        captionDescription.textContent = captions[index].description;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    document.querySelector('.next').addEventListener('click', function() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            showSlide(index);
        });
    });

    // Initialize
    showSlide(currentSlide);
});
