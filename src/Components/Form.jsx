import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';
import { useForm } from '../hooks/useForm';


const Form = ({addTodo}) => {
    
    const initialState = {
        name:'',
        description:'',
        status:'pending',
        priority: false
    }

    const [inputs, handleChange, reset, customizeError] = useForm(initialState);

    const {name, description, status, priority} = inputs;

    const handleSubmit = e=>{
        e.preventDefault();
        
        if (!name.trim()) {
            return customizeError(e, 'name');
        }
        if (!description.trim()) {
            return customizeError(e, 'description');
        }
        if (!priority) {
            return customizeError(e, 'priority')
        }
        
        Swal.fire({
            title:'Éxito!',
            text: 'successful registration',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        addTodo({
            name:name,
            description: description,
            status: status === 'pending' ? false : true,
            priority: priority,
            id: uuid()
        })

        // console.log(inputs)

        reset(initialState);
    };

    const [isDisabled, setIsDisabled] = useState(true)

    //

    useEffect(() => {
        setIsDisabled(name.trim() && description.trim() && priority);
        // console.log(isDisabled)
    },[inputs])


    return (
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter todo name"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={name}
                />
                <textarea
                    name="description"
                    placeholder="Enter todo description"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={description}
                />
                <select
                    name="status"
                    className="form-select mb-2"
                    onChange={handleChange}
                    value={status}
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
                <div className="form-check mb-2">
                    <input
                        name="priority"
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        checked={priority}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Giving priority
                    </label>
                </div>
                <button
                    className="btn btn-success mt-3"
                    type="submit"
                    // disabled={!isDisabled}
                >
                    Add
                </button>
            </form>  
        </>
    )
}

export default Form
