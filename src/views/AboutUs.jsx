import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Silent Library - your go-to destination for all things books and reading!
      </Typography>
      <Typography variant="body1" paragraph>
        At Silent Library, we're passionate about providing access to knowledge and fostering a love for reading
        in our community. Our extensive collection of books spans various genres, from classic literature to
        contemporary fiction, non-fiction, and beyond.
      </Typography>
      <Typography variant="body1" paragraph>
        Whether you're a book enthusiast, a casual reader, or someone looking to explore new literary adventures,
        we're here to serve your needs. Our knowledgeable staff is always ready to assist you in finding the perfect
        book for your tastes and interests.
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for choosing Silent Library as your reading companion. We look forward to accompanying you on your
        reading journey!
      </Typography>
    </Container>
  );
};

export default AboutUs;
