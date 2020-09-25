import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../logo2.png'

const Navbar = () => {
    return (
        <div className='row d-flex justify-content-between align-items-center mx-3 py-3'>
            <div className='icon col-2'>
                <img className='w-100' src={logo} alt=""/>
            </div>
            <div className=' col-6 d-flex justify-content-end align-items-center'>
                <FontAwesomeIcon  icon={faShoppingCart} />
                <Link to='/login' className='btn'>Login</Link>
                <button className='btn btn-danger rounded-pill'>Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;