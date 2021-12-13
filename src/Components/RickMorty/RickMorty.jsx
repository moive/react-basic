import React, { useState } from 'react';
import FormRickyAndMorty from './FormRickyAndMorty'
import DrawingData from './DrawingData'


const RickAndMorty = () => {

    const [characterName, setCharacterName] = useState('')

    return (
        <div className='container my-5'>
            <FormRickyAndMorty setCharacterName={setCharacterName} />
            <DrawingData characterName={characterName}/>
        </div>
    )
}

export default RickAndMorty
