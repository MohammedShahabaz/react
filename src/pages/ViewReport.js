/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Stack } from "@mui/system";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

// web.cjs is required for IE11 support

//import OrganizationDetails from "../Forms/OrganizationDetails";

import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import IconButton from "@mui/material/IconButton";
import Tree from "./Components/Tree";
import Form_Text_input from "../Forms/Form_Text_input";
import Form_Autocomplete from "../Forms/Form_Autocomplete";
// import Form_Radio_Group from "../Forms/Form_Radio_Group";
// import Form_date_input from "../Forms/Form_Date_Input";
import Form_Multiline_TextInput from "../Forms/Form_Multiline_TextInput.js";
// import Form_Grid_Structure from "../Forms/Form_Grid_Structure";
// import Form_Checkbox_Input from "../Forms/Form_Checkbox_Input";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import axios from "axios";
const ViewReport = () => {
  const [state, setState] = useState("");
  const [form, setform] = useState("");
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState("Disclosure");
  const [Question, setQuestion] = useState();
  let arr = [];
  let exparr = [];

  const handleToggle = (event, nodeIds) => {
    //console.log("toggle", exparr, expanded);
    setExpanded(nodeIds);
  };
  const handleSelect = (event, nodeIds) => {
    //console.log(nodeIds);
    setSelected(nodeIds);
  };
  const Toggle = (type) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === selected) {
        if (type === "next" && i !== arr.length - 1) {
          setSelected(() => arr[i + 1]);
          selectHandler(arr[i + 1]);
          return;
        } else if (type === "prev" && i !== 0) {
          setSelected(() => arr[i - 1]);
          selectHandler(arr[i - 1]);
          return;
        }
      }
    }
  };
  const fetchtree = async () => {
    const response = await fetch(`http://localhost:3000/tree/basetree`);
    const data = await response.json();
    setState(data.basetree._items[0]);
    //console.log(data.basetree._items[0]);
  };

  useEffect(() => {
    fetchtree();
  }, []);

  const UpdateHandler = async (obj) => {
    const response = await axios.put(`http://localhost:3000/tree/question`, {
      params: {
        Key: "Organization",
        label: "organization",
        cik: "0001467373",
        body: { business_name: obj.business_name, legal_name: obj.legal_name },
      },
    });
    console.log(response);
  };

  const selectHandler = async (key) => {
    const response = await axios.get(`http://localhost:3000/tree/question`, {
      params: {
        key: key,
        label: "question",
        cik: "0001467373",
      },
    });
    // .then(function (response) {
    //   console.log(response.data);
    //   console.log(response.data.formProperties._items[0].business_name[0]);
    //   console.log(response.data.vertex._items[0]);
    // });
    const data = await response.data;
    console.log(data);

    setform("");
    const question = data.formProperties._items[0].Question[0];
    setQuestion(question);
    let Form;
    const FieldType = data.formProperties._items[0].FieldType[0];
    if (FieldType === "Text Field") {
      Form = <Form_Text_input qn={question} />;
    } else if (FieldType === "Drop Down") {
      Form = <Form_Autocomplete qn={question} />;
    }

    setform(Form);
  };

  const getkeys = (state) => {
    Object.entries(state).map((item) => {
      arr.push(item[1].key);
      if (Object.keys(item[1].value).length !== 0) {
        exparr.push(item[1].key);
        getkeys(item[1].value);
      }
    });
  };

  getkeys(state);

  //console.log(arr, exparr);

  return (
    <Box container>
      <Stack direction="row" height="600px" justifyContent="space-between">
        <Box flex={2}>
          <Tree
            data={state}
            selected={selected}
            handleSelect={handleSelect}
            selectHandler={selectHandler}
          />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box flex={6} sx={{ overflowY: "scroll" }}>
          <Grid
            container
            mt={0}
            backgroundColor="#F3F3F3"
            justifyContent="space-between"
            p={0}
          >
            {" "}
            <Grid item md={10}></Grid>
            <Grid
              item
              xs={6}
              md={6}
              justifyContent="flex-start"
              sx={{ padding: 2 }}
            >
              <Breadcrumbs
                aria-label="breadcrumb"
                onClick={handleToggle}
                sx={{ color: "black" }}
              >
                <Link underline="hover" color="inherit" href="/">
                  Disclosure
                </Link>
                {selected === "Disclosure" ? (
                  ""
                ) : (
                  <Link
                    underline="hover"
                    color="inherit"
                    // href="/material-ui/getting-started/installation/"
                    aria-current="page"
                  >
                    {selected}
                  </Link>
                )}

                {/* <Link
                  underline="hover"
                  color="text.primary"
                  // href="/material-ui/react-breadcrumbs/"
                  aria-current="page"
                >
                  Breadcrumbs
                </Link> */}
              </Breadcrumbs>
            </Grid>
            <Grid container item md={2} justifyContent="flex-end">
              <IconButton
                onClick={() => {
                  Toggle("prev");
                }}
                color="primary"
              >
                <ArrowCircleLeftRoundedIcon
                  fontSize="large"
                  sx={{ color: "black" }}
                />
              </IconButton>
              <IconButton
                onClick={() => {
                  Toggle("next");
                }}
                color="primary"
              >
                <ArrowCircleRightRoundedIcon
                  fontSize="large"
                  sx={{ color: "black" }}
                />
              </IconButton>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" flexItem />
          <Box m={3} height="70%">
            {/* <Typography variant="h6" align="center" px={3} mb={3}>
              {Question}
            </Typography> */}
            <Grid container item md={12} spacing={3}>
              <Grid item md={7}>
                {Question ? (
                  <Paper elevation={3} sx={{ minWidth: 275 }}>
                    <Typography
                      fontWeight="regular"
                      fontSize={15}
                      color={"black"}
                      p={2}
                    >
                      {Question}
                    </Typography>
                  </Paper>
                ) : (
                  ""
                )}
              </Grid>
              <br />
              <Grid item md={7}>
                {Question && (
                  <Paper elevation={3} sx={{ minWidth: 275 }}>
                    {form}
                    <Typography
                      fontWeight="bold"
                      fontSize={16}
                      color={"black"}
                      p={2}
                      ml={4}
                    >
                      Description:
                    </Typography>
                    <Form_Multiline_TextInput />
                  </Paper>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Divider orientation="vertical" flexItem />
        <Box flex={3} sx={{overflowY:'scroll',height:'70%'}}></Box> */}
      </Stack>
    </Box>
  );
};

export default ViewReport;
