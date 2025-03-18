import React from 'react';
import printerImage from './assets/printerbrc.png';
import file from './assets/Catalogue.pdf';

const HeroSection = () => {
    const onButtonClick = () => {
        const pdfUrl = file;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Catalogue.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute w-full h-full overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen opacity-30 animate-blob"></div>
                <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-400 rounded-full mix-blend-screen opacity-25 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    {/* Text content with enhanced typography */}
                    <div className="md:w-1/2 mb-10 md:mb-0 space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent leading-tight">
                            Precision in Every Print,<br/>
                            <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                                Vision in Every Layer
                            </span>
                        </h1>
                        
                        <button 
                            onClick={onButtonClick}
                            className="mt-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 px-8 rounded-full text-xl 
                            transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40"
                        >
                            View Catalogue
                        </button>
                    </div>
                    
                    {/* 3D Printer Image with floating animation */}
                    <div className="md:w-1/2 flex justify-center items-center">
                        <div className="relative w-full max-w-xl">
                            <img 
                                src={printerImage} 
                                alt="3D Printer" 
                                className="relative z-10 w-full h-auto animate-float"
                            />
                            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        </div>
    );
};

export default HeroSection;