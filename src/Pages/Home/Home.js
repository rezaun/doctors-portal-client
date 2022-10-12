import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import DentalCare from './DentalCare';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>            
            <Banner/>
            <Info/>
            <Services/>
            <DentalCare/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;