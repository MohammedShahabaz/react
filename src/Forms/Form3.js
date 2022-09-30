import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRef } from "react";

const Form3 = (props) => {
  const data = props.data;

  const addtess = useRef();
  const city = useRef();
  const state_of_jurisdiction = useRef();
  const zip = useRef();

  const SubmitHandler = () => {
    const obj = {
      addtess: addtess.current.value,
      city: city.current.value,
      state_of_jurisdiction: state_of_jurisdiction.current.value,
      zip: zip.current.value,
    };
    props.UpdateHandler(obj);
  };

  return (
    <Grid container justifyContent="center">
      <Typography variant="h5" align="center" mb={3}>
        Location
      </Typography>
      <Grid
        item
        container
        direction="column"
        alignContent="center"
        md={12}
        spacing={2}
      >
        <Grid item md={4}>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            defaultValue={data.addtess[0]}
            inputRef={addtess}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            size="small"
            defaultValue={data.city[0]}
            inputRef={city}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            id="outlined-basic"
            label="State of Jurisdiction"
            variant="outlined"
            size="small"
            defaultValue={data.state_of_jurisdiction[0]}
            inputRef={state_of_jurisdiction}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignContent="center"
        md={12}
        spacing={2}
      >
        {" "}
        <Grid item md={4} mt={2}>
          <TextField
            id="outlined-basic"
            label="zip"
            variant="outlined"
            size="small"
            defaultValue={data.zip[0]}
            inputRef={zip}
          />
        </Grid>
      </Grid>
      <Grid item container xs={12} justifyContent="center" spacing={4} mt={1}>
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

export default Form3;
