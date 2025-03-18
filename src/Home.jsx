import React from 'react';
import Testimonials from './testimonal'
import HeroSection from './hero';
import FeatureCards from './aboutproduct';
import TeamComponent from './aboutus';
import Team from './team';
import Bestseller from './Bestseller';
import CustomerStats from './number';
import UpcomingEvents from './event';

function Home() {
  return (
    
    <div className=''>
       <HeroSection></HeroSection>
       <FeatureCards></FeatureCards>
       <TeamComponent></TeamComponent>
       <Team></Team>
       <Bestseller></Bestseller>
       <CustomerStats></CustomerStats>
       <Testimonials></Testimonials>
       <UpcomingEvents></UpcomingEvents>

    </div>
  )
}

export default Home;