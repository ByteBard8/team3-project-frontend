import {useState, useEffect} from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Button from "../components/Button.jsx";
import { getBookByIDAPI, borrowBookAPI } from '../api/index.js';
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
        showAlert(true);
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
      Congratulations. You are now borrowing this book.
    </Alert>) : null}
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
    {/* <Typography align="left"> 
{itemData.available ? 0 : itemData.quantity_available | 0} copies available
    </Typography> */}
      </Box>
    <Button buttontext="Summary" />
    <Button buttontext="Review" />
     {itemData.available ? (<Button onClick={handleBorrow} buttontext="Borrow Now" />) : (<Button disabled buttontext="Not available for Borrow" />)}
     {error}
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