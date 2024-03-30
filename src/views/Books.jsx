import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import {getAllBooks} from '../api/index.js';

export default function Books() {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
   const fetchData = async () => {
      const data = await getAllBooks();
      setItemData(data);
    }
    fetchData();
  }, []);
    return (
        <Box>
        <Typography variant="h5" sx={{ mb: 2 }} align="left">
        Books
    </Typography>
    <Stack spacing={2}>
    <Pagination count={4} color="secondary" variant="outlined"/>
    </Stack>

        <ImageList cols={5} gap={60}>
      {itemData.map((item) => (
        <ImageListItem component="a" key={item.img} cols={1} rows={1} href={`/book/${item._id}`}>
          <img
            key={item.img}
            srcSet={item.img}
            src={item.img || './src/assets/react.svg'}
            alt={item.title}
            sx={{ width: 140, height: 170 }}
            loading="lazy"
          />
          <ImageListItemBar
            key={item.title}
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