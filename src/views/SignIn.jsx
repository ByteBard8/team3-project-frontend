import React, { useState } from 'react';
import { TextField, Container, Typography,Stack } from '@mui/material';
import Button from "../components/Button.jsx"
import {signInAPI}  from "../api/index.js"

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSignIn = async () => {
      try {
        const response = await signInAPI(email, password);
        const { token } = response;
        localStorage.setItem('token', token);
        window.location.href = '/Home';
      } catch (error) {
        console.log(error)
        setError('Invalid email or password');
      }
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
          {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
          <Button
            color="primary"
            onClick={handleSignIn}
            buttontext="Sign In"
            minW="60px"
            maxW="60px"
            />
        <Typography variant="body" sx={{ mb: 2, paddingTop: '40px' }} align="center">
        Don't have an account yet?
        </Typography>
        <Button
            buttontext="Register"
            minW="60px"
            maxW="60px"
            href="/signup"
            />
            </Stack>

        </div>
      </Container>
    );
}