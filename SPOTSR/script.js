// ================= Mobile Menu Toggle =================
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// ================= Navbar Page Follow =================
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

// ================= Scroll to Top =================
function scrollToTop(event) {
    event.preventDefault(); // prevent jumping
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= FAQ Accordion =================
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

// ================= Smooth Scrolling for Nav Links =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close mobile menu after clicking a link
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// ================= Image Swiper =================
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

// ================= WhatsApp Button Integration =================

  document.getElementById("whatsapp-button").addEventListener("click", function (e) {
    e.preventDefault();

    const userPhone = prompt("Please enter your WhatsApp number (with country code):", "+91"); // you can make this dynamic

    if (!userPhone) {
      alert("Phone number is required.");
      return;
    }

    fetch("https://publicapi.myoperator.co/whatsapp/template/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer oJTN6rMpVHN57IKeMmBLU2KmxnaBXLVZyiAeUxpiOh"
      },
      body: JSON.stringify({
        "template_name": "website",  // Your template name
        "receiver_contact": userPhone,
        "company_id": "688dc7bc7d4aa541",
        "params": {
          "1": "Spotser",  // These depend on your template variables
          "2": "https://sptsr.vercel.app"
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === true) {
        alert("WhatsApp message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
        console.log(data);
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("An error occurred. Check console for details.");
    });
  });


// ================= Testimonial Swiper =================
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
