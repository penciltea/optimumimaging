import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <footer>
            <p>&copy; {(new Date().getFullYear())} Optimum Imaging MRI.</p>

            <div>
                <ul>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                </ul>
            </div>
        </footer>
    )
}