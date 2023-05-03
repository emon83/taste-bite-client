import React from 'react';
import img from '../../../images/hero_element_2 (1).png'
import './NewsLatterSection.css'

const NewsLatterSection = () => {
    return (
        <div className='mt-16 sm:mt-40 sm:mb-20 bg-white'>
            <div className='flex items-center w-full'>
                <img className='mx-auto w-8' src={img} alt="" />
            </div>
            <p className='text-center my-1 font-semibold'>NEWLETTER</p>
            <h1 className='news-title text-3xl sm:text-5xl font-extrabold text-center my-4'>Enter your email address and get <br /> regular update from us.</h1>
            <div className='news-email flex items-center gap-2'>
                <input className='email-input' type="email"  placeholder='Email Address'/>
                <button className="btn btn-outline">NOTIFY ME</button>
            </div>
        </div>
    );
};

export default NewsLatterSection;