import React from 'react';

const SingleChef = ({singleData}) => {
    console.log(singleData);
    const {name, img, experience, recipe, likes} = singleData;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className='w-72 h-64' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Experience: {experience} year</p>
    <div className='flex items-center gap-20'>
        <h6>Total Recipe:{recipe}</h6>
        <p>Likes: {likes}</p>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">View Recipes</button>
    </div>
  </div>
</div>
    );
};

export default SingleChef;