import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Blog = () => {

    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <h2>loading ...</h2>
    }
    
    if(error !== ''){
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h2>Lists of Blogs</h2>
            {
                data.map(item=>(
                    <h4 key={item.id}>
                        <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
                    </h4>
                ))
            }
        </div>
    )
}

export default Blog
