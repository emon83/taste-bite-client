import React from 'react';
import './SingleCategory.css'
import { Link } from 'react-router-dom';

const SingleCategory = ({singleData}) => {
    //console.log(singleData);
    const {_id, country, food_img} = singleData;
    return (
        <div>
            <img className='w-64 h-48 rounded-md' src={food_img} alt="" />
            <h4 className='text-xl font-semibold card_title -mt-10 text-white ml-10'><Link to={`/chefCard/${_id}`}>{country} Food</Link></h4>
        </div>
    );
};

export default SingleCategory;