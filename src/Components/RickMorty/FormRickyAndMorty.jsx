import React from 'react';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';

const FormRickyAndMorty = ({setCharacterName}) => {
    
    const initialState = {
        name:'',
    }

    const [inputs, handleChange, reset, customizeError] = useForm(initialState);

    const {name, description, status, priority} = inputs;

    const handleSubmit = e=>{
        e.preventDefault();
        
        if (!name.trim()) {
            return customizeError(e, 'name');
        }
        // Swal.fire({
        //     title:'Éxito!',
        //     text: 'successful registration',
        //     icon: 'success',
        //     confirmButtonText: 'OK'
        // });

        setCharacterName(name.trim().toLowerCase());

        reset(initialState);
    };

    return (
        <>
            <h2>Rick and Morty</h2>
            <form onSubmit={handleSubmit} className='mt-3'>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    name='name'
                    className="form-control mb-2"
                />
                <button
                    type='submit'
                    className='btn btn-dark'
                >Add</button>
            </form>    
        </>
    )
}

export default FormRickyAndMorty
