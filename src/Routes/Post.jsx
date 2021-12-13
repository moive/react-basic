import { useParams } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';

const Post = () => {

    const params = useParams();

    const {data, error, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {});

    const {id, title, body } = data;

    if (loading) {
        return <h2 className="my-5">loading ...</h2>
    }

    if (error !== '') {
        return <h2 className="my-5">{}</h2>
    }

    return (
        <div className="my-5">
            <h2>{id} - {title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Post
