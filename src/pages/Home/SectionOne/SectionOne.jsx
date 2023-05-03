import React, { useEffect, useState } from 'react';
import SingleSectionOne from '../SingleSectionOne/SingleSectionOne';

const SectionOne = () => {
    const [sectionData, setSectionData] = useState('');

    useEffect(()=> {
        fetch('https://tastebite-chef-recipe-hunter-server-emon83.vercel.app/sectionData1')
        .then(response => response.json())
        .then(data => setSectionData(data))
    }, [])
    return (
        <>
        <h2 className='text-3xl font-bold mt-40'>Explore Latest Recipe</h2>
        <div className='grid lg:grid-cols-4 gap-8 mt-8'>
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