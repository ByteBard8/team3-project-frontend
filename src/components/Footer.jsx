import * as React from 'react';
import Box from "@mui/material/Box"
import { Divider, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
        sx={{
          position:'absolute',
          bottom: '0',
          minHeight: '20px',
          minwidth: '100vh',
          backgroundColor: 'ash',
          color: 'white',
          border: '1px solid gray',
        }}
      >
        
        <Typography sx={{ textAlign: 'left' }}>
        About Us    |   Contact Us  |    Privacy
        </Typography>
      </Box>
)}