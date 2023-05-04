import React from 'react';
import './SingleAboutUs.css'

const SingleAboutUs = ({singleData}) => {
    //console.log(singleData);
    const {picture, name, designation,description} = singleData;
    return (
        <div className='mt-20 about-container'>
            <h2 className='text-2xl font-semibold about-name my-2'>{name}</h2>
            <h6 className='text-gray-700 italic mb-8'>{designation}</h6>
            <div className='md:flex gap-10'>
            <div>
                <img className='about-img md:mt-7' src={picture} alt="" />
            </div>
            <div className='about-me mt-6'>
                {description.map(sd => <p className='mb-4 text-gray-700' key={sd.id}>{sd.details}</p>)}
            </div>
            </div>
        </div>
    );
};

export default SingleAboutUs;