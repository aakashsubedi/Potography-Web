
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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            { breakpoint: 1440, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1, arrows: true, dots: false } },
            { breakpoint: 480, settings: { slidesToShow: 1, arrows: false, dots: true } }
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


// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Latest Wedding 2025",
        excerpt: "Discover the upcoming wedding trends that will dominate the industry this year.",
        image: "images/banner/banner1.jpg",
        author: "Sarah Johnson",
        date: "March 15, 2025",
        readTime: "5 min read",
        category: "Fashion"
    },
    {
        id: 2,
        title: "Sustainable photography Guide",
        excerpt: "Learn how to make environmentally conscious photography decisions without compromising on style.",
        image: "images/blog/blog2.jpg",
        author: "Mike Chen",
        date: "March 12, 2025",
        readTime: "4 min read",
        category: "Sustainability"
    },
    {
        id: 3,
        title: "Portrait",
        excerpt: "Master the art of taking portrait pictures",
        image: "images/blog/blog3.jpg",
        author: "Emma Davis",
        date: "March 10, 2025",
        readTime: "6 min read",
        category: "Style"
    }
];

// Function to create blog post cards
function createBlogPost(post) {
    return `
        <article class="blog-card animate-fade-up">
            <div class="blog-card-image">
                <img src="${post.image}" alt="${post.title}" />
                <span class="blog-card-category">${post.category}</span>
            </div>
            <div class="blog-card-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-card-meta">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        ${post.author}
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        ${post.readTime}
                    </span>
                </div>
                <div class="blog-card-actions">
                    <a href="#" class="read-more">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </a>
                    <div class="action-buttons">
                        <button class="action-button" aria-label="Like">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </button>
                        <button class="action-button" aria-label="Share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// Render blog posts
document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = blogPosts.map(post => createBlogPost(post)).join('');

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with: ${email}`);
        e.target.reset();
    });

    // Add click handlers for like and share buttons
    document.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(1.2)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });
});