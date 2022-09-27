import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRef } from "react";

const Form4 = (props) => {
  const data = props.data;

  const country_name = useRef();
  const numeric_code = useRef();
  const alpha_2_code = useRef();
  const alpha_3_code = useRef();

  const SubmitHandler = () => {
    const obj = {
      country_name: country_name.current.value,
      numeric_code: numeric_code.current.value,
      alpha_2_code: alpha_2_code.current.value,
      alpha_3_code: alpha_3_code.current.value,
    };
    props.UpdateHandler(obj);
  };

  return (
    <Grid container justifyContent="center">
      <Typography variant="h5" align="center" mb={3}>
        Country Details
      </Typography>
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        rowSpacing={3}
        columnGap={3}
      >
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            //defaultValue={data.country_name[0]}
            inputRef={country_name}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Numeric Code"
            variant="outlined"
            //defaultValue={data.numeric_code[0]}
            inputRef={numeric_code}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Alpha 2 Code"
            variant="outlined"
            //defaultValue={data.alpha_2_code[0]}
            inputRef={alpha_2_code}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Alpha 3 Code"
            variant="outlined"
            //defaultValue={data.alpha_3_code[0]}
            inputRef={alpha_3_code}
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
      {/* <Grid
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
            label="Alpha 3 Code"
            variant="outlined"
            size="small"
            defaultValue={data.alpha_3_code[0]}
          />
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Form4;
