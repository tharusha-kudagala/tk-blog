import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>TK Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="btn">Create New</Link>
            </div>
        </nav> 
     );
}
 
export default Navbar;