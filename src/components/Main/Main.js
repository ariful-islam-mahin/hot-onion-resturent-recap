import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import FoodItem from '../FoodItem/FoodItem';
import FoodItemNav from '../FoodItemNav/FoodItemNav';

const Main = () => {
    const [item, setItem] = useState([])
    const handleSelectItem = (category) => {
        const selectedItem = fakeData.filter(item => item.category === category)
        setItem(selectedItem)
    };
    return (
        <div>
            <FoodItemNav handleSelectItem={handleSelectItem}></FoodItemNav>
            <div className='row d-flex justify-content-between mx-4'>
              {
                  item.map(item => <FoodItem item={item} ></FoodItem>)
              }
            </div>
        </div>
    );
};

export default Main;