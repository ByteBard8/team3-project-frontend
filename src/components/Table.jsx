import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter, TablePagination, Typography } from '@mui/material';


export default function BasicTable({rows}) {
    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>Title</b></TableCell>
              <TableCell align="center"><b>Genre</b></TableCell>
              <TableCell align="center"><b>Borrowed on</b></TableCell>
              <TableCell align="center"><b>Returned on</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.bookId.title}
                </TableCell>
                <TableCell align="right">{row.bookId.genre}</TableCell>
                <TableCell align="right">{new Date(row.borrowDate).toLocaleString()}</TableCell>
                <TableCell align="right">{new Date(row.returnDate).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <Typography>
              Total <b>{rows.length}</b> borrow(s)
            </Typography>
          </TableFooter>
        </Table>
      </TableContainer>
    );
  }