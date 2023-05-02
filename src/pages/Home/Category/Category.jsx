import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {
    const [categoryData, setCategoryData] = useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/allData')
        .then(response=> response.json())
        .then(data => setCategoryData(data))
    }, [])
    //console.log(categoryData);
    return (
        <div className='my-20'>
            <h2 className='text-2xl font-bold my-8'>Hand-Picked Collection</h2>
           <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
           {
            categoryData &&
                categoryData.map(singleData => <SingleCategory
                key={singleData._id}
                singleData={singleData}
                ></SingleCategory>)
            }
           </div>
        </div>
    );
};

export default Category;