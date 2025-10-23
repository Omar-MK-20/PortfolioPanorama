import React, { useState, useEffect } from 'react';
import type { PanoramaProps } from '../types';

const Panorama: React.FC<PanoramaProps> = ({ data, isLoading, hasError }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [data.url]);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  if (hasError) {
    return (
      <section id="panorama" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Panorama</h3>
              <p className="text-red-600 mb-4">
                We're sorry, but we couldn't load the virtual tour at this time. Please try again later.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="panorama" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Virtual Tour
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience our design spaces in immersive 360° detail. Navigate through our projects and explore every corner.
          </p>
        </div>

        {/* Panorama Container */}
        <div className="relative">
          {/* Loading Spinner */}
          {(isLoading || !isLoaded) && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100 rounded-lg">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-terracotta mb-4"></div>
                <p className="text-gray-600 font-medium">Loading Virtual Tour...</p>
              </div>
            </div>
          )}

          {/* Panorama Iframe */}
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <iframe
              src={data.url}
              title={data.title}
              className="w-full h-full rounded-lg shadow-lg border-0"
              allowFullScreen
              loading="lazy"
              onLoad={handleIframeLoad}
              style={{
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
            />
          </div>

          {/* Panorama Info */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{data.title}</h3>
            {data.description && (
              <p className="text-gray-600 max-w-2xl mx-auto">{data.description}</p>
            )}
          </div>

          {/* Navigation Instructions */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Navigation Tips
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <p><strong>Click & Drag</strong> to look around</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p><strong>Scroll</strong> to zoom in/out</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <p><strong>Click hotspots</strong> to move</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panorama;
