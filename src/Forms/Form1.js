import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useRef } from "react";

const Form1 = (props) => {
  const data = props.data;
  const business_name = useRef();
  const legal_name = useRef();

  const SubmitHandler = () => {
    const obj = {
      business_name: business_name.current.value,
      legal_name: legal_name.current.value,
      key: props.qkey,
    };
    props.UpdateHandler(obj);
  };

  return (
    <Grid container justifyContent="center">
      <Typography variant="h5" align="center" mb={3}>
        Form 2.1 a
      </Typography>
      <Grid item container xs={12} justifyContent="center" mb={3}>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Trading Name"
            variant="outlined"
            fullWidth
            defaultValue={data.business_name[0]}
            inputRef={business_name}
            // size="small"
          />
        </Grid>
      </Grid>
      <Grid item container xs={12} justifyContent="center" mb={3}>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Legal Name of Company"
            variant="outlined"
            fullWidth
            defaultValue={data.legal_name[0]}
            inputRef={legal_name}
            // size="small"
          />
        </Grid>
      </Grid>
      <Grid item container xs={12} justifyContent="center" spacing={4}>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Button
            size="small"
            variant="contained"
            onClick={() => SubmitHandler()}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form1;
