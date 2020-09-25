import React from 'react';

const FoodItemNav = ({handleSelectItem}) => {
    return (
        <div className='text-center'>
            <button className="btn" onClick={() => handleSelectItem('breakfast')}>Breakfast</button>
            <button className="btn" onClick={() => handleSelectItem('lunch')}>Lunch</button>
            <button className="btn" onClick={() => handleSelectItem('dinner')}>Dinner</button>
        </div>
    );
};

export default FoodItemNav;