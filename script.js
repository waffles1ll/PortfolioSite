// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}
const skillCards = document.querySelectorAll('.card');
skillCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});
// Resume Download Function
const downloadBtn = document.getElementById('downloadResume');

if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        // Create a link element
        const link = document.createElement('a');
        
        // Set the path to your resume PDF
        // Make sure to place your resume.pdf in the same directory
        link.href = 'resume.pdf';
        link.download = 'Your_Name_Resume.pdf';
        
        // Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Optional: Show a message
        alert('Resume download started! If the download doesn\'t start, please make sure resume.pdf is in your project folder.');
    });
}

// Project Filtering (for Works page)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        // For now, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
        
        // In a real implementation, you could use:
        // - EmailJS (https://www.emailjs.com/)
        // - Formspree (https://formspree.io/)
        // - Your own backend API
        // - Netlify Forms (if hosting on Netlify)
    });
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill bars on scroll (for Skills page)
const skillBars = document.querySelectorAll('.skill-progress');

if (skillBars.length > 0) {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add transition to navbar
navbar.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

// ============================================
// IMAGE GALLERY FUNCTIONALITY
// ============================================

// Project data - Add your images and descriptions here
const projectData = {
    project1: {
        title: "HDB Cats Game",
        description: "Working closely with a team of developers to create an engaging 3D tower defense game. This project involved extensive collaboration, asset creation, and gameplay programming. Players defend their HDB estate from waves of challenges while managing resources and upgrades. The game features custom 3D models, particle effects, and a progressive difficulty system.",
        tags: ["Unity", "C#", "Teamwork", "3D Modeling"],
        link: "https://youtu.be/JqhD0CI-2BY?si=0MuUfEIeRXEQS2Zm", // Replace with your actual link
        images: [
            "Assets/HDBCats-1.png",
            "Assets/HDBCats-2.png",
            "Assets/HDBCats-3.png",
            "Assets/HDBCats-4.png"
        ]
    },
    project2: {
        title: "Our Wildlife Our Home",
        description: "Developing an innovative solution for NParks' challenge to educate the public about wildlife conservation. This interactive experience combines educational content with engaging gameplay mechanics. Players learn about Singapore's biodiversity while completing challenges and missions. Features include AR integration, mini-games, and a comprehensive wildlife database.",
        tags: ["Unity", "C#", "Prototyping", "AR"],
        link: "https://example.com/wildlife", // Replace with your actual link
        images: [
            "https://via.placeholder.com/800x600/10b981/ffffff?text=Wildlife+Screenshot+1",
            "https://via.placeholder.com/800x600/10b981/ffffff?text=Wildlife+Screenshot+2",
            "https://via.placeholder.com/800x600/10b981/ffffff?text=Wildlife+Screenshot+3"
        ]
    },
    project3: {
        title: "The Addams Family Production",
        description: "Served as Head of Props and Sets for a 6-month theatre production of The Addams Family. Led a team of artists and craftspeople in creating over 100 unique props and set pieces. Responsibilities included concept design, budgeting, material sourcing, construction supervision, and maintaining the artistic vision throughout the production run. Successfully delivered on time and under budget while maintaining high quality standards.",
        tags: ["Props and Sets Making", "Leadership", "Concept Art", "Theatre Production"],
        link: "https://example.com/addams-family", // Replace with your actual link
        images: [
            "https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Addams+Set+1",
            "https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Addams+Props+2",
            "https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Addams+Behind+Scenes+3",
            "https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Addams+Final+4",
            "https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Addams+Details+5"
        ]
    }
    // Add project4, project5, etc. here following the same format
};

let currentProject = null;
let currentImageIndex = 0;

function openGallery(projectId) {
    currentProject = projectData[projectId];
    if (!currentProject) return;
    
    currentImageIndex = 0;
    
    // Update gallery content
    document.getElementById('galleryTitle').textContent = currentProject.title;
    document.getElementById('galleryDesc').textContent = currentProject.description;
    document.getElementById('galleryLink').href = currentProject.link;
    
    // Update tags
    const tagsContainer = document.getElementById('galleryTags');
    tagsContainer.innerHTML = '';
    currentProject.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'gallery-tag';
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });
    
    // Update image
    updateGalleryImage();
    
    // Show modal
    const modal = document.getElementById('galleryModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

function changeImage(direction) {
    if (!currentProject) return;
    
    currentImageIndex += direction;
    
    // Loop around
    if (currentImageIndex < 0) {
        currentImageIndex = currentProject.images.length - 1;
    } else if (currentImageIndex >= currentProject.images.length) {
        currentImageIndex = 0;
    }
    
    updateGalleryImage();
}

function updateGalleryImage() {
    if (!currentProject) return;
    
    const img = document.getElementById('galleryImage');
    img.src = currentProject.images[currentImageIndex];
    
    document.getElementById('currentImage').textContent = currentImageIndex + 1;
    document.getElementById('totalImages').textContent = currentProject.images.length;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeImage(1);
    } else if (e.key === 'Escape') {
        closeGallery();
    }
});
