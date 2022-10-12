import React from 'react';
import contact from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${contact})`
        }} className='flex justify-center items-center'>
            <div className='py-28 '>
                <h4 className='text-primary'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
                <form action="">
                    <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs mt-5 flex" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mt-5 flex" />
                    <textarea className="textarea w-full mt-5 py-10" placeholder="Your Message"></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>

            </div>



        </section>
    );
};

export default Contact;