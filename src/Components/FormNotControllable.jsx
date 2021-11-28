import React, { useRef } from 'react'

const FormNotControllable = () => {

    const refForm = useRef(null);


    const handleSubmit = e =>{

        e.preventDefault();

        const data = new FormData(refForm.current);

        // console.log(...data.entries())
        const objData = Object.fromEntries([...data.entries()]);
        console.log(objData)

        const { todoName, todoDescription } = objData;

        if (!todoName.trim()) {
            console.log('todo-name empty')
        }

        if (!todoDescription.trim()) {
            console.log('todo-description empty')
        }



        console.log('done!')
        refForm.current.reset();
    }

    return (
        <form onSubmit={handleSubmit} ref={refForm}>
            <input
                type="text"
                name="todoName"
                placeholder="Enter todo name"
                className="form-control mb-2"
                // defaultValue="Task 1"
            />
            <textarea
                name="todoDescription"
                placeholder="Enter todo description"
                className="form-control mb-2"
                // defaultValue="Description task 1"
            />
            <select
                name="todoState"
                className="form-select mb-2"
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
    )
}

export default FormNotControllable
