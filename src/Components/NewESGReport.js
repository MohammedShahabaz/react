import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";

const NewESGReport = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [placement, setPlacement] = React.useState();
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <div className="container offset-3">
      <div className="row">
        <div className="col ">
          <form>
            <TextField id="standard-basic" label="CIK" variant="standard" />
            <span> &emsp;</span>
            <Button size="small" variant="contained">
              search
            </Button>
          </form>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-4 ">
          <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params) => (
              <TextField {...params} label="Company Name" variant="standard" />
            )}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-5 ">
          <TextField id="outlined-basic" label="Address 1" variant="outlined" />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-5 ">
          <TextField id="outlined-basic" label="Address 2" variant="outlined" />
        </div>
      </div>
      <div className="row">
        <div className="offset-3">
          <IconButton
            onClick={handleClick("right-start")}
            color="primary"
            aria-label="delete"
            size="large"
          >
            <AddCircleOutlineIcon fontSize="large" />
          </IconButton>

          <Popper
            open={open}
            anchorEl={anchorEl}
            placement={"right"}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={200}>
                <Paper>
                  <div className="container p-3">
                    <form>
                      <h4>Add Address</h4>
                      <div className="row">
                        <div className="col ">
                          <TextField
                            id="outlined-basic"
                            label="Address 1"
                            variant="outlined"
                          />
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col ">
                          <TextField
                            id="outlined-basic"
                            label="Address 2"
                            variant="outlined"
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col">
                          <Button
                            size="small"
                            onClick={() => setOpen(!open)}
                            variant="contained"
                          >
                            cancel
                          </Button>
                        </div>
                        <div className="col">
                          <Button size="small" variant="contained">
                            add
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </div>
    </div>
  );
};

export default NewESGReport;
