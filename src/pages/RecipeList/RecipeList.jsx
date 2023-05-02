import React from 'react';

const RecipeList = ({singleRecipe}) => {
    console.log(singleRecipe);
    const {name, img, ingredients, method, ratings} = singleRecipe;
    return (
        <div className='mt-6'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <h6>Ingredients: </h6>
            {ingredients && ingredients.map((ingredient) => <li>{ingredient}</li>)}
            <p>Method: {method}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default RecipeList;