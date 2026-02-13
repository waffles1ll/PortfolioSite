# Portfolio Website

A responsive, modern portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Multiple Pages**: Home, Skills, Works, and Contact pages
- **Interactive Elements**: 
  - Mobile-friendly navigation menu
  - Resume download button
  - Project filtering on Works page
  - Animated skill bars
  - Contact form
- **Modern UI**: Clean, professional design with smooth animations

## Pages

1. **Home (index.html)**: About section with resume download and featured projects
2. **Skills (skills.html)**: Showcase your technical skills with progress bars
3. **Works (works.html)**: Portfolio of projects with filtering options
4. **Contact (contact.html)**: Contact form and social links

## Setup Instructions

### Local Development

1. Clone or download this repository
2. Add your resume PDF file to the project folder and name it `resume.pdf`
3. Open `index.html` in your web browser

### Customization

Before deploying, customize the following:

1. **Personal Information**:
   - Update "Your Name" in all HTML files
   - Replace placeholder email, phone, and location in `contact.html`
   - Update social media links in `contact.html`

2. **Projects**:
   - Replace placeholder projects with your actual work
   - Add project images to replace the placeholder images
   - Update project descriptions, tags, and links

3. **Skills**:
   - Modify skill categories and items in `skills.html`
   - Adjust skill bar percentages to reflect your proficiency

4. **Resume**:
   - Place your resume PDF in the root folder as `resume.pdf`

## Deploying to GitHub Pages

1. **Create a GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## File Structure

```
portfolio/
├── index.html          # Home page
├── skills.html         # Skills page
├── works.html          # Works/Projects page
├── contact.html        # Contact page
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── resume.pdf          # Your resume (add this file)
└── README.md           # This file
```

## Adding Images

To add project images:

1. Create an `images` folder in your project
2. Add your images to this folder
3. Update the project cards in HTML:
   ```html
   <div class="project-image">
       <img src="images/your-project-image.jpg" alt="Project Name">
   </div>
   ```

## Contact Form Integration

The contact form currently shows an alert. For actual email functionality, you can integrate:

- **EmailJS**: Free service for sending emails from static websites
- **Formspree**: Simple form backend
- **Netlify Forms**: If hosting on Netlify
- **Custom Backend**: Build your own API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Feel free to use this template for your personal portfolio!

## Credits

Created as a portfolio template. Customize and make it your own!
