import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeList = ({singleRecipe}) => {
    const [btnDisabled, setBtnDisabled] = useState(false);

    const handleAddFavorite = (event) => {
        toast('You added favorite recipe')
        setBtnDisabled(true);;
    }
    //console.log(singleRecipe);
    const {name, img, ingredients, method, ratings} = singleRecipe;
    return (
        <div className='p-6'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <h6>Ingredients: </h6>
            {ingredients && ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            <p>Method: {method}</p>
            <p>Ratings: {ratings}</p>
            <button onClick={handleAddFavorite} className="btn btn-ghost my-3 btn-sm" disabled={btnDisabled}>Add Favorite</button>
            <ToastContainer/>
        </div>
    );
};

export default RecipeList;