import { Box, Typography, Container, List, ListItem, Link } from '@mui/material';
import HeroBanner from "../components/HeroBanner";

export default function Privacy() {
  return (
    <>
      <HeroBanner>
        <Typography variant="h3" component="h1" align="center" gutterBottom> Privacy Policy </Typography>
      </HeroBanner>

      <Container maxWidth="lg" sx={{ my: 4, py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom> Privacy and Communications Disclaimer </Typography> 
        <Typography variant="body1" component="p" gutterBottom> Optimum Imaging MRI is committed to safeguarding the privacy and security of your personal information in compliance with applicable federal and state privacy laws, including those governing healthcare communications. </Typography>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 4 }}> Data Collection </Typography>
        <Typography variant="body1" component="p" gutterBottom> We collect only one piece of personally identifiable information: your <strong>telephone number</strong>. This information is used solely for the following purposes: </Typography>

        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}> To send appointment reminders via SMS or telephone call; and </ListItem>
          <ListItem sx={{ display: 'list-item' }}> To provide information related to the address and location of your scheduled imaging services. </ListItem>
        </List>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 4 }}> Data Use </Typography>
        <Typography variant="body1" component="p" gutterBottom> Your personal information is used exclusively to facilitate communication related to your scheduled appointments and services provided by Optimum Imaging MRI. </Typography>
        <Typography variant="body1" component="p" gutterBottom> By providing your phone number, you consent to receive appointment-related text messages or calls. Standard message and data rates may apply. You may withdraw your consent at any time by contacting us directly or following opt-out instructions included in the communication. </Typography>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 4 }}> Data Sharing </Typography>
        <Typography variant="body1" component="p" gutterBottom> Your personal information is <strong>not shared</strong>, disclosed, sold, or otherwise distributed to any third parties or affiliates. </Typography>
        <Typography variant="body1" component="p" gutterBottom> Additionally, <strong>SMS consent obtained from patients is not shared with third parties or affiliates for marketing or promotional purposes.</strong> Mobile Opt-in, SMS consent, and Phone Numbers collected for SMS communication purposes will not be shared with third parties and affiliates for marketing purposes. </Typography>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 4 }}> User  </Typography>
        <Typography variant="body1" component="p" gutterBottom> Patients have the right to: </Typography>
       
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}> Know what personal information is being collected; </ListItem>
          <ListItem sx={{ display: 'list-item' }}> Request access to their information; </ListItem>
          <ListItem sx={{ display: 'list-item' }}> Request corrections or updates to their information; </ListItem>
          <ListItem sx={{ display: 'list-item' }}> Withdraw consent to communications at any time. </ListItem>
        </List>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 4 }}> Data Protection </Typography>
        <Typography variant="body1" component="p" gutterBottom> Optimum Imaging MRI implements reasonable administrative, technical, and physical safeguards designed to protect the personal information we collect from unauthorized access, use, or disclosure. </Typography>
        <Typography variant="body1" component="p" gutterBottom> We limit the collection and use of personal data to what is necessary to deliver services effectively. </Typography>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 4 }}> Cookies and Tracking </Typography>
        <Typography variant="body1" component="p" gutterBottom> We do not use cookies or tracking technologies to collect personal data through our website. No personally identifiable information is gathered unless it is voluntarily provided by the user (e.g., via phone number submission). </Typography>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 4 }}> Third-Party Links </Typography>
        <Typography variant="body1" component="p" gutterBottom> While our website may contain links to external websites, we are not responsible for the privacy practices or content of those third-party sites. </Typography>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 4 }}> Contact Information </Typography>
        <Typography variant="body1" component="p" gutterBottom> If you have any questions or concerns regarding this Privacy Policy or our use of your personal information, please contact us at: </Typography>

        <Box component="address" sx={{ fontStyle: 'normal', my: 2 }}>
          <Typography variant="body1"><strong>Optimum Imaging</strong></Typography>
          <Typography variant="body1">2740 SW 97th Ave Suite 107, Miami, FL 33165</Typography>
          <Typography variant="body1">
            <Link href="mailto:info@optimumimaging.com">info@optimumimaging.com</Link>
          </Typography>
          <Typography variant="body1">
            <Link href="tel:+13052209500">(305) 220-9500</Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
