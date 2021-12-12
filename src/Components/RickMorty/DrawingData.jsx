import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Character from './Character';
import Loading from './Loading';

const DrawingData = ({characterName}) => {

    const [characters, setCharacters] = useState([]);

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        useApi(characterName)
        // console.log(characterName)
    },[characterName]);

    const useApi = async (name)=> {
        try {
            
            setLoading(true);

            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=alive`);
            const data = await res.json();
            setCharacters(data.results === undefined ? [] : data.results);
            console.log(characters)
            if(!res.ok){
                Swal.fire({
                    title:'Error!',
                    text: `'${name}' does not exist`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    
    if (loading) {
        return <Loading/>;
    }

    return (
        <div className='row my-5'>
            <h2>Lists</h2>
            { 
                characters.map((item)=>(
                    <Character key={item.id} character={item} />
                ))
            }
        </div>
    )
}

export default DrawingData
