import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import Container from '@mui/material/Container';
export default function Footer() {
    return (
      <div id="footer-wrap">
        <Container
          sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
          }}
        >
        <Box
            sx={{
                color: 'white',
                padding: '20px',
                borderTop: '1px solid #ccc',
                marginTop: '20px',
                width: '100%', // Set width to 100% for full width
            }}
        >
            <Grid container spacing={2}>
                {/* About Us */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>About Us</Typography>
                    <Typography variant="body2">
                    "Empowering Libraries, Enriching Communities: Your Ultimate Management Solution."
                    </Typography>
                </Grid>

                {/* Contact Us */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>Contact Us</Typography>
                    <Typography variant="body2">
                        Address: 123 Main Street, City, Country
                    </Typography>
                    <Typography variant="body2">
                        Phone: 123-456-7890
                    </Typography>
                    <Typography variant="body2">
                        Email: info@example.com
                    </Typography>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>Quick Links</Typography>
                    <Typography variant="body2">
                        <Link href="#">Home</Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link href="#">Products</Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link href="#">Services</Link>
                    </Typography>
                </Grid>

                {/* Privacy */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>Privacy</Typography>
                    <Typography variant="body2">
                        <Link href="#">Privacy Policy</Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link href="#">Terms of Service</Link>
                    </Typography>
                </Grid>

            </Grid>
        </Box>

</Container>
</div>
    );
}
