// Mobile menu toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

//Navbar Page Follow

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = Array.from(document.querySelectorAll("section[id]"));

    function updateActiveLink() {
        let index = sections.length;

        while (--index >= 0) {
            const sectionTop = sections[index].getBoundingClientRect().top;
            if (sectionTop <= 150) {
                break;
            }
        }

        navLinks.forEach((link) => {
            link.classList.remove("active");
            const targetId = sections[index]?.getAttribute("id");
            if (link.getAttribute("href") === `#${targetId}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Call once on load
});

//spotser logo takes us at the top of the page
function scrollToTop(event) {
    event.preventDefault(); // prevent jumping
    window.scrollTo({ top: 0, behavior: 'smooth' });
}





// FAQ Accordion
document.querySelectorAll('.toggle-faq').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');

        // Toggle visibility
        answer.classList.toggle('hidden');

        // Toggle icon rotation
        icon.classList.toggle('rotate-180');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});
//image swiper
new Swiper(".image-swiper", {
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    slidesPerView: 3,
    spaceBetween: 20,
});

// Swiper initialization (moved from index.html and updated)
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.testimonial-swiper', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});
