import React, { useEffect, useState } from 'react'



const Form = () => {
    
    const handleSubmit = e=>{
        e.preventDefault();
        console.log(todo)
    }

    const [todo, setTodo] = useState({
        todoName:'',
        todoDescription:'',
        todoState:'pending',
        todoCheck: false
    });

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
        setIsDisabled(todo.todoName !== '' && todo.todoDescription !== '' && todo.todoCheck);
        // console.log(isDisabled)
    },[todo])


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
                    disabled={!isDisabled}
                >
                    Add
                </button>
            </form>  
        </>
    )
}

export default Form
