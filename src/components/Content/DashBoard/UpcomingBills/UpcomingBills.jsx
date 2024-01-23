import React from 'react';
import { upcomingBills } from '../../../../data/dummy';
import { styled } from '@mui/system';
import {Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow} from '@mui/material';

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'black',
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: '#CFD2CD',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
});

const UpcomingBills = () => {
  return (
    <TableContainer sx={{borderRadius: 10}}>
      <Table sx={{ minWidth: 300, height: '100%', }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Upcoming Bill Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Due Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {upcomingBills.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.dueDate}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UpcomingBills
