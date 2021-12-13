import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Blog = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts');

    const handleChange = e => {
        e.preventDefault();
        let filter = e.target.value;

        if (filter) {
            setSearchParams({filter})
        }else{
            setSearchParams({})
        }
    }
    if (loading) {
        return <h2>loading ...</h2>
    }
    
    if(error !== ''){
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h2>Lists of Blogs</h2>
            <div>
                <input
                    type="text"
                    className='form-control'
                    value={searchParams.get('filter') || ''}
                    onChange={handleChange}
                />
            </div>
            {
                data
                    .filter(item=>{
                        let filter = searchParams.get('filter');

                        if(!filter) return true;
                        
                        let title = item.title.toLowerCase();
                        return title.startsWith(filter.toLowerCase());
                    })
                    .map(item=>(
                    <h4 key={item.id}>
                        <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
                    </h4>
                ))
            }
        </div>
    )
}

export default Blog
