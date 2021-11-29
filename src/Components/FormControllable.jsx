import React, { useState } from 'react'


const handleSubmit = e=>{
    e.preventDefault();
}

const FormControllable = () => {

    const [todo, setTodo] = useState({
        todoName:'',
        todoDescription:'',
        todoState:'pending'
    });

    const handleChange = e=>{
        // setTodo({
        //     ...todo,
        //     [e.target.name]: e.target.value
        // })

        setTodo((old)=>({
            ...old,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todoName"
                    placeholder="Enter todo name"
                    className="form-control mb-2"
                    onChange={handleChange}
                />
                <textarea
                    name="todoDescription"
                    placeholder="Enter todo description"
                    className="form-control mb-2"
                    onChange={handleChange}
                />
                <select
                    name="todoState"
                    className="form-select mb-2"
                    onChange={handleChange}
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
                <button
                    className="btn btn-success"
                    type="submit"
                >
                    Add
                </button>
            </form>  
        </>
    )
}

export default FormControllable
