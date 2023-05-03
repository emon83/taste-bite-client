import React from "react";
import './SingleSectionTwo.css'

const SingleSectionTwo = ({ sectionTwo }) => {
  //console.log(sectionTwo);
  const { img, day, title, author, description } = sectionTwo;
  return (
    <div>
      <div className="lg:flex items-center bg-base-100 my-6 gap-6 rounded-lg">
        <div className="card_body">
          <p className="text-sm mb-0 font-semibold my-3">{day}</p>
          <h2 className="card-title text-3xl font-semibold mt-2 mb-6">{title}</h2>
          <p className="font-semibold text-black">{author}</p>
          <p className="my-3 text-gray-600">{description}</p>
        </div>
        <div>
          <img className="card-image" src={img} alt="Album" />
        </div>
      </div>
    </div>
  );
};

export default SingleSectionTwo;
