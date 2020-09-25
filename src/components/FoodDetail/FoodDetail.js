import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const FoodDetail = () => {
    const {foodName} = useParams();
    const foodDetails = fakeData.find(data => data.name === foodName);
    const {name, price, picture} = foodDetails
    return (
        <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-sm-4">
                <h2>{name}</h2>
                <p><small> Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye</small></p>
                <h3>${price}</h3>
                <Link to='/checkout' className='btn btn-danger rounded-pill px-4 mt-4'><FontAwesomeIcon  icon={faShoppingCart} /> Add</Link>
            </div>
            <div className="col-sm-4">
                <img className='w-100' src={picture} alt=""/>
            </div>
        </div>
    );
};

export default FoodDetail;