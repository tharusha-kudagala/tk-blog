import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('G.R.R Martin');
    const[isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        
        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/',
                {
                    method: 'POST',
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(blog)
                }).then(()=>{
                    console.log('Blog Added');
                    setIsPending(false);
                    history.push('/');
                })
        }, 500);
        
    }

    return ( 
        <div className="create">
            <h2>Hello this is new</h2>
            <form
            onSubmit={handleSubmit}>
                <label>
                    Blog title:
                </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>
                    Blog body:
                </label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value )}
                />
                <label>
                    Written by:
                </label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="K.T.Kudagala">Tharusha</option>
                    <option value="J.K. Rowling">Rowling</option>
                    <option value="G.R.R Martin">Martin</option>
                    <option value="J.R.R. Tolkien">Tolkien</option>
                </select>
                { !isPending && <button>Add blog </button> }
                { isPending && <button disabled>Adding blog . . . </button> }
            </form>
        </div>
     );
}
 
export default Create;