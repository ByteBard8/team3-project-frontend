import React, { useState } from 'react';
import { TextField, Container, Typography,Stack } from '@mui/material';
import Button from "../components/Button.jsx"


export default function SignIn() {
    localStorage.setItem('token', "");

    return (
        <Container component="main" maxwidth="xs">
        <div>
        <Typography variant="h5" sx={{ mb: 2 }} align="left">
        Signed out successfully!
    </Typography>
    <Stack spacing={1}>
          <Button
            color="primary"
            href="/signin"
            buttontext="Go back to Sign In"
            minwidth="360px"
            maxwidth="360px"
            />
        </Stack>
        </div>
      </Container>
    );
}