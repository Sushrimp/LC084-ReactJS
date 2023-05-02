import { AiOutlineHeart, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <footer>
            <Link to="/1" style={{color: "inherit"}}>
                <AiOutlineHome size={30} />
            </Link>
            <Link to="/search" style={{color: "inherit"}}>
                <AiOutlineSearch size={30} />
            </Link>
            <Link to="/fav" style={{color: "inherit"}}>
                <AiOutlineHeart size={30} />
            </Link>
            
        </footer>
    );
}