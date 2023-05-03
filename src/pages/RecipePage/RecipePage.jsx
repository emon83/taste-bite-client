import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from '../Home/SingleChef/SingleChef';

const RecipePage = () => {
    const chefData = useLoaderData();
    //console.log(chefData);
    return (
        <div className="mx-20 lg:mx-40 my-10">
           <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {chefData &&
                chefData.map(singleData =><SingleChef key={singleData.id} singleData={singleData}></SingleChef>)
            }
           </div>
        </div>
    );
};

export default RecipePage;