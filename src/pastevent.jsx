import React from 'react';

const Events = () => {
  // Sample event data
  const events = [
    {
      id: 1,
      name: "Company Launch",
      date: "March 4",
      location: "Student Lounge, Fraser Valley India, SD College, Sector 32, Chandigarh",
      image: "https://www.shutterstock.com/image-photo/rocket-takes-off-hand-businessman-600nw-656140039.jpg"
    },
    {
      id: 2,
      name: "TEDx Event",
      date: "March 5",
      location: "SD College Ground, Sector 32, Chandigarh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMgg2oIwy96Mjm0EibUrW7Y2y-2L63Q5z_A&s"
    }
  ];

  return (
    <div className="bg-blue-50 p-8 w-full min-w-full">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Past Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full px-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <div key={event.id} className="bg-blue-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 w-full max-w-xs mx-auto">
            
            {/* Image Section */}
            <div className="w-full h-40 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3 flex w-full">
              <div className="bg-blue-800 text-white p-2 mr-3 rounded flex flex-col items-center justify-center min-w-16">
                <span className="text-xs">Date</span>
                <span className="font-bold text-sm">{event.date}</span>
              </div>
              
              <div className="text-white">
                <h3 className="text-lg font-bold mb-1">{event.name}</h3>
                <p className="text-blue-100 text-sm">{event.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
