import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Footer(){
    const theme = useTheme();
    return (
        <Stack
            direction="column" 
            component="footer" 
            sx={{
                padding: 2, 
                background: theme.palette.secondary.main, 
                borderTop: '1px solid', 
                borderTopColor: theme.palette.primary.main
            }}
        >
            <Typography variant="body2">&copy; {(new Date().getFullYear())} Optimum Imaging MRI</Typography>
            <Typography variant="body2" sx={{my: 1}}>
                <Link component={RouterLink} to="/privacy" color="inherit" sx={{marginRight: 1}} >Privacy</Link> |
                <Link component={RouterLink} to="/terms" color="inherit" sx={{marginLeft: 1}} >Terms of Service</Link>
            </Typography>

            <Typography variant="body2" sx={{my: 1}}>
                Hours of Operation: <br />
                Mon-Fri: 9AM-6PM<br />
                Sat-Sun: closed
            </Typography>
            
            <Typography variant="body2">
                2740 SW 97th Ave Suite 107, Miami, FL 33165 <br />
                <Link component={RouterLink} to="mailto:info@optimumimagingmri.com">info@optimumimagingmri.com</Link><br />
                Phone: <Link component={RouterLink} to="tel:3052209500">(305) 220-9500</Link><br />
                Fax: 305-220-9577
            </Typography>
        </Stack>
    )
}