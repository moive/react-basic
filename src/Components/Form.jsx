import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const customizeError = (e, name)=>{
    e.target[name].focus();
    return Swal.fire({
        title: 'Error!',
        text: `The ${name === 'priority' ? 'checkbox' : 'field'} ${name} is required`,
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}

const Form = () => {
    
    const handleSubmit = e=>{
        e.preventDefault();
        
        if (!todo.name.trim()) {
            return customizeError(e, 'name');
        }
        if (!todo.description.trim()) {
            return customizeError(e, 'description');
        }
        if (!todo.priority) {
            return customizeError(e, 'priority')
        }
        
        console.log(todo)
    };

    const initialState = {
        name:'',
        description:'',
        status:'pending',
        priority: false
    }

    const [todo, setTodo] = useState(initialState);

    const [isDisabled, setIsDisabled] = useState(true)

    const handleChange = e=>{
        const {name, value, checked, type} = e.target;
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })

        // setTodo((old)=>({
        //     ...old,
        //     [e.target.name]: e.target.value
        // }));
    }

    useEffect(() => {
        setIsDisabled(todo.name.trim() && todo.description.trim() && todo.priority);
        // console.log(isDisabled)
    },[todo])


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
                />
                <textarea
                    name="description"
                    placeholder="Enter todo description"
                    className="form-control mb-2"
                    onChange={handleChange}
                />
                <select
                    name="status"
                    className="form-select mb-2"
                    onChange={handleChange}
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
                        checked={todo.priority}
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
