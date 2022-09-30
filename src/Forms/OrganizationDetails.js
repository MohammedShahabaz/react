import React from "react";
import {
  Button,
  Checkbox,
  Divider,
  Fade,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Popper,
  Select,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";

const OrganizationDetails = (props) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [placement, setPlacement] = React.useState();

  const popover = (newPlacement) => (event) => {
    console.log("popover");
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };
  const data = props.data;

  return (
    <Grid container justifyContent="center">
      <Typography variant="h5" align="center" mb={3}>
        Organization Details
      </Typography>
      <Grid
        item
        container
        justifyContent="space-around"
        alignItems="center"
        md={12}
        mb={3}
      >
        {/* <form> */}
        <Grid item md={4}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            size="small"
            renderInput={(params) => (
              <TextField {...params} label="Organization" />
            )}
          />
        </Grid>
        <Grid item md={1} offset={1}>
          <IconButton
            // type="submit"
            color="primary"
            aria-label="search"
            size="large"
            variant="filled"
          >
            <SearchIcon fontSize="large" />
          </IconButton>
        </Grid>
        {/* </form> */}

        <Grid item md={3}>
          <Button variant="contained">Assign</Button>
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement={"right"}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={200}>
                <Paper>
                  <div className="container p-3" style={{ width: "275px" }}>
                    <form>
                      <Typography variant="h5" align="center">
                        Assign To
                      </Typography>

                      <div className="row mt-2">
                        <div className="col-12 ">
                          <Autocomplete
                            // {...defaultProps}
                            id="clear-on-escape"
                            clearOnEscape
                            fullWidth
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="email"
                                variant="outlined"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col"></div>
                        <div className="col">
                          <span> &emsp;</span>{" "}
                          <Button size="small" variant="contained">
                            assign
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Paper>
              </Fade>
            )}
          </Popper>
        </Grid>
      </Grid>

      <Grid item container direction="column" spacing={2} ml={5}>
        {/* <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
          <InputLabel id="demo-select-small">location</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem>10</MenuItem>
            <MenuItem>20</MenuItem>
          </Select>
        </FormControl>
        <Checkbox /> */}
        <Grid item md={4}>
          <TextField
            id="outlined-basic"
            label="Business Name"
            variant="outlined"
            defaultValue={data.business_name[0]}
            size="small"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            id="outlined-basic"
            label="Legal Name"
            variant="outlined"
            defaultValue={data.legal_name[0]}
            size="small"
          />
        </Grid>

        {/* <Grid item md={4}>
          <TextField
            id="outlined-basic"
            label="Nature of Ownership"
            variant="outlined"
            //defaultValue={data.nature_of_ownership[0]}
            size="small"
          />
        </Grid> */}
      </Grid>
      <Grid container direction="row" ml={5} item>
        {/* <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
          <InputLabel id="demo-select-small">location</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem>10</MenuItem>
            <MenuItem>20</MenuItem>
          </Select>
        </FormControl>
        <Checkbox /> */}
      </Grid>
      <Grid container direction="row" ml={5} item>
        {/* <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
          <InputLabel id="demo-select-small">location</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem>10</MenuItem>
            <MenuItem>20</MenuItem>
          </Select>
        </FormControl>
        <Checkbox /> */}
      </Grid>
    </Grid>
  );
};

export default OrganizationDetails;
