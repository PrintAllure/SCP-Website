import React from 'react';

const FeatureCard = ({ title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-purple-400 hover:shadow-lg">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
    </div>
  );
};

const FeatureCards = () => {
  const features = [
    { title: "Tough" },
    { title: "Durable" },
    { title: "Scratchless" },
    { title: "High-Quality" }
  ];

  return (
    <div className="bg-blue-100 p-6 w-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-800">Why Buy Our Product?</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;