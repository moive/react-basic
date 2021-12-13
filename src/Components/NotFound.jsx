import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>404</h2>
            <Link className='btn btn-outline-primary' to="/">Home</Link>
        </div>
    )
}

export default NotFound
