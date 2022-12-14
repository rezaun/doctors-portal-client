import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
           <InfoCard cardTitle="Opening Hours" description="Description For One" img={clock} bgclass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
           <InfoCard cardTitle="Our Locations" description="Description For Two" img={marker} bgclass="bg-[#3A4256]"></InfoCard>
           <InfoCard cardTitle="Contact Us" description="Description For Three" img={phone} bgclass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;