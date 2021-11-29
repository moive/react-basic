import React, { useState } from 'react'


const handleSubmit = e=>{
    e.preventDefault();
}

const FormControllable = () => {

    const [todo, setTodo] = useState({
        todoName:'',
        todoDescription:'',
        todoState:'pending',
        todoCheck: false
    });

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
                <div className="form-check mb-2">
                    <input
                        name="todoCheck"
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        checked={todo.todoCheck}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Giving priority
                    </label>
                </div>
                <button
                    className="btn btn-success mt-3"
                    type="submit"
                >
                    Add
                </button>
            </form>  
        </>
    )
}

export default FormControllable
