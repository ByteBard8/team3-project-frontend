import {useState, useEffect} from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Chip from "@mui/material/Chip";
import Button from "../components/Button.jsx";
import { getBookByIDAPI, borrowBookAPI, returnBookAPI } from '../api/index.js';
import { useParams } from 'react-router-dom';
export default function Book() {
  const {id} = useParams();
  const [itemData, setItemData] = useState({});
  const [isBorrowed, setBorrowed] = useState(false);
  const [error, setError] = useState('');
  const [alertShown, showAlert] = useState(false);
  const handleBorrow = async () => {
    try {
      const res = await borrowBookAPI(id);
      if (res.success) {
        showAlert("Congratulations. You are now borrowing this book.");
        setBorrowed(true);
        setError('');
      }  else {
        setError('Unable to borrow at this time');
      } 
    } catch (error) {
      console.log(error)
      setError('Unable to borrow');
    }
  };

  const handleReturn = async () => {
    try {
      const res = await returnBookAPI(id);
      if (res.success) {
        showAlert("Congratulations. You successfully returned this book.");
        setBorrowed(false);
        setError('');
      }  else {
        setError('Unable to return at this time');
      } 
    } catch (error) {
      console.log(error)
      setError('Unable to return');
    }
  };

  useEffect(() => {
   const fetchData = async () => {
      const data = await getBookByIDAPI(id);
      setItemData(data);
      data.available ? setBorrowed(false) : setBorrowed(true);
    }
    fetchData();
  }, [id,isBorrowed]);

  if (itemData._id) {
    return (
        <>
        <Typography variant="h2" sx={{ mb: 2 }} align="left">
        Book
    </Typography>
    {alertShown ? (<Alert sx={{margin: 2}} icon={<CheckIcon fontSize="inherit" />} severity="success" onClose={() => {showAlert(false)}}>
      {alertShown}
    </Alert>) : null}
    <Stack direction="row" spacing={20}>
    <img src={itemData.bookImageUrl} height="326" width="338"/>
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
    <Chip label={itemData.genre} color="success" />
    {/* <Typography align="left"> 
{itemData.available ? 0 : itemData.quantity_available | 0} copies available
    </Typography> */}
      </Box>
    <Button buttontext="Summary" />
    <Button buttontext="Review" />
    {(isBorrowed && itemData.latestBorrowing) ? (<Button onClick={handleReturn} buttontext="Return book" />) && localStorage.getItem('userId') === itemData.latestBorrowing.borrowerId: null } 
     {error}
     {itemData.available ? (<Button onClick={handleBorrow} buttontext="Borrow Now" />) : (<Button disabled buttontext="Not available for Borrow" />)}
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