import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import lodash from "lodash";
import React, { useEffect, useState } from "react";
import { getAllBorrowings, returnBookAPI } from "../api/index.js";
import Table from "../components/Table.jsx";

const Borrowings = () => {
  const [current, setCurrent] = useState([]);
  const [past, setPast] = useState([]);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(true);
  const handleReturn = async (item) => {
    try {
      let id = item.bookId._id
      const res = await returnBookAPI(id);

      if (res.success) {
        alert("Congratulations. You successfully returned this book.");
        lodash.remove(current, (obj) => lodash.isEqual(obj, item));
        setRefresh(true);
        setError("");
      } else {
        alert("Unable to return at this time");
      }
    } catch (error) {
      console.log(error);
      alert("Unable to return");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllBorrowings();
      const borrowerId = localStorage.getItem("userId");
      data = data.filter((elm) => elm.borrowerId._id === borrowerId);
      let [pastBorrowings, currentBorrowings] = lodash.partition(
        data,
        "returned"
      );
      setCurrent(currentBorrowings);
      pastBorrowings = lodash.reverse(pastBorrowings)
      setPast(pastBorrowings);
      setRefresh(false);
    };
    if (refresh) fetchData();
  }, [refresh]);
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2, marginTop: 10 }} align="left">
        My Borrowings
      </Typography>
      <Box>
        <Typography variant="h5" sx={{marginTop: "40px"}}>
          Active borrowings
        </Typography>
        {current.length <=0 ?
         <p>You have no active borrowings!</p> :
        (<Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {current.map((item) => (
              <Grid item key={`Grid${item._id}`}>
                <Card>
                  <CardMedia
                    sx={{ height: 250 }}
                    image={item.bookId.bookImageUrl}
                    title={item.bookId.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.bookId.title}
                    </Typography>
                    <Typography variant="body2">
                      Borrowed on :{" "}
                      {new Date(item.borrowDate).toLocaleDateString()}
                      <br />
                      Due date : {new Date(item.dueDate).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" href={`/book/${item.bookId._id}`}>
                      Book Details
                    </Button>
                    <Button
                      size="small"
                      onClick={() => handleReturn(item)}
                    >
                      Return Book
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            
          ))}
        </Grid>)}
      </Box>
        <Divider />
      <Typography variant="h5" sx={{marginTop: "40px"}}>
        Past borrowings
      </Typography>
          {past.length <= 0 ? (<p>You have no past borrowings!</p>) : (  <Table rows={past}/>)}
    </Box>
  );
};

export default Borrowings;
