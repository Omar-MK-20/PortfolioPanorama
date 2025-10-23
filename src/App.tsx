
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Panorama from './components/Panorama';
import About from './components/About';
import { 
  navigationItems, 
  companyInfo, 
  heroContent, 
  galleryImages, 
  panoramaData 
} from './data';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [panoramaLoading, setPanoramaLoading] = useState(false);
  const [panoramaError, setPanoramaError] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'gallery', 'panorama', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle panorama loading
  useEffect(() => {
    setPanoramaLoading(true);
    setPanoramaError(false);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setPanoramaLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [panoramaData.url]);

  const handleCtaClick = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = (image: any) => {
    console.log('Image clicked:', image);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        items={navigationItems}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Hero Section */}
      <Hero
        content={heroContent}
        onCtaClick={handleCtaClick}
      />

      {/* Gallery Section */}
      <Gallery
        images={galleryImages}
        onImageClick={handleImageClick}
      />

      {/* Panorama Section */}
      <Panorama
        data={panoramaData}
        isLoading={panoramaLoading}
        hasError={panoramaError}
      />

      {/* About Section */}
      <About
        companyInfo={companyInfo}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-display font-bold mb-4">{companyInfo.name}</h3>
              <p className="text-gray-300 mb-4">
                Creating exceptional interior spaces that blend functionality with aesthetic beauty.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>{companyInfo.email}</p>
                <p>{companyInfo.phone}</p>
                <p>{companyInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 <a href="https://github.com/Omar-MK-20">Omar MK</a>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
