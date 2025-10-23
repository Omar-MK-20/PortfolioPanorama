// TypeScript interfaces for Interior Design Portfolio SPA

export interface CompanyInfo {
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: SocialLink[];
  missionStatement: string;
  designPhilosophy: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ImageData {
  id: string;
  url: string;
  altText: string;
  roomType: string;
  category: string;
  title?: string;
  description?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export interface HeroContent {
  title: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
}

export interface PanoramaData {
  url: string;
  title: string;
  description?: string;
}

// Component Props Interfaces
export interface NavigationProps {
  items: NavigationItem[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export interface HeroProps {
  content: HeroContent;
  onCtaClick: () => void;
}

export interface GalleryProps {
  images: ImageData[];
  onImageClick: (image: ImageData) => void;
}

export interface PanoramaProps {
  data: PanoramaData;
  isLoading: boolean;
  hasError: boolean;
}

export interface AboutProps {
  companyInfo: CompanyInfo;
}

export interface LightboxProps {
  image: ImageData | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}
