import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from "../components/Button.jsx";
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom'; 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { useLocation } from 'react-router-dom';
import { searchBooksByGenre } from "../api/index.js";

export default function BooksByGenre() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('genre') || '';
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state
            try {
                const data = await searchBooksByGenre(searchQuery);
                setSearchResults(data);
            } catch (error) {
                console.error('Error searching books:', error);
                setError('An error occurred while searching. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData(); 
    }, [searchQuery]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Showing<i style={{color:"red"}}>{searchQuery} </i>genre
            </Typography>
            <div>
                {loading && <CircularProgress />} {/* Display loading indicator */}
                {error && <p>{error}</p>} {/* Display error message */}
                {!loading && !error && searchResults.length === 0 && <p>No results found.</p>}
			
                <ImageList cols={5} gap={60}>
                    {searchResults.map((item) => (
                        <ImageListItem component="a" key={`img-${item._id}`} cols={1} rows={1} href={`/book/${item._id}`}>
                        <img
                            key={item.img}
                            srcSet={item.img}
                            src={item.bookImageUrl || './src/assets/react.svg'}
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
            </div>
        </Container>
    );
}
