import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeList from "../RecipeList/RecipeList";

const ChefDetails = () => {
  const data = useLoaderData();
  //console.log(data);
  const {id, name, img, about, likes, recipe, experience, recipeList } = data;
  return (
    <div className="mx-20 lg:mx-40 my-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img style={{ width: "550px" }} src={img} alt="Album" />
        </figure>
        <div className="card-body" style={{ width: "550px" }}>
          <h2 className="card-title">{name}</h2>
          <p>{about}</p>
          <p className="my-3">Experience: {experience} years</p>
          <div className="flex gap-10">
            <p>Total Recipe: {recipe}</p>
            <p>Likes: {likes}</p>
          </div>
        </div>
      </div>
      <h4 className="text-xl font-semibold text-center mt-10">View Recipe</h4>
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
