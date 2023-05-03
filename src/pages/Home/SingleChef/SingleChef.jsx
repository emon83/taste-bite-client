import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import "./SingleChef.css";
import { HeartIcon } from '@heroicons/react/24/solid'

const SingleChef = ({ singleData }) => {
  const { id, name, img, experience, recipe, likes } = singleData;
  //console.log(singleData);
  return (
    <div className="card w-full bg-base-100 my-6 lg:my-0">
      <LazyLoad height={262} threshold={0.95}>
        <figure>
          <img className="md:w-72 h-56 md:h-64" src={img} alt="chef" />
        </figure>
      </LazyLoad>
      <div className="md:card-body text-center">
        <h2 className="card_title text-xl font-semibold mb-3">{name}</h2>
        <p><span className="font-semibold">Experience: </span><span className="text-gray-800 my-4">{experience} year</span></p>
        <div className="sm:flex items-center mx-auto gap-4 my-2">
          <h6><span className="font-semibold">Total Recipe:</span>{recipe}</h6>
          <div className="flex items-center justify-center">
          <HeartIcon className="h-6 w-6 text-red-500"/>
          <p>{likes} Likes</p>
          </div>
        </div>
        <div className="mt-6">
          <Link to={`/recipePage/${id}`}>
            <button className="btn btn-outline w-full btn-sm">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
