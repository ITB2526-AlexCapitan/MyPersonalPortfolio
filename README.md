#  Alex Capitán | Systems Architecture Portfolio

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)

> A high-performance, minimalist personal portfolio designed for a Systems Administrator. Featuring a clean **Apple-inspired UI**, interactive **3D elements**, and a fully responsive layout.

🔗 **[View Live Demo](https://alexcapitan.github.io/portfolio)** *(Replace with your actual link)*

---

## 📖 About The Project

This project was developed as part of the **TA05 (Web Development)** assignment for the Higher Degree in Network Computer Systems Administration (ASIX).

The goal was to create a personal brand website that reflects technical proficiency through clean code, modern design principles, and semantic HTML5. The site showcases a professional profile, a curated list of technical projects (Home Lab, Cloud Migration, etc.), and provides a contact interface, all wrapped in a dark, "Glassmorphism" aesthetic.

---

## ✨ Key Features

### 🎨 Design & UI
*   **Apple-Style Aesthetic:** Dark mode default, translucent materials (`backdrop-filter`), and system fonts (San Francisco/Inter).
*   **Responsive Layout:** Adapts seamlessly from 4K desktops to mobile devices using CSS Grid and Flexbox.
*   **Smooth Navigation:** Native smooth scrolling and reveal animations (`IntersectionObserver`) as the user navigates.

### 🧊 3D Interactivity (Three.js)
*   **Scroll-Driven Animation:** A 3D MacBook Pro model that rotates and closes its lid in sync with the page scroll.
*   **Responsive 3D Camera:** The camera field of view and position automatically adjust based on the device width (`window.innerWidth`) to ensure the model never looks cut off on mobile devices.

### ⚡ Functionality
*   **Project Detail Pages:** A dedicated multi-page structure for deep-diving into specific projects (`projects/` directory).
*   **Form Validation:** Client-side HTML5 validation (Regex patterns for names, email types, and character limits) with custom JavaScript visual feedback.
*   **Dynamic UI Elements:** Simulated server rack animations and interactive design system components.

---

## 🛠 Tech Stack

*   **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+).
*   **3D Engine:** [Three.js](https://threejs.org/) (via ES Modules).
*   **Icons:** Inline SVG (Optimized).
*   **Fonts:** System UI Stack (San Francisco, Segoe UI, Roboto).

---
