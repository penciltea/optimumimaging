import { Container, Stack, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";

    
export default function Reviews(){
    return(
        <Container maxWidth="lg" sx={{my: 6, py: 2}}>
            <Typography variant="h3" component="h4" align="center" gutterBottom>What Our Patients Say</Typography>
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
        </Container>
    )
}