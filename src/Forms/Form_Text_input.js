import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useRef } from "react";

const Form_Text_input = (props) => {
  const data = props.data;
  const business_name = useRef();
  const legal_name = useRef();

  console.log(data);

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
      {/* <Typography variant="h6" align="center" mb={3}>
       
        {props.data[0]}
      </Typography> */}
      {/* <Grid item container xs={12} justifyContent="center" mb={3}>
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
      </Grid> */}
      {/* <Grid item container xs={12} justifyContent="center" mb={3}>
        <Grid item xs={7}>
          <TextField
            id="outlined-basic"
            // label="Legal Name"
            variant="outlined"
            fullWidth
            // defaultValue={data.legal_name[0]}
            // inputRef={legal_name}
            // size="small"
          />
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Form_Text_input;
