import { Box, Typography, Container, List, ListItem, Link } from '@mui/material';
import HeroBanner from "../components/HeroBanner";

export default function Terms() {
  return (
    <>
      <HeroBanner>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Terms of Service
        </Typography>
      </HeroBanner>

      <Container maxWidth="lg" sx={{ my: 4, py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Terms of Service
        </Typography>

        <Typography variant="body1" component="p" gutterBottom>
          Welcome to Optimum Imaging MRI. By accessing or using our services, including SMS communications, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, please do not use our services.
        </Typography>

        <Typography variant="h4" component="h3" gutterBottom>
          1. SMS Terms & Conditions
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1.1 SMS Consent and Communication
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          By providing your mobile phone number and opting in to receive SMS messages from Optimum Imaging MRI, you consent to receive text messages related strictly to the services we provide. The information collected as part of the SMS consent process, including phone numbers, will <strong>not be shared with third parties or affiliates for marketing purposes</strong>.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1.2 Types of SMS Communications
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          If you have provided consent, you may receive SMS messages related to the following:
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>Appointment confirmations and reminders</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Scheduling changes or follow-up instructions</ListItem>
          <ListItem sx={{ display: 'list-item' }}>General service-related updates</ListItem>
        </List>

        <Typography variant="subtitle1" gutterBottom>
          1.3 Message Frequency
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Message frequency may vary depending on your appointments and service needs. You may receive up to <strong>1–3 messages per week</strong>, though actual frequency may vary.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1.4 Messaging Fees
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Standard message and data rates may apply based on your mobile carrier's pricing plan. Fees may vary for domestic or international message delivery.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1.5 Opt-In Methods
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You may opt in to receive SMS communications from Optimum Imaging MRI by one of the following methods:
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            Providing verbal consent during an in-person or phone conversation
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Submitting an online form via our website
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Filling out a paper intake or consent form
          </ListItem>
        </List>

        <Typography variant="subtitle1" gutterBottom>
          1.6 Opt-Out Method
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You can opt out of receiving SMS messages at any time by replying <strong>"STOP"</strong> to any message you receive. You may also contact us directly to request removal from our messaging list.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1.7 Help and Support
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          If you experience any issues with our SMS messaging, you may reply with the keyword <strong>"HELP"</strong> or visit our website at <Link href="/">https://optimumimagingmri.com</Link> for assistance.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1.8 Standard Messaging Disclosures
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>Message and data rates may apply.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>You can opt out at any time by texting "STOP".</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            For help, text "HELP" or visit our{' '}
            <Link href="/privacy">Privacy Policy</Link> and{' '}
            <Link href="/terms">Terms and Conditions</Link> pages.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>Message frequency may vary.</ListItem>
        </List>

        <Typography variant="h4" component="h4" gutterBottom>
          2. Use of Website and Services
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The content and services provided by Optimum Imaging MRI are for informational and scheduling purposes only. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
        </Typography>

        <Typography variant="h4" component="h5" gutterBottom>
          3. Limitation of Liability
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Optimum Imaging MRI will not be held liable for any damages arising from the use or inability to use our website or SMS services, including but not limited to lost data, service interruptions, or missed appointments due to communication failures.
        </Typography>

        <Typography variant="h4" component="h6" gutterBottom>
          4. Changes to Terms
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We reserve the right to update or change these Terms of Service at any time. Changes will take effect immediately upon posting. Continued use of our services following any changes constitutes your acceptance of those changes.
        </Typography>

        <Typography variant="h4" component="p" gutterBottom>
          5. Contact Information
        </Typography>
        <Box component="address" sx={{ fontStyle: 'normal', mb: 2 }}>
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
