import React, { useEffect, useState } from 'react';
import SingleSectionTwo from '../SingleSectionTwo/SingleSectionTwo';
import './SectionTwo.css'


const SectionTwo = () => {
    const [sectionData2, setSectionData2] = useState('');

    useEffect(()=> {
        fetch('https://tastebite-chef-recipe-hunter-server-emon83.vercel.app/sectionData2')
        .then(response => response.json())
        .then(data => setSectionData2(data))
    }, [])
    //console.log(sectionData2);
    return (
        <div className='my-16 sm:my-28'>
            <h2 className='new-title text-2xl sm:text-3xl font-bold sm:my-6 text-center sm:text-start'>What's New</h2>
            {
            sectionData2 &&
                sectionData2.map(sectionTwo => <SingleSectionTwo
                key={sectionTwo._id}
                sectionTwo={sectionTwo}
                ></SingleSectionTwo>)
            }
        </div>
    );
};

export default SectionTwo;