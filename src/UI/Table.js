import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(ESGReport, date, PercentageComplete, Notes) {
  return { ESGReport, date, PercentageComplete, Notes };
}

const rows = [
  createData("Company Report", "12/2/2022", "60", "This is a draft report"),
  createData("Company Report", "12/2/2022", "60", "This is a draft report"),
  createData("Company Report", "12/2/2022", "60", "This is a draft report"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ESG Report</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">
              Percentage Complete
            </StyledTableCell>
            <StyledTableCell align="center">Notes</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ESGReport}>
              <StyledTableCell component="th" scope="row">
                {row.ESGReport}
              </StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>

              <StyledTableCell align="center">
                {row.PercentageComplete}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Notes}</StyledTableCell>

              <StyledTableCell align="center">
                <Button size="small" variant="contained">
                  Open
                </Button>
                <span> &emsp;</span>

                <Button size="small" variant="contained" color="error">
                  Delete
                </Button>
                <span> &emsp;</span>

                <Button size="small" variant="contained" color="warning">
                  Publish
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
