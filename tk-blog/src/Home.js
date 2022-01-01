import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [post, setPost] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) =>{
        const newBlog = post.filter((post) => post.id !== id );
        setPost(newBlog);
    }

    useEffect(() => {

    const abortControll = new AbortController(); 

       setTimeout(() => {
        fetch('http://localhost:8000/blogs', {signal: abortControll.signal})
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                 throw Error('වැරදියි');
            }

        })
        .then(data => {
            setPost(data);
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
       return () => console.log('Cleaned');
    }, [])

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading . . . </div>}
            {post && <BlogList blogs = {post.filter((blog) => blog.id%2 === 0)} title = 'Welcome to Fantacies!' handleDelete={handleDelete} />}
            {/* <br/>
            <BlogList blogs = {post.filter((blog) => blog.id%2 ===  1)} title = 'Welcome to Magic World!!!' handleDelete={handleDelete}/>
        <button onClick={() => setName('Kudagala')}>Change</button> */}
        </div>
     );
}
 
export default Home; 