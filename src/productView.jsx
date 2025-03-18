import React, { useState, useEffect } from 'react';

const ProductOverview = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customizationText, setCustomizationText] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('Classic');
  
  // Product images array
  const productImages = [
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
  ];
  
  // Design options
  const designOptions = [
    { id: 'classic', name: 'Classic', image: '/api/placeholder/80/80' },
    { id: 'minimal', name: 'Minimal', image: '/api/placeholder/80/80' },
    { id: 'premium', name: 'Premium', image: '/api/placeholder/80/80' },
    { id: 'custom', name: 'Custom', image: '/api/placeholder/80/80' },
  ];
  
  // Auto rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // Handle design selection
  const handleDesignClick = (designName) => {
    setSelectedDesign(designName);
    // In a real application, you might want to navigate to a new page here
    // This is a placeholder for navigation functionality
    console.log(`Navigating to design page: ${designName}`);
  };

  return (
    <div className="min-h-screen w-full bg-indigo-900 text-white flex flex-col pt-8">
      <div className="flex flex-col md:flex-row h-full w-full p-6">
        {/* Left side - Product images with vertical thumbnails and design options */}
        <div className="w-full md:w-3/5 flex flex-col gap-6">
          <div className="flex flex-row gap-6">
            {/* Vertical thumbnails */}
            <div className="flex flex-col gap-4">
              {productImages.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`cursor-pointer rounded-md overflow-hidden border-2 w-24 h-24 ${
                    currentImageIndex === index ? 'border-purple-500' : 'border-indigo-700'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Main product image */}
            <div className="bg-indigo-800 rounded-lg overflow-hidden flex-grow h-120 flex items-center justify-center">
              <img 
                src={productImages[currentImageIndex]} 
                alt="Apple iMac 24-inch" 
                className="object-contain h-full w-full"
              />
            </div>
          </div>
          
          {/* Design options - moved under main image and centered */}
          <div className="bg-indigo-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Available Designs</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {designOptions.map((design) => (
                <div
                  key={design.id}
                  onClick={() => handleDesignClick(design.name)}
                  className={`cursor-pointer rounded-md transition-all flex flex-col items-center ${
                    selectedDesign === design.name
                      ? 'bg-purple-700 ring-2 ring-purple-400'
                      : 'bg-indigo-700 hover:bg-indigo-600'
                  }`}
                  style={{ width: '100px' }}
                >
                  <img
                    src={design.image}
                    alt={design.name}
                    className="w-full h-24 object-cover rounded-t-md"
                  />
                  <div className="text-center p-2">
                    <span className="text-sm font-medium">{design.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right side - Product information and purchase options */}
        <div className="w-full md:w-2/5 flex flex-col p-6">
          <h1 className="text-2xl font-bold mb-6">Apple iMac 24" All-in-One Computer, Apple M1, 8GB RAM</h1>
          
          {/* Price - updated to white */}
          <div className="text-3xl font-bold mb-6 text-white">$1,249.99</div>
          
          {/* Quantity selector - updated to white */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <span className="text-white">Quantity</span>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="bg-purple-700 text-white px-3 py-1 rounded-l-md"
                >
                  -
                </button>
                <span className="bg-indigo-800 text-white px-4 py-1">
                  {quantity}
                </span>
                <button 
                  onClick={increaseQuantity}
                  className="bg-purple-700 text-white px-3 py-1 rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          {/* Color options - updated to white and bold */}
          <div className="mb-8">
            <h3 className="text-white font-bold mb-2">Colour</h3>
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-teal-500 border-2 border-white mb-1 flex items-center justify-center"></div>
                <span className="text-xs text-white">Green</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-pink-500 border-2 border-indigo-700 mb-1 flex items-center justify-center"></div>
                <span className="text-xs text-white">Pink</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gray-400 border-2 border-indigo-700 mb-1 flex items-center justify-center"></div>
                <span className="text-xs text-white">Silver</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-cyan-500 border-2 border-indigo-700 mb-1 flex items-center justify-center"></div>
                <span className="text-xs text-white">Blue</span>
              </div>
            </div>
          </div>
          
          {/* Product Details - updated to white */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Product Details</h3>
            <p className="text-indigo-200 text-sm">
              High-quality, durable solution with advanced technology and ergonomic design for optimal performance.
              Features a sleek interface and customizable settings.
            </p>
          </div>
          
          {/* Customization Section - updated to white */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Customization (if any)</h3>
            
            {/* Textarea for custom text */}
            <div className="mb-4">
              <textarea
                className="w-full bg-indigo-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                rows="3"
                placeholder="Enter your customization details here..."
                value={customizationText}
                onChange={(e) => setCustomizationText(e.target.value)}
              ></textarea>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="mt-auto">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded mb-2 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </button>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;