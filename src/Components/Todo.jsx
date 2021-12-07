import React from 'react'

const Todo = ({todo}) => {
    const {name, description, priority, status} = todo;
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{name} ({status ? 'Finished' : 'Pending'})</div>
                    <p>{description}</p>
                    <div>
                        <div className="btn btn-sm btn-danger me-1">Delete</div>
                        <div className="btn btn-sm btn-warning me-1">Edit</div>
                    </div>
                </div>
                <span className="badge bg-primary rounded-pill">{priority && "priority"}</span>
            </li>
        </>
    )
}

export default Todo
