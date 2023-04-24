import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-dark">
            <div className="d-flex justify-content-between">
                <img className='bg-light' height='100em' src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="" />
                <div className='justify-content-center my-4'>
                    <NavLink to={'/'} className="btn btn-primary">Home</NavLink>
                    <NavLink to={'/films'} className="btn btn-primary ms-1">Films</NavLink>
                    <NavLink to={'/people'} className="btn btn-primary m-1">People</NavLink>
                    <NavLink to={'/locations'} className='btn btn-primary'>Locations</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar;