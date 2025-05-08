import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Footer(){
    const theme = useTheme();
    return (
        <Grid 
            container 
            spacing={2} 
            component="footer" 
            sx={{
                padding: 2, 
                background: theme.palette.secondary.main, 
                borderTop: '1px solid', 
                borderTopColor: theme.palette.primary.main
            }}
        >
            <Grid size={4}>
                <Typography variant="body2">&copy; {(new Date().getFullYear())} Optimum Imaging MRI.</Typography>
            </Grid>

            <Grid size={8} textAlign="right">
                <Typography variant="body2">
                    <Link component={RouterLink} to="/privacy" color="inherit" sx={{mx: 1}} >Privacy</Link> |
                    <Link component={RouterLink} to="/terms" color="inherit" sx={{mx: 1}} >Terms of Service</Link>
                </Typography>
            </Grid>

            <Grid size={12}>
                <Typography variant="body2">
                    2740 SW 97th Ave # 107, Miami, FL 33165 <br />
                    <Link component={RouterLink} to="tel:3052209500">(305) 220-9500</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}