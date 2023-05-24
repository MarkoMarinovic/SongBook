import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return ( 
        <nav className="navbar">
            <h1>SongBook</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Log in</Link>
            </div>
        </nav>
     );
}
 
export default NavigationBar;