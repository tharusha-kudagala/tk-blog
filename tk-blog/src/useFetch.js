import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortControll = new AbortController(); 
    
           setTimeout(() => {
            fetch(url, {signal: abortControll.signal})
            .then(res => {
                if(res.ok){
                    console.log(res.body);
                    return res.json();
                }
                else{
                     throw Error('වැරදියි');
                }
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            }
            ).catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Fetch aboreded');
                }
                setError(err.message);
                setIsPending(false);
            });
           }, 1000);
           return () => abortControll.abort();
        }, [url])

    return { data, isPending, error};
}
 
export default useFetch;