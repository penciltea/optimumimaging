import { Typography, Container, Box, Grid } from "@mui/material";
import HeroBanner from "../components/HeroBanner";

export default function About() {
  return (
    <>
      <HeroBanner>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          About Optimum Imaging MRI
        </Typography>
      </HeroBanner>

      <Container maxWidth="lg" sx={{ my: 4, py: 4 }}>
        <Typography variant="body1" component="p">
          Founded in 2014, Optimum Imaging MRI was created with a mission: to deliver exceptional diagnostic imaging with a patient-first mindset. For over a decade, we've served the Miami community with the clarity and care they deserve in a relaxed, welcoming environment.
        </Typography>

        <Typography variant="h3" component="h2" align="center" sx={{marginTop: 5, marginBottom: 2}}>
          Our Technology
        </Typography>
        <Typography variant="body1" component="p">
          We're proud to offer open MRI machines, providing a more comfortable experience for patients who may feel uneasy in traditional, enclosed scanners. In addition, our advanced digital X-ray systems allow for quick, detailed imaging with reduced wait times.
        </Typography>

        <Typography variant="h3" component="h3" align="center" sx={{marginTop: 5, marginBottom: 2}}>
          IAC MRI Accreditation
        </Typography>
        <Grid container alignItems="center">
            <Grid size={{xs: 12, md: 3}}>
                <Box>
                    <img
                        src="/images/iac.png"
                        alt="IAC MRI Accredited Facility"
                        style={{ maxWidth: '200px', width: '100%' }}
                    />
                </Box>
            </Grid>
            <Grid size={{xs: 12, md: 9}}>
                <Typography variant="body1" component="p">
                    Optimum Imaging MRI is proud to be an IAC (Intersocietal Accreditation Commission) Accredited Facility for MRI. This national recognition reflects our commitment to meeting rigorous standards for quality, safety, and patient care. IAC accreditation is a symbol of excellence that ensures our procedures are performed in accordance with the highest industry standards and interpreted by highly qualified radiologists.
                </Typography>
            </Grid>
        </Grid>
        

        

        <Typography variant="h3" component="h4" align="center" sx={{marginTop: 5, marginBottom: 2}}>
          Our Commitment
        </Typography>
        <Typography variant="body1" component="p">
          At Optimum Imaging MRI, we blend cutting-edge technology with compassionate service. Our team understands that medical imaging can be stressful, so we strive to make every visit smooth, informative, and reassuring. From the front desk to the exam room, your comfort and peace of mind are our top priorities.
        </Typography>
      </Container>
    </>
  );
}
