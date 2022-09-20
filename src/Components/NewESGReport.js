import React from "react";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import SearchIcon from "@mui/icons-material/Search";

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
    <Card
      style={{
        maxWidth: 550,
        margin: "30px auto",
        padding: "5px 3px 50px 3px",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          backgroundColor="lightblue"
          align="center"
          padding="10px 0px"
        >
          New ESG Report
        </Typography>
        <br />
        <div className="row">
          <div className="col offset-2 ">
            <form>
              <TextField id="standard-basic" label="CIK" variant="standard" />

              {/* <Button size="small" variant="contained">
                search
              </Button> */}

              <IconButton
                // type="submit"
                color="primary"
                aria-label="search"
                size="large"
                variant="filled"
              >
                <SearchIcon fontSize="large" />
              </IconButton>
            </form>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-7 offset-2">
            <Autocomplete
              {...defaultProps}
              id="clear-on-escape"
              clearOnEscape
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Company Name"
                  variant="standard"
                />
              )}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          {/* <span> &emsp;</span> */}
          <div className="col-lg-7 offset-2">
            <TextField
              id="outlined-multiline-static"
              label="Address"
              multiline
              fullWidth
              rows={3}
              // defaultValue="Default Value"
              //value={value}
              // onChange={handleChange}
              disabled
            />
          </div>
          <div className="col-lg-2">
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
                    <div className="container p-3" style={{ width: "275px" }}>
                      <form>
                        <Typography
                          variant="h5"
                          backgroundColor="lightblue"
                          align="center"
                        >
                          Address
                        </Typography>

                        <div className="row mt-2">
                          <div className="col-12 ">
                            <Autocomplete
                              {...defaultProps}
                              id="clear-on-escape"
                              clearOnEscape
                              fullWidth
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Country"
                                  variant="outlined"
                                />
                              )}
                            />
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="col ">
                            <Autocomplete
                              {...defaultProps}
                              id="clear-on-escape"
                              clearOnEscape
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="State"
                                  variant="outlined"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col ">
                            <Autocomplete
                              {...defaultProps}
                              id="clear-on-escape"
                              clearOnEscape
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="City"
                                  variant="outlined"
                                />
                              )}
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
                            <span> &emsp;</span>{" "}
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
      </CardContent>
    </Card>
  );
};

export default NewESGReport;
