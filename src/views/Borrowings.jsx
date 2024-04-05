import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import lodash from "lodash";
import React, { useEffect, useState } from "react";
import { getAllBorrowings, returnBookAPI } from "../api/index.js";

const Borrowings = () => {
  const [current, setCurrent] = useState([]);
  const [past, setPast] = useState([]);
  const [error, setError] = useState("");
  const handleReturn = async (id) => {
    try {
      const res = await returnBookAPI(id);

      if (res.success) {
        showAlert("Congratulations. You successfully returned this book.");
        setBorrowed(false);
        setError("");
      } else {
        setError("Unable to return at this time");
      }
    } catch (error) {
      console.log(error);
      setError("Unable to return");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllBorrowings();
      const borrowerId = localStorage.getItem("userId");
      data = data.filter((elm) => elm.borrowerId._id === borrowerId);
      const [pastBorrowings, currentBorrowings] = lodash.partition(
        data,
        "returned"
      );
      setCurrent(currentBorrowings);
      setPast(pastBorrowings);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Typography variant="h2" sx={{ mb: 2, marginTop: 10 }} align="left">
        My Borrowings
      </Typography>
      <Box>
        <Typography variant="h6" gutterBottom>
          Active borrowings
        </Typography>
        <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {current.map((item) => (
            <>
              <Grid item>
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
                      onClick={() => handleReturn(item.bookId._id)}
                    >
                      Return Book
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
      <Typography variant="h6" gutterBottom>
        Past borrowings
      </Typography>
      {past.map((item) => (
        <Box
          component="a"
          key={`box-${item._id}`}
          href={`/book/${item.bookId._id}`}
        >
          <Typography key={item._id}>
            Book title: {item.bookId.title}
          </Typography>
          <Typography>
            Borrowed: {new Date(item.borrowDate).toLocaleString()}
          </Typography>
          <Typography>
            Returned: {new Date(item.returnDate).toLocaleString()}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default Borrowings;
