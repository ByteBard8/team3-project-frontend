import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from "../components/Button.jsx";
import Container from "@mui/material/Container";

export default function Book() {
    return (
        <Container fixed>
    <Typography variant="h5" sx={{ mb: 2 }} align="left">
        New & Trending
    </Typography>
    <Stack direction="row" spacing={20} sx={{ overflow: 'auto' }}>
    <img src='./src/assets/react.svg' height="167" width="140"/>
    <img src='./src/assets/react.svg' height="167" width="140"/>
    <img src='./src/assets/react.svg' height="167" width="140"/>
    <img src='./src/assets/react.svg' height="167" width="140"/>
    <img src='./src/assets/react.svg' height="167" width="140"/>
    </Stack>
    <Typography variant="h5" sx={{ mb: 2, marginTop: 10 }} align="left">
        Genres
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>

    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', }}>
    <Button buttonText="PSYCHOLOGY" />
    <Button buttonText="SCIENCE" />
     <Button buttonText="POLITICS" />
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', }}>
     <Button buttonText="NON-FICTION" />
     <Button buttonText="SELF-HELP" />
     <Button buttonText="SOCIOLOGY" />
    </Box>
    </Box>
    </Container>
    )
}