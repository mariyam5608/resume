// 
// document.addEventListener("DOMContentLoaded", () => {
//     const toggleButton = document.getElementById("toggle-skills");
//     const skillsSection = document.getElementById("skills");
  
//     if (!toggleButton || !skillsSection) {
//       console.error("Missing required elements");
//       return;
//     }
  
//     const initialDisplayState = skillsSection.style.display;
//     const toggleSkills = () => {
//       skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
//     };
  
//     toggleButton.addEventListener("click", toggleSkills);
//   });
// Get all the toggle buttons
// const toggleButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.toggle-button');

// Add event listeners to the toggle buttons
// toggleButtons.forEach((button: HTMLButtonElement) => {
//     button.addEventListener('click', () => {
//         // Get the section that the button is associated with
//         const sectionId: string = button.id.replace('toggle-', '');
//         const section: HTMLElement | null = document.getElementById(sectionId);

//         if (section) {
//             // Toggle the visibility of the section
//             section.classList.toggle('hidden');

//             // Update the button text
//             if (section.classList.contains('hidden')) {
//                 button.textContent = 'Show';
//             } else {
//                 button.textContent = 'Hide';
//             }
//         }
//     });
// });

// // Add event listener to the download resume button
// document.getElementById('download-resume')?.addEventListener('click', () => {
//     // Create a new link element
//     const link: HTMLAnchorElement = document.createElement('a');

//     // Set the link's href attribute to the resume HTML
//     link.href = 'data:text/html,' + encodeURIComponent(document.documentElement.outerHTML);

//     // Set the link's download attribute to the resume file name
//     link.download = 'resume.html';

//     // Simulate a click on the link
//     link.click();
// });

// // Add event listener to the window to handle key presses
// window.addEventListener('keydown', (event: KeyboardEvent) => {
//     // If the 'p' key is pressed, print the resume
//     if (event.key === 'p') {
//         window.print();
//     }
// });
// Add event listener to form submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send email using AJAX or API)
    console.log('Form submitted!');
  });
} else {
  console.error('Contact form element not found!');
}