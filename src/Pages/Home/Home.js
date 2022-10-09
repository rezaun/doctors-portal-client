import React from 'react';
import Banner from './Banner';
import DentalCare from './DentalCare';
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
        </div>
    );
};

export default Home;