import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms));
    }, []);

    return (
        <div className='col-12 col-md-6 m-2'>
            <ul className="list-group shadow-lg">
                {films.map(film => (
                    <li key={`${film.id}`} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{film.title}</span>
                        <Link to={`/films/${film.id}`} className='btn btn-outline-primary'>Full Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Films;