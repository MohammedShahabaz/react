import * as React from "react";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Stack } from "@mui/system";
import {
  Button,
  Checkbox,
  Divider,
  Fade,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Popper,
  Select,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const ViewReport = () => {
  const [state, setState] = useState("");
  const [form, setform] = useState("");
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [placement, setPlacement] = React.useState();

  const popover = (newPlacement) => (event) => {
    console.log("popover");
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const fetchtree = async () => {
    const response = await fetch(`http://localhost:3000/tree/basetree`);
    const data = await response.json();
    setState(data.basetree._items[0]);
  };
  useEffect(() => {
    fetchtree();
  }, []);

  const selectHandler = (key) => {
    console.log(key);
    setform("");
    if (key === "Organization Details") {
      const data = (
        <>
          <br />
          <div className="row">
            <div className="col-lg-4 offset-1">
              {/* <form> */}
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

              {/* </form> */}
            </div>
            <div className="col-lg-1 offset-1">
              <IconButton
                // type="submit"
                color="primary"
                aria-label="search"
                size="large"
                variant="filled"
              >
                <SearchIcon fontSize="large" />
              </IconButton>
            </div>
            <div className="col-lg-1 offset-1">
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
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col offset-1">
              <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                <InputLabel id="demo-select-small">location</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
              </FormControl>
              <Checkbox />
            </div>
          </div>
          <div className="row">
            <div className="col offset-1">
              <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                <InputLabel id="demo-select-small">location</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
              </FormControl>
              <Checkbox />
            </div>
          </div>
          <div className="row">
            <div className="col offset-1">
              <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                <InputLabel id="demo-select-small">location</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
              </FormControl>
              <Checkbox />
            </div>
          </div>
        </>
      );
      setform(data);
    }
  };

  const render = (state) =>
    Object.entries(state).map((item) => (
      <TreeItem
        key={item[1].key}
        nodeId={item[1].key}
        label={item[0]}
        value={item[1].value}
        onClick={() => selectHandler(item[1].key)}
      >
        {item[1].value ? render(item[1].value) : null}
      </TreeItem>
    ));

  return (
    <Box container>
      <Stack direction="row" height="600px" justifyContent="space-between">
        <Box flex={3}>
          <br />
          <TreeView
            aria-label="rich object"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={["root"]}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: 310,
              flexGrow: 1,
              maxWidth: 400,
              overflowY: "auto",
            }}
          >
            {render(state)}
          </TreeView>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box flex={6}>{form}</Box>
        <Divider orientation="vertical" flexItem />
        <Box flex={3}></Box>
      </Stack>
    </Box>
  );
};

export default ViewReport;
