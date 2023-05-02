import React from 'react';

const RecipeList = ({singleRecipe}) => {
    console.log(singleRecipe);
    const {name, img, ingredients, method, ratings} = singleRecipe;
    return (
        <div className='p-6'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <h6>Ingredients: </h6>
            {ingredients && ingredients.map((ingredient) => <li>{ingredient}</li>)}
            <p>Method: {method}</p>
            <p>Ratings: {ratings}</p>
            <button className="btn btn-ghost my-3 btn-sm">Add Favorite</button>
        </div>
    );
};

export default RecipeList;