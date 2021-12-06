import React, { useState } from 'react'
import Form from './Form'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo)=>{
        setTodos((old)=> [...old, todo]);
        console.log("todo", todo)
    }

    return (
        <>
            <Form addTodo={addTodo} />
        </>
    )
}

export default TodoList
