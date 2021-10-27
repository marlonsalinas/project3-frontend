import { Link } from "react-router-dom";

function Header(props){
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to='/'>
                        <div>Home</div>
                    </Link>
                </li>
                <li>
                    <Link to='/astrocollection'>
                        <div>Astronomy Collection</div>
                    </Link>
                </li>
                <li>
                    <Link to='/nasacollection'>
                        <div>Astronomy Picture of the Day</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;