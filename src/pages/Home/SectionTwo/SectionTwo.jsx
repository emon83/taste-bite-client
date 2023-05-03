import React, { useEffect, useState } from 'react';
import SingleSectionTwo from '../SingleSectionTwo/SingleSectionTwo';

const SectionTwo = () => {
    const [sectionData2, setSectionData2] = useState('');

    useEffect(()=> {
        fetch('https://tastebite-chef-recipe-hunter-server-emon83.vercel.app/sectionData2')
        .then(response => response.json())
        .then(data => setSectionData2(data))
    }, [])
    //console.log(sectionData2);
    return (
        <div className='my-40'>
            <h2 className='text-3xl font-bold my-8'>What's New</h2>
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