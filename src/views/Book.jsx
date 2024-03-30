import {useState, useEffect} from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from "../components/Button.jsx";
import { getBookByIDAPI } from '../api/index.js';
import { useParams } from 'react-router-dom';
export default function Book() {
  const {id} = useParams();
  const [itemData, setItemData] = useState({});
  const [isBorrowed, setBorrowed] = useState(false);
  const [error, setError] = useState('');
  const handleBorrow = async () => {
    try {
      console.log('borrow success')
      setBorrowed(true);
    } catch (error) {
      console.log(error)
      setError('Unable to borrow');
    }
  };


  useEffect(() => {
   const fetchData = async () => {
      const data = await getBookByIDAPI(id);
      setItemData(data);
    }
    const fetchBorrowed = async () => {
      //need to add API here for checking if this book is actively borrowed
      // const data = await getBorrowed(id);
      
      setBorrowed(false);
    }
    fetchData();
    fetchBorrowed();
  }, [id]);

  if (itemData._id) {
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
        {itemData.title}
    </Typography>
    <Typography align="left">
    {itemData.author}</Typography>
    <Typography align="left">
      {itemData.ISBN}
</Typography>
<Typography align="left"> 
{new Date(itemData.publication_year).toDateString()}
    </Typography>
    <Typography align="left"> 
{itemData.genre}
    </Typography>
    <Typography align="left"> 
{isBorrowed ? 0 : itemData.quantity_available | 0} copies available
    </Typography>
      </Box>
    <Button buttontext="Summary" />
    <Button buttontext="Review" />
     {isBorrowed ? (<Button disabled buttontext="Not available for Borrow" />) : (<Button onClick={handleBorrow} buttontext="Borrow Now" />)}
     <Button buttontext="Add to Favorites" />
    </Stack>
    </Stack>
    </>
    )
  } else {
    return (<>
      <Typography variant="h2" sx={{ mb: 2 }} align="left">
      Book
  </Typography></>)
  }
}