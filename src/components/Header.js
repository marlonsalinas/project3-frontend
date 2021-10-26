import { Link } from "react-router-dom";

function Header(props){
    return (
        <nav className="nav">
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/astrocollection'>
                <div>Astrology Collection</div>
            </Link>
            <Link to='/nasacollection'>
                <div>NASA's Collection</div>
            </Link>
        </nav>
    );
};

export default Header;