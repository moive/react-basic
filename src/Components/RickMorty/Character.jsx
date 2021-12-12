import React from 'react';

const Character = ({character}) => {
    
    const {name, species, image} = character;

    return (
        <div className='col-md-4 mb-4'>
            <div className="card">
                <img
                    src={image}
                    alt={`image ${image}`}
                    className='card-img-top'
                />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>{species}</p>
                </div>
            </div>
        </div>
    )
}

export default Character
