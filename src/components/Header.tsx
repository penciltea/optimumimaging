import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Link } from '@mui/material';
import logo from '../assets/optimum-horiz.png'

export default function Header(){
    return (
        <AppBar position="static" color="primary" sx={{py: 1}}>
            <Toolbar>
                <Box sx={{flexGrow: 1}}>
                    <Link component={RouterLink} to="/" sx={{display: 'inline-block', maxWidth: { xs: '10rem', sm: '12rem', md: '15rem' }}}>
                        <img 
                            src={logo} 
                            alt="Optimum Imaging MRI" 
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </Link>
                </Box>
                <Box>
                    <Link component={RouterLink} to="/about" color="inherit"> 
                        About Us 
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}