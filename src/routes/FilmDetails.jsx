import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const FilmDetails = () => {
    const { filmid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message));
    }, [filmid]);

    return (
        <div className="col-12 col-md-6">
            <div className="card shadow-lg my-2">
                <div className="card-body">
                    <h4 className="card-title text-center">{details?.title}</h4>
                    <hr style={{ background: '#aaaaaa' }} />
                    <p className="card-text text-center"><span className='font-weight-bold'>Description:</span> {details?.description}</p>
                    <a href={`${details?.url}`} target='_blank' className='btn btn-info'>API Resource Link</a>
                </div>
            </div>
        </div>
    )
}

export default FilmDetails;