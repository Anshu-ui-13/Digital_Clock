⏰ Digital Clock –  (HTML, CSS, JavaScript)

A beautifully designed Digital Clock Web App featuring:

Real-time clock with AM/PM

Smooth animations

Glassmorphism UI

Calendar with month navigation

Tick sound

Light/Dark mode

Background customization (color + image)

Fully responsive design for mobile and desktop

🚀 Features
1. Real-Time Digital Clock

Updates every second

Shows hours, minutes, seconds, AM/PM

Tick sound plays every second (can be changed or muted)

2. Stylish UI with Animations

Fade-in effects

Glassmorphism design

Smooth transitions

Clean and modern font

3. Built-in Calendar

View current month

Navigate to previous / next months

Highlights today’s date

4. Customization Settings

Change background color

Upload custom background images

Preferences are saved using localStorage

5. Theme Toggle

Switch between Dark Mode and Light Mode

Theme choice is saved automatically

6. Mobile Responsive UI

Optimized for:

Large desktops

Tablets

480px mobile screens

Very small phones (320px)

📁 Project Structure
📦 digital-clock
│── index.html        # Main UI
│── style.css         # Full design + responsive styles
│── script.js         # Clock logic + calendar + theme + settings
│── README.md         # Documentation

🧠 How It Works
Clock

JavaScript setInterval() updates:

Time

Day name

Date

AM/PM

Calendar

Dynamically generated using JS

Highlights current date

Supports month navigation

Background Settings

Using:

localStorage.setItem("bgColor", value);
localStorage.setItem("bgImage", value);

Theme Toggle

Saves user theme

Applies automatically on reload

📷 Preview (Your UI Looks Like This)

Digital clock in center

Modern gradient background

Calendar + Settings open on button click

Clean responsive layout
