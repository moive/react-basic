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

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todoName"
                    placeholder="Enter todo name"
                    className="form-control mb-2"
                    onChange={e=> setTodo({...todo, todoName:e.target.value})}
                />
                <textarea
                    name="todoDescription"
                    placeholder="Enter todo description"
                    className="form-control mb-2"
                    onChange={e=> setTodo({...todo, todoDescription:e.target.value})}
                />
                <select
                    name="todoState"
                    className="form-select mb-2"
                    onChange={e=> setTodo({...todo, todoState: e.target.value})}
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
