import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='banner d-flex flex-column justify-content-center align-items-center'>
            <h2>Best food waiting for your belly</h2>
            <div className="input-group pt-2 w-25">
                <input type="text" className="form-control" placeholder="Search food items" aria-label="Search food items" aria-describedby="button-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-danger " type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;