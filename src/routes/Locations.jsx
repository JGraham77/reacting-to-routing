import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/locations')
            .then(res => res.json())
            .then(allLocations => setLocations(allLocations));
    }, []);

    return (
        <div className='col-12 col-md-6 m-2'>
            <ul className="list-group shadow-lg">
                {locations.map(location => (
                    <li key={`${location.id}`} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{location.name}</span>
                        <Link to={`/locations/${location.id}`} className='btn btn-outline-primary'>Full Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Locations;