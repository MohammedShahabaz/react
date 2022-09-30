import * as React from "react";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Stack } from "@mui/system";
import { Button, Divider, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import OrganizationDetails from "../Forms/OrganizationDetails";
import Form1 from "../Forms/Form1";
import Form2 from "../Forms/Form2";
import Form3 from "../Forms/Form3";
import Form4 from "../Forms/Form4";
import axios from "axios";
import * as xlsx from "xlsx";
import excelFile from "../questions.xlsx"; //get file location url from react src folder

const ViewReport = () => {
  const [state, setState] = useState("");
  const [form, setform] = useState("");
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState("Disclosure");
  let arr = [];
  let exparr = [];

  const handleToggle = (event, nodeIds) => {
    //console.log("toggle", exparr, expanded);
    setExpanded(nodeIds);
  };
  const handleSelect = (event, nodeIds) => {
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
  };

  useEffect(() => {
    fetchtree();
  }, []);

  // get file from the imported url
  var request = new XMLHttpRequest();
  request.open("GET", excelFile, true);
  request.responseType = "arraybuffer";
  request.onload = function () {
    /* convert data to binary string */
    var data = new Uint8Array(request.response);
    var arr = new Array();
    for (var i = 0; i != data.length; ++i)
      arr[i] = String.fromCharCode(data[i]);
    data = arr.join("");

    //using xlsx library convert file to json
    const workbook = xlsx.read(data, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = xlsx.utils.sheet_to_json(worksheet);
    console.log(json);
  };
  request.send();

  const UpdateHandler = async (obj) => {
    const response = await axios.put(`http://localhost:3000/tree/question`, {
      params: {
        key: "Organization",
        label: "organization",
        cik: "0001467373",
        body: { business_name: obj.business_name, legal_name: obj.legal_name },
      },
    });
    console.log(response);
  };

  const selectHandler = async (key) => {
    setform("");
    const response = await axios.get(`http://localhost:3000/tree/question`, {
      params: {
        key: key,
        label: "question",
        cik: "0001467373",
      },
    });
    const data = await response.data;
    console.log(data);

    const val =
      Object.keys(data.formProperties._items[0]).length !== 0
        ? data.formProperties._items[0]
        : data.vertex._items[0];
    let Form;
    if (key === "Organization") {
      Form = <OrganizationDetails data={val} />;
    } else if (key === "GRI-2.1.a.1") {
      Form = <Form1 data={val} UpdateHandler={UpdateHandler} qkey={key} />;
    } else if (key === "2.1 b") {
      Form = <Form2 data={val} />;
    } else if (key === "Location") {
      Form = <Form3 data={val} UpdateHandler={UpdateHandler} />;
    } else if (key === "Country") {
      Form = <Form4 data={val} UpdateHandler={UpdateHandler} />;
    }
    setform(Form);
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
        {Object.keys(item[1].value).length !== 0 ? render(item[1].value) : null}
      </TreeItem>
    ));

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

  return (
    <Box container>
      <Stack direction="row" height="600px" justifyContent="space-between">
        <Box flex={3}>
          <br />
          <TreeView
            aria-label="rich object"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            expanded={expanded}
            //defaultExpanded={exparr}
            selected={selected}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
            sx={{
              height: 510,
              flexGrow: 1,
              maxWidth: 400,
              overflowY: "auto",
            }}
          >
            {render(state)}
          </TreeView>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box flex={6}>
          <Box mt={5} height="500px">
            {form}
          </Box>
          <Grid container spacing={5} justifyContent="space-around">
            <Button
              variant="contained"
              onClick={() => {
                Toggle("prev");
              }}
              size="small"
            >
              prev
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                Toggle("next");
              }}
              size="small"
            >
              next
            </Button>
          </Grid>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box flex={3}></Box>
      </Stack>
    </Box>
  );
};

export default ViewReport;
