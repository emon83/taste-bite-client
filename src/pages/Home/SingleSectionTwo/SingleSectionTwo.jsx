import React from 'react';

const SingleSectionTwo = ({sectionTwo}) => {
    //console.log(sectionTwo);
    const {img, day, title, author, description} = sectionTwo;
    return (
        <div>
            <div className="card lg:card-side bg-base-100">
  <div className="card-body">
    <p>{day}</p>
    <h2 className="card-title">{title}</h2>
    <p>{author}</p>
    <p>{description}</p>
  </div>
  <figure><img src={img} alt="Album"/></figure>
</div>
        </div>
    );
};

export default SingleSectionTwo;