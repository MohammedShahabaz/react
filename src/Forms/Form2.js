import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
const Form2 = () => {
  return (
    <Grid container spacing={5} justifyContent="center">
      <Typography variant="h5" align="center">
        Form 2.1 b
      </Typography>
      <Grid item container xs={12} justifyContent="center">
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Nature of Ownership"
            variant="outlined"
            fullWidth
            // size="small"
          />
        </Grid>
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <Grid item xs={5}>
          {/* <TextField
            id="outlined-basic"
            label="Legal Form Of the Organization"
            variant="outlined"
            fullWidth
            // size="small"
          />  */}
          <Typography variant="h6" align="center">
            Legal Form Of the Organization
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Form2;
