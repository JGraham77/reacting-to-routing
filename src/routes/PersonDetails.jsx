import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const PersonDetails = () => {
    const { personid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/people/${personid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message));
    }, [personid]);

    return (
        <div className="col-12 col-md-6">
            <div style={{ background: '#aaaaaa' }} className="card shadow-lg my-2">
                <div className="card-body">
                    <h4 className="card-title text-center">{details?.name}</h4>
                    <hr style={{ background: 'black' }} />
                    <p className="card-text">Age: {details?.age}</p>
                    <p className="card-text">Gender: {details?.gender}</p>
                    <p className="card-text">Eye Color: <span style={{ color: `${details?.eye_color}` }}>{details?.eye_color}</span></p>
                    <p className="card-text">Hair Color: <span style={{ color: `${details?.hair_color}` }}>{details?.hair_color}</span></p>
                    <a href={`${details?.url}`} target='_blank' className='btn btn-info'>API Resource Link</a>
                </div>
            </div>
        </div>
    )
}

export default PersonDetails;