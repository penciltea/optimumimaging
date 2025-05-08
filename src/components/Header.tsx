import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Link, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '/images/optimum-horiz.png'

export default function Header(){
    const theme = useTheme();
    return (
        <AppBar position="static" color="secondary" sx={{py: 1, borderBottom: '1px solid', borderBottomColor: theme.palette.primary.main}}>
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
                <Stack direction="row" spacing={3}>
                    <Link component={RouterLink} to="/about" color="inherit" variant="h6" underline="hover"> 
                        About Us 
                    </Link>
                    <Link component={RouterLink} to="/privacy" color="inherit" variant="h6" underline="hover"> 
                        Privacy Policy 
                    </Link>
                    <Link component={RouterLink} to="/terms" color="inherit" variant="h6" underline="hover"> 
                        Terms of Service
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}