document.addEventListener('DOMContentLoaded', () => {
    // Image Slider
    const sliderImages = document.querySelectorAll('.slider-image');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentImage = 0;

    function showImage(index) {
        sliderImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        currentImage = (currentImage - 1 + sliderImages.length) % sliderImages.length;
        showImage(currentImage);
    });

    nextBtn.addEventListener('click', () => {
        currentImage = (currentImage + 1) % sliderImages.length;
        showImage(currentImage);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentImage = (currentImage + 1) % sliderImages.length;
        showImage(currentImage);
    }, 5000);

    // Contact Form Validation
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const state = document.getElementById('state').value;
            const message = document.getElementById('message').value;

            if (name && email && state && message) {
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill out all required fields.');
            }
        });
    }
});