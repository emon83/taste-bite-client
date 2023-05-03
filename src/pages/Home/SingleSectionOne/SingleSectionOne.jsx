import React from 'react';
import './SingleSectionOne.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import './SingleSectionOne.css'

const SingleSectionOne = ({singleSection}) => {
    //console.log(singleSection);
    const {image, name, description, rating} = singleSection;
    return (
        <div className='category_card relative'>
            <img className='rounded-sm lg:h-48' src={image} alt="" />
            <h4 className='cart_title text-xl font-semibold my-3'>{name}</h4>
            <p className='text-gray-500'>{description}</p>
            <div className='rating-container absolute flex items-center bottom-0'>
                <Rating style={{ maxWidth: 100 }} value={Math.round(rating?.number || 5)} readOnly />
                <p className='ml-2 text-gray-500'>
                    <small>{rating} Ratings</small>
                </p>
            </div>
        </div>
    );
};

export default SingleSectionOne;