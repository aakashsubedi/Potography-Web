
// -----NAvbar-----
const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
// -----NAvbar-----




// -----BAnner-----

$(document).ready(function(){
    $('.homepage-slider').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: false,
        variableWidth: false,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        prevArrow: '<button class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg></button>',
        nextArrow: '<button class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    });
});
// -----Banner-----


// -----ABout-----
// -----About-----
// <!-- banner2 -->

$(document).ready(function(){
    $('.banner2-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: true,
        dots: true,
        fade: true,
        pauseOnHover: false,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: true
                }
            }
        ]
    });
});
// <!-- banner2 -->

// -----portfolio-----

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.textContent.toLowerCase();

            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.querySelector('.portfolio-category').textContent.toLowerCase();
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// -----portfolio-----


// -----testimonial-----
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonials-grid');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 1; // Start with middle card active

    // Calculate initial offset to center the active card
    function calculateOffset(index) {
        const cardWidth = cards[0].offsetWidth;
        const gap = 32; // 2rem gap
        const containerWidth = slider.parentElement.offsetWidth;
        const totalCardWidth = cardWidth + gap;

        // Calculate the offset needed to center the active card
        const centerOffset = (containerWidth - cardWidth) / 2;
        return -(index * totalCardWidth - centerOffset);
    }

    function updateSlide() {
        const offset = calculateOffset(currentIndex);
        slider.style.transform = `translateX(${offset}px)`;

        // Update active state
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Update button states
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === cards.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateSlide();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        updateSlide();
    });

    // Initial setup
    updateSlide();
});
// -----testimonial-----

