import { Box, Container } from '@mui/material';

interface HeroBannerProps {
  children: React.ReactNode;
}

export default function HeroBanner({children}: HeroBannerProps) {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // black with 50% opacity
            borderRadius: 2,
            p: { xs: 3, md: 6 },
          }}
        >
            {children}
        </Box>
      </Container>
    </Box>
  );
}