# Portfolio Project Structure

This project has been restructured to follow a clean, scalable architecture for a React portfolio website.

## 📁 Directory Structure

```
src/
├── components/           # Reusable UI components
│   └── home/            # Home page specific components
│       ├── HeroSection.jsx
│       ├── Navbar.jsx
│       ├── ServicesSection.jsx
│       ├── AboutMeSection.jsx
│       ├── FavoriteToolsSection.jsx
│       └── LatestProjectsSection.jsx
├── layouts/             # Layout components
│   └── MainLayout.jsx   # Main layout wrapper (navbar + footer)
├── pages/               # Page components
│   └── Home.jsx         # Home page component
├── styles/              # CSS files organized by feature
│   ├── global.css       # Global styles and utilities
│   └── components/      # Component-specific styles
│       └── home/        # Home page component styles
│           ├── ServicesSection.css
│           ├── AboutMeSection.css
│           ├── FavoriteToolsSection.css
│           └── LatestProjectsSection.css
├── assets/              # Static assets (images, icons, etc.)
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Base styles
```

## 🏗️ Architecture Overview

### Components
- **Home Components**: All sections specific to the home page
- **Layout Components**: Reusable layout structures
- **Page Components**: Full page components that compose sections

### Styles
- **Global Styles**: Common styles, utilities, and base styles
- **Component Styles**: Scoped styles for specific components
- **Responsive Design**: Mobile-first approach with breakpoints

### Key Features
- ✅ **Modular Structure**: Each component is self-contained
- ✅ **Scalable**: Easy to add new pages and components
- ✅ **Maintainable**: Clear separation of concerns
- ✅ **Responsive**: Mobile-first design approach
- ✅ **Performance**: Optimized imports and lazy loading ready

## 🚀 Adding New Features

### Adding a New Page
1. Create a new component in `src/pages/`
2. Add the page to your routing system
3. Create corresponding styles in `src/styles/pages/`

### Adding a New Component
1. Create the component in `src/components/`
2. Create corresponding styles in `src/styles/components/`
3. Import and use in your pages

### Adding New Sections to Home
1. Create the section component in `src/components/home/`
2. Create corresponding styles in `src/styles/components/home/`
3. Import and add to `src/pages/Home.jsx`

## 🎨 Styling Guidelines

- Use CSS modules or scoped styles for component-specific styling
- Global styles go in `src/styles/global.css`
- Follow the existing color scheme and design patterns
- Maintain responsive design principles

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 900px
- **Desktop**: > 900px

## 🔧 Development

To run the project:
```bash
npm install
npm run dev
```

The project is now well-structured and ready for further development! 