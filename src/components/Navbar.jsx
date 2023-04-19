import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-dark">
            <div className="d-flex justify-content-between">
                <img className='bg-light' height='100em' src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="" />
                <div className='justify-content-center my-4'>
                    <Link to={'/'} className="btn btn-primary">Home</Link>
                    <Link to={'/films'} className="btn btn-primary ms-1">Films</Link>
                    <Link to={'/people'} className="btn btn-primary m-1">People</Link>
                    <Link to={'/locations'} className='btn btn-primary'>Locations</Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar;