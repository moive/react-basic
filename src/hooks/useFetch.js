import { useEffect, useState } from "react"

export const useFetch = (url, typeData=[]) => {
    const [data, setData] = useState(typeData);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{
        setLoading(true);

        fetch(url)
            .then((res)=>res.json())
            .then(data=> setData(data))
            .catch(error=>setError('Server error'))
            .finally(()=>setLoading(false))
    },[url]);
    return {data, error, loading};
}
