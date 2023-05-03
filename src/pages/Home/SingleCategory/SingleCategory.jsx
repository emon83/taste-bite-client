import React from 'react';
import './SingleCategory.css'
import { Link } from 'react-router-dom';

const SingleCategory = ({singleData}) => {
    //console.log(singleData);
    const {_id, country, food_img} = singleData;
    return (
        <div className='category-card mt-3'>
            <img className='w-72 h-48 rounded-md' src={food_img} alt="" />
            <h4 className='text-lg sm:text-xl font-semibold card_title -mt-10 text-white ml-20 sm:ml-10'><Link to='/recipePage'>{country} Food</Link></h4>
        </div>
    );
};

export default SingleCategory;