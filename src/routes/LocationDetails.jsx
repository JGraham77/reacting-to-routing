import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LocationDetails = () => {
    const { locationid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/locations/${locationid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message));
    }, [locationid]);

    return (
        <div className="col-12 col-md-6">
            <div className="card shadow-lg my-2">
                <div className="card-body">
                    <h3 className="card-title text-center">{details?.name}</h3>
                    <hr style={{ background: 'black' }} />
                    <p className="card-text text-center"><span className='font-weight-bold'>Climate:</span> {details?.climate}</p>
                    <hr />
                    <p className="card-text text-center"><span className='font-weight-bold'>Terrain:</span> {details?.terrain}</p>
                    <a href={`${details?.url}`} target='_blank' className='btn btn-info'>API Resource Link</a>
                </div>
            </div>
        </div>
    )
}



export default LocationDetails;