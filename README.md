# Interior Design Portfolio SPA

A modern, responsive single-page application built with React, TypeScript, and TailwindCSS that showcases interior design projects through an elegant interface.

## Features

### 🎨 **Modern Design System**
- Neutral, elegant color palette inspired by interior design aesthetics
- Custom TailwindCSS configuration with warm accents
- Smooth animations and transitions
- Glass morphism effects and subtle shadows

### 📱 **Responsive Design**
- Mobile-first approach with TailwindCSS breakpoints
- Sticky navigation with mobile hamburger menu
- Responsive grid layouts for all screen sizes
- Touch-friendly interfaces

### 🖼️ **Interactive Gallery**
- Responsive image grid with hover effects
- Lightbox/modal functionality for full-size viewing
- Lazy loading for optimal performance
- Image captions with room types and categories

### 🌐 **Panorama Viewer**
- Responsive iframe container with 16:9 aspect ratio
- Loading states and error handling
- Navigation instructions for users
- Smooth transitions

### 🏢 **About Section**
- Company information and contact details
- Social media integration
- Mission statement and design philosophy
- Call-to-action elements

## Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Sticky navigation bar
│   ├── Hero.tsx         # Hero section with background
│   ├── Gallery.tsx      # Image gallery with lightbox
│   ├── Panorama.tsx     # Panorama viewer
│   └── About.tsx         # About us section
├── types/               # TypeScript interfaces
│   └── index.ts         # All type definitions
├── data/                # Sample data
│   └── index.ts         # Mock data for components
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and CSS variables
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PanoramaTest
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Colors
The color palette is defined in `tailwind.config.js` and can be customized:

```javascript
colors: {
  'terracotta': '#d2691e',    // Primary accent
  'warm-brown': '#8b4513',    // Secondary accent
  'charcoal': '#333333',      // Text color
  // ... more colors
}
```

### Content
Update the sample data in `src/data/index.ts`:

- **Company Information**: Name, description, contact details
- **Gallery Images**: Add your project renders
- **Hero Content**: Title, description, background image
- **Panorama Data**: Virtual tour URL

### Components
Each component is modular and can be customized:

- **Navigation**: Add/remove menu items
- **Gallery**: Modify grid layout or add filtering
- **Panorama**: Change aspect ratio or add custom controls
- **About**: Update company information and social links

## Features in Detail

### Navigation Bar
- Sticky header that stays visible while scrolling
- Smooth scroll navigation to all sections
- Mobile hamburger menu with animations
- Active section highlighting
- Logo/company name with hover effects

### Hero Section
- Full-width background image
- Dark overlay for text readability
- AI-generated title and description
- Call-to-action button with smooth scroll
- Responsive typography scaling

### Gallery Component
- Responsive grid layout (1-3 columns based on screen size)
- Hover effects with image scale and information overlay
- Lightbox modal with navigation controls
- Lazy loading for performance
- Image captions with room types and categories

### Panorama Viewer
- Responsive iframe container
- Loading spinner with TailwindCSS animations
- Error state handling
- Navigation instructions
- Smooth loading transitions

### About Section
- Company information and mission statement
- Contact details with icons
- Social media links with platform-specific icons
- Call-to-action elements
- Responsive grid layout

## Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Smooth Scrolling**: Native CSS scroll behavior
- **Optimized Images**: Responsive image handling
- **Efficient Animations**: CSS-based animations
- **TypeScript**: Compile-time error checking

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: hello@panoramadesign.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for interior design professionals