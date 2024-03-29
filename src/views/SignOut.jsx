import React, { useState } from 'react';
import { TextField, Container, Typography,Stack } from '@mui/material';
import Button from "../components/Button.jsx"


export default function SignIn() {
    localStorage.setItem('token', "");

    return (
        <Container component="main" maxWidth="xs">
        <div>
        <Typography variant="h5" sx={{ mb: 2 }} align="left">
        Signed out successfully!
    </Typography>
    <Stack spacing={1}>
          <Button
            color="primary"
            href="/signin"
            buttonText="Go back to Sign In"
            minW="60px"
            maxW="60px"
            />
        </Stack>
        </div>
      </Container>
    );
}