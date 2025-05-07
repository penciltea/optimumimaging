import { Grid, Stack, Box, Typography } from "@mui/material";
import ReviewCard from "../components/ReviewCard";

export default function Home(){
    return (
        <>
            <Box className="hero">
                <Typography variant="h1">Optimum Imaging MRI</Typography>
                <Typography variant="body2">Compassionate care. Clear results.</Typography>
            </Box>

            <Box>
                <Typography variant="h2">Experience Comfort and Clarity in Medical Imaging</Typography>
                <Typography variant="body2">Since 2014, Optimum Imaging MRI has provided patients with high-quality imaging in a compassionate and patient-friendly environment.</Typography>
            </Box>

            <Box>
                <Box>IMAGE GOES HERE</Box>
                <Typography variant="body2">At Optimum Imaging MRI, we specialize in open MRI technology that puts your comfort first. Whether you're here for an MRI or a digital X-ray, our modern equipment ensures accurate results with a gentle touch.</Typography>
            </Box>

            <Box>
                <Typography variant="h3">Why Choose Us</Typography>
                <ul>
                    <li><strong>Open MRI Scanners: </strong>Perfect for patients with anxiety or claustrophobia, without sacrificing image quality.</li>
                    <li><strong>Top-Tier X-ray Machines: </strong>Fast, reliable, and precise imaging.</li>
                    <li><strong>Experienced Staff: </strong>Compassionate professionals committed to your care.</li>
                </ul>
            </Box>

            <Box>
                <Typography variant="h4">Customer Reviews</Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <ReviewCard 
                        name="Carlos E." 
                        rating={5} 
                        text="Wow! I recommend Optimum Imaging enough! The entire staff was incredibly friendly and attentive ,from the moment i walked in until I left.They explain everything ,they make me feel heard and understood. The office is clean and modern, and I nevera to wait long for the appointment. A truly positive experience and all around.Thank You for treating me so special."  
                    />
                    
                    <ReviewCard 
                        name="Orlando P." 
                        rating={5} 
                        text="Optimum imaging is very pleasant. The staff goes above and beyond to make sure you are comfortable during any procedure. They are very knowledgeable and explain into detail the procedures. If you are looking for an imaging center this place is it." 
                    />

                    <ReviewCard 
                        name="Adria G." 
                        rating={5} 
                        text="Choosing Optimum Imaging was a great experience. It gave me piece of mind knowing it was going to be an open MRI. Thank you all for the professionalism especially to Randy who kindly helped me. They gave me a CD the same day I attended the facility. I highly recommend them! Thank you Yusleidy, Camila, Yasser & Randy for the great service." 
                    />
                </Stack>
            </Box>

            <Box sx={{ py: 6, px: 2 }}>
                <Typography variant="h5" align="center" gutterBottom>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.7935926823825!2d-80.35456272460014!3d25.74433857736285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b8c77f44d2e9%3A0x9a6c4846b9db1bcb!2sOptimum%20Imaging!5e0!3m2!1sen!2sus!4v1746638185706!5m2!1sen!2sus"
                    width="100%"
                    height="1050"
                    style={{ border: 0, maxWidth: '1000px' }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </Box>
            </Box>
        </>
    )
}