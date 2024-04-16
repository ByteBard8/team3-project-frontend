import React, { useState } from 'react';
import { TextField, Container, Typography, Stack } from '@mui/material';
import Button from "../components/Button.jsx";
import {signUp}  from "../api/index.js"

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUp = async () => {
        // Create a JSON object from the form data
        const userData = {
            email: formData.email,
            name: `${formData.firstName} ${formData.lastName}`,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            role: 'user'
        };

        const response = await signUp(userData);
        if (response){
            window.location.href = "/signin"
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography variant="h5" sx={{ mb: 2 }} align="left">
                    Sign Up
                </Typography>
                <Stack spacing={1}>
                    <TextField
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        color="primary"
                    />
                    <TextField
                        variant="outlined"
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        color="primary"
                    />
                    <TextField
                        variant="outlined"
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        color="primary"
                    />
                    <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        color="primary"
                    />
                    <TextField
                        variant="outlined"
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        color="primary"
                    />
                    <Button
                        color="primary"
                        onClick={handleSignUp}
                        buttontext="Sign up"
                    />
                    <Button variant="text" href="/signin" buttonText="Go back to Sign in" />
                </Stack>
            </div>
        </Container>
    );
}
