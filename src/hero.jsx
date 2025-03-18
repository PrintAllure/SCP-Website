import React from 'react';
import printerImage from './assets/printerbrc.png';
import file from './assets/Catalogue.pdf'

const HeroSection = () => {
    const onButtonClick = () => {
        const pdfUrl = file; // Directly assign the file path
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Catalogue.pdf"; // Set the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-cyan-400 via-blue-400 to-blue-600">
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Text content */}
          <div className="md:w-7/8 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Precision in every Print,
              <br />
              Vision in every Layer
            </h1>
            <button className="mt-10 bg-white text-black font-bold py-4 px-8 rounded-full text-xl" onClick={onButtonClick}>
              View Catalogue
            </button>
          </div>
          
          {/* 3D Printer Image - positioned more to the left and top */}
          <div className="md:w-1/2 flex justify-end items-start -mt-15 mr-30 ">
            <img 
              src={printerImage} 
              alt="3D Printer" 
              className="max-w-full h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;