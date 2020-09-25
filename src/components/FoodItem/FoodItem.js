import React from 'react';
import { useHistory } from 'react-router-dom';

const FoodItem = ({item}) => {
    const {name, price, picture, category} = item;
    let history = useHistory();
    const handleSelectFood = () => {
        history.push(`/${category}/${name}`)
    }
    return (
            <div onClick={handleSelectFood} className='m-3 text-center col-sm-3 d-flex flex-column'>
                <div className=' p-3 rounded-lg item text-body'>
                    <img className='w-50 py-3' src={picture} alt=""/>
                    <h6>{name}</h6>
                    <p><small>How we dream about our future</small></p>
                    <h5>${price}</h5>
                </div>
            </div>
            )
};

export default FoodItem;