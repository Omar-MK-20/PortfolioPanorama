import React from 'react';
import type { AboutProps } from '../types';

const About: React.FC<AboutProps> = ({ companyInfo }) => {
    const getSocialIcon = (platform: string) => {
        const iconClass = "w-5 h-5";

        switch (platform.toLowerCase()) {
            case 'instagram':
                return (
                    <svg className={iconClass} fill="currentColor" viewBox="0 0 16 16">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> */}
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                );
            case 'facebook':
                return (
                    <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                );
            case 'linkedin':
                return (
                    <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                );
            case 'pinterest':
                return (
                    <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                );
            default:
                return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                );
        }
    };

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        About Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Learn more about our design philosophy and the team behind our exceptional interior spaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Company Information */}
                    <div className="space-y-8">
                        {/* Company Name & Description */}
                        <div>
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                                {companyInfo.name}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {companyInfo.description}
                            </p>
                        </div>

                        {/* Mission Statement */}
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h4>
                            <p className="text-gray-600 leading-relaxed">
                                {companyInfo.missionStatement}
                            </p>
                        </div>

                        {/* Design Philosophy */}
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">Design Philosophy</h4>
                            <p className="text-gray-600 leading-relaxed">
                                {companyInfo.designPhilosophy}
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h4>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-terracotta mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a
                                        href={`mailto:${companyInfo.email}`}
                                        className="text-gray-600 hover:text-terracotta transition-colors duration-300"
                                    >
                                        {companyInfo.email}
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-terracotta mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a
                                        href={`tel:${companyInfo.phone}`}
                                        className="text-gray-600 hover:text-terracotta transition-colors duration-300"
                                    >
                                        {companyInfo.phone}
                                    </a>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-terracotta mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-600">{companyInfo.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Additional Info */}
                    <div className="space-y-8">
                        {/* Social Media Links */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {companyInfo.socialLinks.map((social) => (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-terracotta hover:bg-terracotta/5 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                                    >
                                        <div className="text-terracotta group-hover:text-terracotta/80 transition-colors duration-300">
                                            {getSocialIcon(social.platform)}
                                        </div>
                                        <span className="ml-3 text-gray-700 group-hover:text-gray-900 font-medium">
                                            {social.platform}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-linear-to-br from-terracotta to-terracotta/80 rounded-lg p-8 ">
                            <h4 className="text-xl font-semibold mb-3">Ready to Transform Your Space?</h4>
                            <p className="mb-6 opacity-90">
                                Let's discuss your vision and create something extraordinary together.
                            </p>
                            <a
                                href={`mailto:${companyInfo.email}`}
                                className="inline-flex items-center px-6 py-3 bg-white text-terracotta font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
                            >
                                Start Your Project
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Additional Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                                <div className="w-12 h-12 mx-auto mb-3 bg-terracotta/10 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h5 className="font-semibold text-gray-900 mb-1">Certified Designers</h5>
                                <p className="text-sm text-gray-600">Professional expertise</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                                <div className="w-12 h-12 mx-auto mb-3 bg-terracotta/10 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h5 className="font-semibold text-gray-900 mb-1">Timely Delivery</h5>
                                <p className="text-sm text-gray-600">On-time completion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
