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
/* 
<img src="https://i.ibb.co/WWvpTgn/americian-food.jpg" alt="americian-food" border="0">
<img src="https://i.ibb.co/yFDWp6H/chinese-food.jpg" alt="chinese-food" border="0">
<img src="https://i.ibb.co/PFFxgwt/indian-food.jpg" alt="indian-food" border="0">
<img src="https://i.ibb.co/64KQ3J0/itilian-food.jpg" alt="itilian-food" border="0">
<img src="https://i.ibb.co/CKyLrY8/japan-food.jpg" alt="japan-food" border="0">
<img src="https://i.ibb.co/TYHL1FY/Panta-Ilish.jpg" alt="Panta-Ilish" border="0">
<img src="https://i.ibb.co/k1CRCdB/thai-food.jpg" alt="thai-food" border="0">

*/