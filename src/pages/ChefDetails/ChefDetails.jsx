import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeList from "../RecipeList/RecipeList";
import { HeartIcon } from '@heroicons/react/24/solid'
import './ChefDetails.css'

const ChefDetails = () => {
  const data = useLoaderData();
  //console.log(data);
  const {id, name, img, about, likes, recipe, experience, recipeList } = data;
  return (
    <div className="mx-4 sm:mx-20 lg:mx-40 my-10">
      <div className="card lg:card-side bg-base-100">
        <figure>
          <img  className="card-img"/* style={{ width: "550px" }} */ src={img} alt="Album" />
        </figure>
        <div className="card-body" /* style={{ width: "550px" }} */>
          <h2 className="card-title text-3xl mb-6">{name}</h2>
          <p className="chef-bio"><span className="font-bold">Chef Bio: </span><span className="text-gray-600">{about}</span></p>
          <p className="my-3"><span className="font-bold">Experience:</span> {experience} years</p>
            <p><span className="font-bold">Total Recipe: </span>{recipe}</p>
            <div className="flex items-center">
            <HeartIcon className="h-6 w-6 text-red-500"/>
            <p>{likes} Likes</p>
            </div>
        </div>
      </div>
      <h4 className="text-3xl font-semibold text-center mt-16 lg:mt-28 mb-6 recipe-title">{name} Most Popular Recipe</h4>
        <div className="lg:grid grid-cols-2 gap-8">
        {
        recipeList.map(singleRecipe=> <RecipeList
         key={singleRecipe.id} singleRecipe={singleRecipe}
         ></RecipeList>)
      }
        </div>
    </div>
  );
};

export default ChefDetails;
