# Project Structure

This document describes the structure and organization of the project.

---

## Directory Layout

```
portfolio/
│
├── public/                  # Static files (favicon, images, etc.)
│   └── vite.svg
│
├── src/                     # All source code
│   ├── assets/              # Static assets (images, fonts, etc.)
│   │   ├── AI_Character.png
│   │   └── react.svg
│   │
│   ├── components/          # Reusable UI components
│   │   └── home/            # Home page-specific components
│   │       ├── AboutMeSection.jsx
│   │       ├── FavoriteToolsSection.jsx
│   │       ├── HeroSection.jsx
│   │       ├── LatestProjectsSection.jsx
│   │       ├── Navbar.jsx
│   │       └── ServicesSection.jsx
│   │
│   ├── layouts/             # Layout components (wrappers for pages)
│   │   └── MainLayout.jsx
│   │
│   ├── pages/               # Top-level pages (routed views)
│   │   ├── Home.jsx
│   │   ├── Project.jsx
│   │   ├── Service.jsx
│   │   └── Service.css
│   │
│   ├── styles/              # Global and modular CSS
│   │   ├── global.css
│   │   ├── components/
│   │   │   └── home/
│   │   │       ├── AboutMeSection.css
│   │   │       ├── FavoriteToolsSection.css
│   │   │       ├── LatestProjectsSection.css
│   │   │       └── ServicesSection.css
│   │   ├── layouts/
│   │   └── pages/
│   │
│   ├── App.jsx              # Main app component
│   ├── App.css              # App-level styles
│   ├── Footer.jsx           # Footer component
│   ├── Footer.css           # Footer styles
│   ├── index.jsx            # Entry point for React (if using)
│   ├── main.jsx             # Main entry point (Vite default)
│   └── index.css            # Base styles
│
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
├── README.md
└── PROJECT_STRUCTURE.md     # (This file)
```

---

## Best Practices

- **components/**: For all reusable UI elements. Use subfolders for page-specific components.
- **pages/**: For top-level views that correspond to routes.
- **layouts/**: For layout wrappers (e.g., MainLayout, AuthLayout).
- **assets/**: For images, fonts, and other static files used in the app.
- **styles/**: For global and modular CSS. Use subfolders for organization.
- **public/**: For static files that need to be served as-is (e.g., favicon, robots.txt).
- **README.md**: Document setup, usage, and structure for contributors.

---

## Notes

- Keep components small and focused; split into smaller components if needed.
- Use `index.js` files in folders for easier imports if the project grows.
- Refactor files into the appropriate folders as the project evolves. 