import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogPost = () => {
    
    const {id} = useParams();
    const { data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="Blog-Post" style={{"margin":"20px 0"}}>
            <h2 style={{"color":"#f1356d", "marginBottom":"10px", "fontSize":"20px"}}>This is blog post {id}</h2>
            {isPending && <div>Loading . . .</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article> 
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogPost;