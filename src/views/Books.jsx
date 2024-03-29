import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Stack from '@mui/material/Stack';

import Pagination from '@mui/material/Pagination';


const itemData = [
    {
        img: './src/assets/react.svg',
        title: 'Les Miserables',
        author: 'Victor Hugo',
      },
      {
        img: './src/assets/react.svg',
        title: 'Les Miserables',
        author: 'Victor Hugo',
      },
      {
        img: './src/assets/react.svg',
        title: 'Les Miserables',
        author: 'Victor Hugo',
      },
      {
        img: './src/assets/react.svg',
        title: 'Les Miserables',
        author: 'Victor Hugo',
      },      {
        img: './src/assets/react.svg',
        title: 'Les Miserables',
        author: 'Victor Hugo',
      },      {
        img: './src/assets/react.svg',
        title: 'Les Miserables',
        author: 'Victor Hugo',
      },      {
        img: './src/assets/react.svg',
        title: 'Les Miserables',
        author: 'Victor Hugo',
      },      {
        img: './src/assets/react.svg',
        title: 'Les Miserables',
        author: 'Victor Hugo',
      },
]
export default function Book() {
    return (
        <Box>
        <Typography variant="h5" sx={{ mb: 2 }} align="left">
        Books
    </Typography>
    <Stack spacing={2}>
    <Pagination count={4} color="secondary" variant="outlined" showPrevButton showNextButton/>
    </Stack>

        <ImageList cols={5} gap={60}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={1} rows={1}>
          <img
            srcSet={item.img}
            src={item.img}
            alt={item.title}
            sx={{ width: 140, height: 170 }}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    )
}