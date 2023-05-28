import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/Header/AppHeader';
import AppGGalery from './components/GGalery/AppGGalery';
import AppAboutMusic from './components/AboutMusic/AppAboutMusic';
import AppEventSchedule from './components/EventSchedule/AppEventSchedule';
import AppOurSponsors from './components/OurSponsors/AppOurSponsors';
import AppTestimonials from './components/Testimonials/AppTestimonials';
import AppShots from './components/Shots/AppShots';
import AppContactUs from './components/ContactUs/AppContactUs';
import AppCarousel from './components/carousel/AppCarousel';
import AppTest from './components/Test/AppTest';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHeader/>
    <AppGGalery/>
    <AppAboutMusic/>
    <AppEventSchedule/>
    <AppOurSponsors/>
    <AppTestimonials/>
    <AppShots/>
    <AppContactUs/>
    {/* <AppCarousel/> */}
    {/* <AppTest/> */}

  </React.StrictMode>
);
