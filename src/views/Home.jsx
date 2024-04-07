import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '../components/Button.jsx';
import Container from '@mui/material/Container';
import { getRandomBooks } from '../api/index.js';


const genres = ['PSYCHOLOGY', 'SCIENCE', 'POLITICS', 'NON-FICTION', 'SELF-HELP', 'SOCIOLOGY'];

export default function Book() {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRandomBooks();
      setItemData(data);
    };
    fetchData();
  }, []);

  const handleGenreClick = (genre) => {
    window.location.href = `/genre?genre=${genre}`;
  };

  return (
    <Container fixed>
      <Typography variant="h5" sx={{ mb: 2 }} align="left">
        New & Trending
      </Typography>
      <Stack direction="row" spacing={20} sx={{ overflow: 'auto' }}>
        {itemData.map((item) => (
          <a href={`/book/${item._id}`} key={item._id}>
            <img src={item.bookImageUrl} height="167" width="140" alt={item.title} />
          </a>
        ))}
      </Stack>
      <Typography variant="h5" sx={{ mb: 2, marginTop: 10 }} align="left">
        Genres
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                {genres.map((genre, index) => (
                    index % 3 === 0 && (
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <Button buttontext={genres[index]} minwidth="289px" maxwidth="289px" onClick={() => handleGenreClick(genre)} />
                            {genres[index + 1] && <Button buttontext={genres[index + 1]} minwidth="289px" maxwidth="289px" onClick={() => handleGenreClick(genres[index + 1])} />}
                            {genres[index + 2] && <Button buttontext={genres[index + 2]} minwidth="289px" maxwidth="289px" onClick={() => handleGenreClick(genres[index + 2])} />}
                        </Box>
                    )
                ))}
            </Box>
    </Container>
  );
}
