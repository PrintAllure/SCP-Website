import React from 'react';
import pic from './assets/FullSizeRender.jpg';

const TeamComponent = () => {
  return (
    <div className="w-full bg-blue-50 p-6 rounded-md">
      {/* Team Picture Section */}
      <h1 className="text-3xl font-bold text-black-800 mt-10 mb-10">About Us</h1>
      <div className="w-4/5 mx-auto mb-8 bg-blue-300 p-8 rounded-md flex items-center justify-center">
        {/* This would be replaced with actual team image */}
        <div className="w-full  flex items-center justify-center">
          {/* <p className="text-white text-lg">Team Photo Would Go Here</p> */}
          <img src={pic} alt="Our Team" className="max-w-full " />
          {/* You could replace this with: <img src="/your-team-image.jpg" alt="Our Team" className="max-w-full max-h-full" /> */}
        </div>
      </div>
      
      {/* Team Description Section */}
      <div className="w-full bg-blue-400 p-6 rounded-md">
        <div className="text-white">
        
          <p className="mb-4">
            We are students of Fraser Valley India situated in SD College, Sector 32, Chandigarh. This is a company led by students under the Student Company Program led by our college.
          </p>
          
          {/* <h3 className="text-xl font-medium mb-2">About SCP</h3>
          <p>
            SCP stands for [Your Company Name] and represents our commitment to 
            excellence, innovation, and customer satisfaction. We specialize in 
            [your company's specialty] and pride ourselves on [your company values].
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;