import React, { useEffect, useState } from 'react';
import SingleSectionOne from '../SingleSectionOne/SingleSectionOne';
import './SectionOne.css'

const SectionOne = () => {
    const [sectionData, setSectionData] = useState('');

    useEffect(()=> {
        fetch('https://tastebite-chef-recipe-hunter-server-emon83.vercel.app/sectionData1')
        .then(response => response.json())
        .then(data => setSectionData(data))
    }, [])
    return (
        <>
        <h2 className='latest-title text-2xl sm:text-3xl text-center sm:text-start font-bold mt-16 sm:mt-32'>Explore Latest Recipe</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 my-6'>
            {sectionData &&
                sectionData.map(singleSection => <SingleSectionOne
                key={singleSection.id}
                singleSection={singleSection}
                ></SingleSectionOne>)
            }
        </div>
        </>
    );
};

export default SectionOne;