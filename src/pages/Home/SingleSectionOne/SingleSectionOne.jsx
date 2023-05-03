import React from 'react';

const SingleSectionOne = ({singleSection}) => {
    //console.log(singleSection);
    const {image, name, description, rating} = singleSection;
    return (
        <div>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    );
};

export default SingleSectionOne;