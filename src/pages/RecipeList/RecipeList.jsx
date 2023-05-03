import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'

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
            <img src={img} alt="" />
            <h4 className='recipe-title text-2xl font-semibold my-2'>{name}</h4>
            <h6 className='font-semibold'>Ingredients: </h6>
            {ingredients && ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            <p className='my-4'><span className='font-semibold'>Method:</span> {method}</p>
            <div className='flex items-center'>
            <Rating style={{ maxWidth: 100 }} value={Math.round(ratings?.number || 5)} readOnly />
            <small>{ratings} Ratings</small>
            </div>
            <button onClick={handleAddFavorite} className="btn btn-ghost my-3 btn-sm" disabled={btnDisabled}>Add Favorite</button>
            <ToastContainer/>
        </div>
    );
};

export default RecipeList;