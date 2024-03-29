import * as React from 'react';
import Box from "@mui/material/Box"
import { Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
        sx={{
          position:'absolute',
          bottom: '0',
          minHeight: '20px',
          minWidth: '100vh',
          backgroundColor: 'ash',
          color: 'white',
          border: '1px solid gray',
        }}
      >
        <Typography sx={{ textAlign: 'left' }}>
        About Us    |   Contact Us  |    Privacy
        </Typography>
      </Box>
    )
}