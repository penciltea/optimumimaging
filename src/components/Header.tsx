import { Link } from 'react-router-dom';
import logo from '../assets/optimum-horiz.png'

export default function Header(){
    return (
        <header>
            <div>
                <img className="logo" src={logo} alt="Optimum Imaging MRI" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}