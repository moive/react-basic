import { useState } from "react"
import Swal from 'sweetalert2';

export const useForm = (initialState={}) => {
    const customizeError = (e, name, title='Error!')=>{
        e.target[name].focus();
        return Swal.fire({
            title,
            text: `The ${name === 'priority' ? 'checkbox' : 'field'} ${name} is required`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }

    const [inputs, setInputs] = useState(initialState);

    const handleChange = e=>{
        const {name, value, checked, type} = e.target;
        setInputs({
            ...inputs,
            [name]: type === 'checkbox' ? checked : value
        })

        // setTodo((old)=>({
        //     ...old,
        //     [e.target.name]: e.target.value
        // }));
    }

    const reset = ()=>{
        setInputs(initialState);
    }

    return [inputs, handleChange, reset, customizeError]
}
