import React, { useState } from 'react';
import { TextField, Container, Typography,Stack } from '@mui/material';
import Button from "../components/Button.jsx"


export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = () => {
      console.log('Email:', email);
      console.log('Password:', password);
    };
    return (
        <Container component="main" maxWidth="xs">
        <div>
        <Typography variant="h5" sx={{ mb: 2 }} align="left">
        Sign In
    </Typography>
    <Stack spacing={1}>
          <TextField
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            color="primary"
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            color="primary"
          />

          <Button
            color="primary"
            onClick={handleSignIn}
            buttonText="Sign In"
            minW="60px"
            maxW="60px"
            />
        <Typography variant="body" sx={{ mb: 2, paddingTop: '40px' }} align="center">
        Don't have an account yet?
        </Typography>
        <Button
            buttonText="Register"
            minW="60px"
            maxW="60px"
            href="/signup"
            />
            </Stack>

        </div>
      </Container>
    );
}