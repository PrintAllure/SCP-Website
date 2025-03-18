import { useState } from 'react'
import './App.css'
import Navbar from './topbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'flowbite';
import FormRegistration from './signup';
import Footer from './footer';
// import bulkOrder from './bulkOrder';
import Bestseller from './Bestseller';
import Products from './products';
import LoginPage from './login';
import ProductOverview from './productView';
import Team from './team';
import Home from './Home';
import Testimonials from './testimonal'
import HeroSection from './hero';
import ContactForm from './contact';
import CustomerStats from './number';
import Example from './products2';
import UpcomingEvents from './event';
import Events from './pastevent';
import TeamComponent from './aboutus';
import FeatureCards from './aboutproduct';
import EventPage from './eventpage';


function App() {
  const [isLoggedIn,setStatus]=useState(false);
  
  function doUpdateStatus(status)
  {
      setStatus(status);
  }
  return (
    <>

    <BrowserRouter>
    <Navbar></Navbar> 
     
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<FormRegistration></FormRegistration>}></Route>
        <Route path="/bulk" element={<bulkOrder></bulkOrder>}></Route>
        <Route path="/best" element={<Bestseller></Bestseller>}></Route>
        <Route path='/products' element={<Example></Example>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path="/overview" element={<ProductOverview></ProductOverview>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path='/event' element={<UpcomingEvents></UpcomingEvents>}></Route>
        <Route path='/contact' element={<ContactForm></ContactForm>}></Route>
        <Route path="/test" element={<Testimonials></Testimonials>}></Route>
        <Route path="/hero" element={<HeroSection></HeroSection>}></Route>
        <Route path="/number" element={<CustomerStats></CustomerStats>}></Route>
        <Route path="/past" element={<Events></Events>}></Route>
        <Route path="/aboutus" element={<TeamComponent></TeamComponent>}></Route>
        <Route path="/aboutpro" element={<FeatureCards></FeatureCards>}></Route>
        <Route path="/eventpage" element={<EventPage></EventPage>}></Route>
        <Route path="/profilter" element={<Products></Products>}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </>
  )
}

export default App;