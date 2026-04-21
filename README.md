# Realtor Empress

A React-based real estate website for Realtor Empress.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Setup

1. **Add your assets** — Place these files inside `src/assets/`:
   - `logo1.png` — Your business logo
   - `image1.jpg` — Your hero banner image

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
realtor-empress/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── logo1.png       ← Add your logo here
│   │   └── image1.jpg      ← Add your hero image here
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── HeroBanner/
│   │       ├── HeroBanner.jsx
│   │       └── HeroBanner.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## Components

- **Navbar** — Sticky top navigation with logo, nav links, and Contact Us CTA button
- **HeroBanner** — Full hero section with headline, services list, email capture form, and property image
