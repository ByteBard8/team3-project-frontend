import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from "../components/Button.jsx";


export default function Book() {
    return (
        <>
        <Typography variant="h2" sx={{ mb: 2 }} align="left">
        Book
    </Typography>
    <Stack direction="row" spacing={20}>
    <img src='./src/assets/react.svg' height="326" width="338"/>
    <Stack direction="column" spacing={6}>
      <Box>
      <Typography variant="h6" sx={{ mb: 2 }} align="left">
        Les Miserables
    </Typography>
    <Typography align="left">
    Hugo, Victor, 1802-1885, author.</Typography>
    <Typography align="left">
Contributors: Wilbour, Charles E. (Charles Edwin),
</Typography>
<Typography align="left"> 
1833-1896,Book, 1140 pages
    </Typography>
      </Box>
    <Button buttonText="Summary" />
    <Button buttonText="Review" />
     <Button buttonText="Borrow Now" />
     <Button buttonText="Add to Favorites" />
    </Stack>
    </Stack>
    </>
    )
}