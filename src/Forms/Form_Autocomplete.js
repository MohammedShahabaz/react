import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

const Form_Autocomplete = (props) => {
  const data = props.data;
  const top100Films = [
    { label: "partnership " },
    { label: "sole" },
    { label: "proprietorship" },
    { label: "association" },
    { label: "charity" },
    { label: "incorporation" },
    { label: "nonprofit" },
    { label: "other" },
    { label: "private" },
    { label: "public" },
  ];

  return (
    <Grid container justifyContent="center">
      {/* <Typography variant="h6" align="center" mb={3}>
      
      {props.data[0]}
      </Typography> */}

      {/* <Grid item container xs={12} justifyContent="center">
        <Grid item xs={5}>
          


<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Nature of Ownership" />}
    />



        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Form_Autocomplete;
