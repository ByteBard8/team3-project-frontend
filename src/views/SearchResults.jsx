import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from "../components/Button.jsx";
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom'; // Import Link component

import { useLocation } from 'react-router-dom';
import { searchBooks } from "../api/index.js";

export default function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('keyword') || '';
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state
            try {
                const data = await searchBooks(searchQuery);
                setSearchResults(data);
            } catch (error) {
                console.error('Error searching books:', error);
                setError('An error occurred while searching. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // Fetch data when component mounts or search query changes
    }, [searchQuery]);

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Search Results
            </Typography>
            <div>
                {loading && <CircularProgress />} {/* Display loading indicator */}
                {error && <p>{error}</p>} {/* Display error message */}
                {!loading && !error && searchResults.length === 0 && <p>No results found.</p>}
				{searchResults.map((book) => (
                    <div key={book._id}>
                        <Typography variant="h6">
                            <Link to={`/book/${book._id}`}>{book.title}</Link> {/* Link to individual book page */}
                        </Typography>
                        <Typography variant="subtitle1">Author: {book.author}</Typography>
                    </div>
                ))}
            </div>
        </Container>
    );
}
