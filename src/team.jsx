import React from "react";
import Guransh from './assets/Guransh.jpg';
import Rohit from './assets/Rohit.jpg';
import Parneet from './assets/Parneet.jpg';
import Sankalp from './assets/Sankalp.jpg';
import Harshit from './assets/Harshit.jpeg';
import Mehul from './assets/Mehul.jpg';
import Kuvam from './assets/Kuvam.jpg'

const Team = () => {
  // Sample data for team members with 3 additional members
  const teamMembers = [
    {
      name: "Kuvam Chanana",
      role: "Board of Director",
      image: Kuvam,
      profile: "https://in.linkedin.com/in/kuvam-chanana-056815243"
    },
    {
      name: "Toshit Dawar",
      role: "Board of Director",
      image: "https://www.tailwindtap.com/assets/components/team-component/expert-team/coo.jpg",
      profile: "https://example.com/william-cooper"
    },
    {
      name: "Vrinda Sharma",
      role: "CEO",
      image: "https://www.tailwindtap.com/assets/components/team-component/expert-team/founder.jpg",
      profile: "https://www.linkedin.com/in/vrinda-sharma-127b22291"
    },
    {
      name: "Sankalp Sharma",
      role: "Production and Inventory Manager",
      image: Sankalp,
      profile: "https://in.linkedin.com/in/sankalps2205"
    },
    {
      name: "Harshit Saini",
      role: "Corporate Affairs Manager",
      image: Harshit,
      profile: "https://www.linkedin.com/in/harshitsaini001/"
    },
    {
      name: "Rohit Kumar",
      role: "Marketting and Sales Manager",
      image: Rohit,
      profile: "https://www.linkedin.com/in/rohit-kumar-679959312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Guransh Kataria",
      role: "Human Resources and Public Relations Manager",
      image: Guransh,
      profile: "https://www.linkedin.com/in/guransh-kataria-7914182b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Mehul Singla",
      role: "Digital Media and Web Co-ordinator",
      image: Mehul,
      profile: "linkedin.com/in/mehul-singla-395a6a288"
    },
    {
      name: "Manmeet Chhabra",
      role: "Accounts & Production Associate",
      image: "https://www.tailwindtap.com/assets/components/team-component/expert-team/hr.jpg",
      profile: "https://www.linkedin.com/in/manmeet-chhabra-13mc?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    // Adding 3 more team members
    {
      name: "Gurpahul Kaur",
      role: "Production & Packaging Associate",
      image: "https://www.tailwindtap.com/assets/components/team-component/expert-team/project-manager.jpg", // Reusing image as placeholder
      profile: "https://www.linkedin.com/in/gurpahul-kaur-725055335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Lavanaya Jindal",
      role: "Digital and Print Marketting Associate",
      image: "https://www.tailwindtap.com/assets/components/team-component/expert-team/coo.jpg", // Reusing image as placeholder
      profile: "https://example.com/sophia-garcia"
    },
    {
      name: "Parneet Kaur",
      role: "Research & Development Specialist",
      image: Parneet, // Reusing image as placeholder
      profile: "https://www.linkedin.com/in/parneet-kaur-ba7496287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <>
      {/* Adding a fixed header that stays in place */}
      {/* <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Company Name</h1>
        </div>
      </header> */}

      {/* Add margin top to ensure content doesn't hide under the header */}
      <div className="pt-0">
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Meet Our Team
              </h2>
              <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Meet the team individuals who are working hard to make this successful. Click on the person to open their LinkedIn.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <a 
                  key={index} 
                  href={member.profile} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white rounded-lg transition duration-300 transform hover:shadow-xl hover:-translate-y-1"
                >
                  <img
                    className="object-cover rounded-lg w-40 h-40"
                    src={member.image}
                    alt={member.name}
                  />
                  <p className="mt-6 text-xl font-semibold leading-tight text-black">
                    {member.name}
                  </p>
                  <p className="mt-2 text-base leading-tight text-gray-600">
                    {member.role}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;