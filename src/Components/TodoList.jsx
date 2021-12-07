import React, { useState } from 'react'
import Form from './Form'
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo)=>{
        setTodos((old)=> [...old, todo]);
        console.log("todo", todo)
    };

    const deleteTodo = (id)=>{
        setTodos((old)=>old.filter(item=>item.id !== id));
    };

    return (
        <>
            <Form addTodo={addTodo} />
            <ul className="list-group list-group-numbered mt-3">
                {
                    todos.map(item=>(
                        <Todo
                            key={item.id}
                            todo={item}
                            deleteTodo={deleteTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList
