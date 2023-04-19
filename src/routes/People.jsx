import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople));
    }, []);

    return (
        <div className='col-12 col-md-6 m-2'>
            <ul className="list-group shadow-lg">
                {people.map(person => (
                    <li key={`${person.id}`} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{person.name}</span>
                        <Link to={`/people/${person.id}`} className='btn btn-outline-primary'>Full Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default People;