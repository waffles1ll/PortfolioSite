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
        link.href = 'Assets/ZYI Resume.pdf';
        link.download = 'ZYI Resume.pdf';
        
        // Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Optional: Show a message
        //alert('Resume download started! If the download doesn\'t start, please contact Zyi by email.');
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

// Smooth Scroll for anchor links (only for internal page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only apply smooth scroll to actual anchor links, not placeholder "#" links
        if (href && href !== '#' && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
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
        tags: ["Unity", "C#", "Teamwork"],
        link: "https://www.youtube.com/watch?v=JqhD0CI-2BY", // Replace with your actual link
        images: [
            "Assets/HDBCats-1.png",
            "Assets/HDBCats-2.png",
            "Assets/HDBCats-3.png",
            "Assets/HDBCats-4.png"
        ]
    },
    project2: {
        title: "Our Wildlife Our Home",
        description: "Developing an innovative solution for NParks' challenge to educate the public about wildlife conservation. This interactive experience combines educational content with engaging personalised storytelling.",
        tags: ["Unity", "C#", "Prototyping", "AR"],
        link: "https://example.com/wildlife", // Replace with your actual link
        images: [
            "Assets/ILAB-1.jpg",
            "Assets/ILAB-2.jpg"
        ]
    },
    project3: {
        title: "The Addams Family Production",
        description: "Served as Head of Props and Sets for a 6-month theatre production of The Addams Family. Led a team of artists and craftspeople in creating over 70 unique props and set pieces. Responsibilities included concept design, budgeting, material sourcing, construction supervision, and maintaining the artistic vision throughout the production run.",
        tags: ["Props and Sets Making", "Leadership", "Concept Art", "Theatre Production"],
        link: "https://youtu.be/xikMBV_u2Kk?si=E32z3W1I6YrfqZfl", // Replace with your actual link
        images: [
            "Assets/AddamsFamily-1.jpg",
            "Assets/AddamsFamily-2.png",
            "Assets/AddamsFamily-3.jpg",
            "Assets/AddamsFamily-4.jpg"
        ]
    },
    project4: {
        title: "Get Out! VR Game",
        description: "Solo developed a VR simulation game where you are met with a naughty cat moving in to your new house.",
        tags: ["C#", "VR", "Unity"],
        link: "https://youtu.be/4wDtzc5_moM", // Replace with your actual link
        images: [
            "Assets/GetOut-1.png",
            "Assets/GetOut-2.png",
            "Assets/GetOut-3.png",
            "Assets/GetOut-4.png",
            "Assets/GetOut-5.png"
        ]
    },
    project5: {
        title: "3D Character Animation",
        description: "Created basic character idle, walk and jump animations for games in Maya.",
        tags: ["Animation", "Maya", "3D"],
        link: "https://www.artstation.com/artwork/8Brb3m", // Replace with your actual link
        images: [
            "Assets/3DAnimation-1.png",
            "Assets/3DAnimation-2.png",
            "Assets/3DAnimation-3.png",
            "Assets/3DAnimation-4.png"
        ]
    },
    project6: {
        title: "Space Strider! Game",
        description: "An endless runner where you collect as many stars as possible. Solo developed in Unreal Engine, coded with visual scripting.",
        tags: ["Visual Scripting", "Unreal", "3D"],
        link: "https://youtu.be/PsRJ4c4UuEY?si=nU_t2CoZODmiIHDg", // Replace with your actual link
        images: [
            "Assets/SpaceStrider-1.png",
            "Assets/SpaceStrider-2.png",
            "Assets/SpaceStrider-3.png",
            "Assets/SpaceStrider-4.png",
        ]
    },
    project7: {
        title: "2D Animation Reel",
        description: "Collection of my 2D animations from 2021-2024",
        tags: ["Animation", "Procreate", "2D", "Adobe Animate"],
        link: "https://youtu.be/Aza819Uu9Uk", // Replace with your actual link
        images: [
            "Assets/Animation-1.png",
            "Assets/Animation-2.gif",
            "Assets/Animation-3.png",
            "Assets/Animation-4.png",
            "Assets/Animation-5.png"
        ]
    },
    project8: {
        title: "KOPI Production",
        description: "Served as Head of Props and Sets, as well as Assistant Stage Manager during this 4-month production. Lead a 20+ team of craftsmen, crew and actors.",
        tags: ["Props", "Teamwork", "Leadership", "Theatre Production"],
        link: "https://youtu.be/b_Iv1LbBlN4?si=eRhcTu84UmlU_dDt", // Replace with your actual link
        images: [
            "Assets/KOPI-1.jpg",
            "Assets/KOPI-2.jpg"
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
    
    // Update link
    const galleryLink = document.getElementById('galleryLink');
    if (currentProject.link && currentProject.link !== '#') {
        galleryLink.href = currentProject.link;
        galleryLink.style.display = 'inline-flex';
        galleryLink.onclick = null; // Remove any blocking onclick handlers
    } else {
        galleryLink.style.display = 'none';
    }
    
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
    const linkButton = document.getElementById('galleryLink');
    const hasValidLink = currentProject.link && currentProject.link !== '#' && currentProject.link !== '';
    
    // Function to ensure button stays visible
    const ensureButtonVisible = () => {
        if (hasValidLink) {
            linkButton.style.display = 'inline-flex';
            linkButton.style.visibility = 'visible';
            linkButton.style.opacity = '1';
            linkButton.style.position = 'relative';
            linkButton.style.pointerEvents = 'auto';
            void linkButton.offsetHeight; // Force reflow
            console.log('Button visibility forced after image load');
        }
    };
    
    // Set image source
    img.src = currentProject.images[currentImageIndex];
    
    // Ensure button is visible immediately
    ensureButtonVisible();
    
    // Also ensure button is visible after image loads (in case of layout shift)
    img.onload = () => {
        setTimeout(ensureButtonVisible, 50); // Small delay to ensure layout is complete
    };
    
    // Update counters
    document.getElementById('currentImage').textContent = currentImageIndex + 1;
    document.getElementById('totalImages').textContent = currentProject.images.length;
    
    // Debug log
    console.log('Image updated to index:', currentImageIndex, '| Button visible:', hasValidLink);
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