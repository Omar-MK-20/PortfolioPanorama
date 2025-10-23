// Sample data for Interior Design Portfolio SPA

import type { CompanyInfo, ImageData, NavigationItem, HeroContent, PanoramaData } from '../types';

export const navigationItems: NavigationItem[] = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'panorama', label: 'Panorama', href: '#panorama' },
    { id: 'about', label: 'About', href: '#about' },
];

export const companyInfo: CompanyInfo = {
    name: 'Ali Salah Architecture',
    description: 'Creating exceptional interior spaces that blend functionality with aesthetic beauty.',
    email: 'alisalaharch@gmail.com',
    phone: '+1 (555) 123-4567',
    address: 'Ismael Mohamed Tower, 2 Taha Hussein, St, Zamalek, Giza',
    missionStatement: 'We believe that exceptional interior design transforms not just spaces, but lives. Our mission is to create environments that inspire, comfort, and reflect the unique personality of each client.',
    designPhilosophy: 'Our design philosophy centers on the harmonious balance between form and function, where every element serves a purpose while contributing to the overall aesthetic narrative.',
    socialLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/panoramadesign', icon: 'instagram' },
        { platform: 'Facebook', url: 'https://facebook.com/panoramadesign', icon: 'facebook' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/company/panoramadesign', icon: 'linkedin' },
        { platform: 'Pinterest', url: 'https://pinterest.com/panoramadesign', icon: 'pinterest' },
    ],
};

export const heroContent: HeroContent = {
    title: 'Transform Your Space',
    description: 'Discover the art of interior design through our curated collection of modern, elegant spaces that inspire and delight.',
    backgroundImage: '/Renders/01_Post.jpg',
    ctaText: 'Explore Our Work',
};

export const galleryImages: ImageData[] = [
    {
        id: '1',
        url: '/Renders/19_Post.jpg',
        altText: 'Indoor pool in a modern luxury home',
        roomType: 'indoor pool',
        category: 'interior',
        title: 'Luxury Indoor Pool Area',
        description: 'A serene indoor pool with rippling blue water, surrounded by floor-to-ceiling glass walls and doors leading to adjacent rooms, featuring minimalist design with neutral tones and subtle lighting.'
      },
      {
        id: '2',
        url: '/Renders/18_Post.jpg',
        altText: 'Home gym with exercise equipment',
        roomType: 'gym',
        category: 'interior',
        title: 'Modern Home Gym',
        description: 'A well-equipped home gym featuring a treadmill, weight bench, pulley system, and barbells, set in a spacious room with large windows, neutral walls, and integrated lighting for a clean, motivating workout space.'
      },
      {
        id: '3',
        url: '/Renders/16_Post.jpg',
        altText: 'Spacious living room with open kitchen',
        roomType: 'living room',
        category: 'interior',
        title: 'Open-Plan Living Room',
        description: 'An expansive living room with beige sofas, teal accent pillows, a large coffee table, and a pendant light, seamlessly connected to a modern kitchen with wood cabinetry and an island, emphasizing natural light and minimalist decor.'
      },
      {
        id: '4',
        url: '/Renders/04_Post.jpg',
        altText: 'Kitchen island with bar stools',
        roomType: 'kitchen',
        category: 'interior',
        title: 'Contemporary Kitchen Island',
        description: 'A close-up view of a kitchen island with stone countertop, wooden bar stools, pendant lighting, and integrated appliances, part of an open-concept space with warm wood tones and soft ambient lighting.'
      },
      {
        id: '5',
        url: '/Renders/06_Post.jpg',
        altText: 'Living room with sectional sofa and artwork',
        roomType: 'living room',
        category: 'interior',
        title: 'Cozy Living Area',
        description: 'A comfortable living room setup with an L-shaped sectional sofa in beige and teal, coffee tables, a large abstract painting on the wall, and potted plants, highlighting a blend of comfort and elegance in a neutral palette.'
      },
      {
        id: '6',
        url: '/Renders/02_Post.jpg',
        altText: 'Outdoor patio with rock wall and greenery',
        roomType: 'patio',
        category: 'exterior',
        title: 'Serene Outdoor Patio',
        description: 'An outdoor patio area featuring a textured rock wall, lush green plants and shrubs, gravel accents, and stepping stone pathway, adjacent to large glass doors connecting to the indoor space, creating a tranquil natural extension.'
      }
];

export const panoramaData: PanoramaData = {
    // url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155730123456!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21e0e0e0e0%3A0xe0e0e0e0e0e0e0e0!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    url: '/malqa-basement/app-files/index.html',
    title: 'Virtual Tour',
    description: 'Experience our design spaces in immersive 360° detail.',
};
