import { Box, Typography } from "@mui/material";

export default function Location(){
    return(
        <Box sx={{ py: 6, px: 2 }}>
            <Typography variant="h3" component="h5" align="center" gutterBottom>
                Visit Our Location
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 3,
                }}
            >
                <Box
                    component="iframe"
                    title="Location via Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.7935926823825!2d-80.35456272460014!3d25.74433857736285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b8c77f44d2e9%3A0x9a6c4846b9db1bcb!2sOptimum%20Imaging!5e0!3m2!1sen!2sus!4v1746638185706!5m2!1sen!2sus"
                    width="100%"
                    style={{ 
                        border: 0, 
                        maxWidth: '1000px',
                        height: 450,
                     }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Box>
        </Box>
    )
}