import { Grid, Box, Typography, Container, Button, List, ListItem } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import HeroBanner from '../components/HeroBanner';
import Reviews from "../components/Reviews";
import Location from "../components/Location";

export default function Home(){
    return (
        <>
            <HeroBanner>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
                    Safe, Comfortable Open MRI
                </Typography>
                <Typography variant="h6" component="p" sx={{ mb: 4 }}>
                    Providing high-quality imaging in a patient-focused environment since 2014.
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    component="a"
                    href="tel:3052209500"
                    startIcon={<PhoneIcon />}
                >
                    Schedule an Appointment
                </Button>
            </HeroBanner>

            <Box sx={{backgroundColor: '#eff9ff', py: 4, my: 6 }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" align="center" gutterBottom>
                        Experience Comfort and Clarity in Medical Imaging
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Since 2014, Optimum Imaging MRI has proudly served the Miami community with exceptional diagnostic imaging in a comfortable, patient-first setting. 
                        Our open MRI technology provides a more relaxed alternative to traditional machines—ideal for children, seniors, and anyone with claustrophobia or anxiety.
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        We combine state-of-the-art equipment, including open MRI and advanced digital X-ray systems, with a compassionate staff focused on your comfort and care. 
                        Every scan is performed with precision and attention to detail, ensuring fast, accurate results for you and your healthcare provider.
                    </Typography>
                    <Typography variant="body1" component="p">
                        Whether you're here for a routine scan or specialized diagnostic imaging, Optimum Imaging is committed to making your visit smooth, efficient, and stress-free.
                    </Typography>
                </Container>
            </Box> 

            <Box>
                <Container maxWidth="lg" >
                    <Box sx={{ my: 4 }}>
                        <Typography variant="h3" align="center" gutterBottom>About Our Services</Typography>
                        <Grid container spacing={4} alignItems="center">
                            <Grid size={{xs: 12, md: 7}}>
                                <Typography variant="body1" sx={{mb: 3}}>
                                    At Optimum Imaging MRI, we offer state-of-the-art diagnostic imaging with a strong focus on patient comfort, clear communication, and fast, accurate results. Our facility is equipped with advanced technology designed to deliver detailed imaging in a relaxed, supportive environment — because we believe your comfort is key to better outcomes.
                                </Typography>
                                <Typography variant="body1" sx={{mb: 3}}>
                                    We specialize in high-resolution MRI scans, using open MRI systems that reduce anxiety and discomfort, especially for patients who experience claustrophobia. Our same-day appointment availability ensures you get the answers you need quickly, without long wait times.
                                </Typography>
                                <Typography variant="body1" sx={{mb: 3}}>
                                    Every scan is reviewed by our team of board-certified radiologists, who work closely with your referring physician to provide comprehensive reports and personalized insights. From your first call to your results, our goal is to provide care that is efficient, empathetic, and tailored to your needs.
                                </Typography>
                            </Grid>
                            <Grid size={{xs: 12, md: 5}}>
                                <Box
                                    component="img"
                                    src="/images/mri.jpg"
                                    alt="Open MRI Machine"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: 2,
                                        boxShadow: 2,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Box sx={{backgroundColor: '#eff9ff', py: 6, my: 6 }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h3" align="center">Why Choose Us</Typography>
                    <Grid container justifyItems="center" alignItems="center">
                        <Grid size={{xs: 12, md: 4}}>
                            <Box
                            component="img"
                            src="/images/iac.png"
                            alt="IAC MRI Accredited Facility"
                            sx={{
                                display: 'block',
                                mx: { xs: 'auto', md: 0 },
                                width: { xs: '40%', sm: '40%', md: '100%' },
                                height: 'auto',
                              }}
                            />
                        </Grid>

                        <Grid size={{xs: 12, md: 8}}>
                            <List>
                                <ListItem>
                                    <Typography variant="body1">
                                        <strong>Open MRI Scanners:</strong> Ideal for patients with anxiety or claustrophobia, without compromising image quality.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="body1">
                                        <strong>Top-Tier X-ray Machines:</strong> Fast, reliable, and precise imaging for accurate diagnoses.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="body1">
                                        <strong>Experienced Staff:</strong> Compassionate professionals committed to your care and comfort.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="body1">
                                        <strong>Same-Day Appointments:</strong> Timely service to fit your schedule and provide prompt results.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="body1">
                                        <strong>Accredited Facility:</strong> Recognized by the IAC for meeting the highest standards in MRI imaging.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Reviews />

            <Location />
        </>
    )
}