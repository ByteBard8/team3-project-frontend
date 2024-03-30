import React, { useState } from 'react';
import { TextField, Container, Typography,Stack } from '@mui/material';
import Button from "../components/Button.jsx"


export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = () => {
      console.log('Email:', email);
      console.log('Password:', password);
    };
    return (
        <Container component="main" maxwidth="xs">
        <div>
        <Typography variant="h5" sx={{ mb: 2 }} align="left">
        Sign Up
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
            label="Last name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            color="primary"
          />
            <TextField
            variant="outlined"
            label="First name"
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
            <TextField
            variant="outlined"
            label="Confirm password"
            type="password"
            value={password}
            onChange={(e) => setEmail(e.target.value)}
            required
            color="primary"
          />
          <Button
            color="primary"
            onClick={handleSignUp}
            buttontext="Sign up"
            minwidth="60px"
            maxwidth="60px"
            />
            <Button variant="text" href="/signin" buttontext="Go back to Sign in" />
        </Stack>
        </div>
      </Container>
    );
}