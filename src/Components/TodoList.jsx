import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import Form from './Form'
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        let data = localStorage.getItem("todos");
        if(data){
            setTodos(JSON.parse(data));
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos]);

    const addTodo = (todo)=>{
        setTodos((old)=> [...old, todo]);
        console.log("todo", todo)
    };

    const deleteTodo = (id)=>{
        setTodos((old)=>old.filter(item=>item.id !== id));
    };

    const editTodo = (id)=>{
        const edit = todos.map(item => item.id === id ? {...item, status: !item.status} : item);

        setTodos(edit);
    }

    

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
                            editTodo={editTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList
