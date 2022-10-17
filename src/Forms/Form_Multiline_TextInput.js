import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

const Form6 = (props) => {
  return (
    <Grid container justifyContent="center">
      {/* <Typography variant="h6" align="center">
     
        {props.data[0]}
      </Typography> */}

      <Grid item container xs={12} ml={3} mb={4}>
        <Grid item xs={10} ml={3}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            fullWidth
            rows={3}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Form6;
