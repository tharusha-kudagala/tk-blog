import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>Page not found !!!</p>
            <Link to="/">Back to home</Link>
        </div>
    );
}
 
export default NotFound