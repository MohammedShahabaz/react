/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import Box from "@mui/material/Box";

import { Stack } from "@mui/system";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

// web.cjs is required for IE11 support

//import OrganizationDetails from "../Forms/OrganizationDetails";

import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import IconButton from "@mui/material/IconButton";
import Tree from "./Components/Tree";
// import Form_Text_input from "../Forms/Form_Text_Input";
// import Form_Autocomplete from "../Forms/Form_Autocomplete";
// import Form_Radio_Group from "../Forms/Form_Radio_Group";
// import Form_date_input from "../Forms/Form_Date_Input";
// import Form_Multiline_TextInput from "../Forms/Form_Multiline_TextInput.js";
// import Form_Grid_Structure from "../Forms/Form_Grid_Structure";
// import Form_Checkbox_Input from "../Forms/Form_Checkbox_Input";

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

    const val =
      Object.keys(data.formProperties._items[0]).length !== 0
        ? data.formProperties._items[0]
        : data.vertex._items[0];

    setQuestion(Object.keys(val));

    setform("");
    // data={data.vertex._items[0]}
    // let Form;
    // if (key === "Organization") {
    //   Form = <OrganizationDetails  />;
    // } else if (key === "GRI-2.1.a.1") {
    //   Form =
    // <Form1
    //   data={Object.keys(val)}
    //   UpdateHandler={UpdateHandler}
    //   qkey={key}
    // />
    // eslint-disable-next-line react/jsx-pascal-case
    //   <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} className="View_Report"/>

    // } else if (key === "GRI-2.1.a.2") {
    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />
    // } else if (key === "GRI-2.1.b.1") {
    //   Form = (
    //     <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>
    //   );
    // }else if (key === "GRI-2.1.c.1") {
    //   Form = (
    //     <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />
    //   );
    // }else if (key === "GRI-2.1.d.1") {
    //   Form = (
    //     <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />
    //   );
    // }else if (key === "GRI-2.2.a.1") {

    //   Form =  <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // } else if (key === "GRI-2.2.b.1") {

    //   Form = <Form_Multiline_TextInput data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.2.b.2") {

    //   Form = <Form_Multiline_TextInput data={Object.keys(val)}/>;

    // } else if (key === "GRI-2.2.c.1") {

    //   Form = <Form_Radio_Group  data={Object.keys(val)}/>;

    // } else if (key === "GRI-2.2.c.1.i") {

    //   Form = <Form_Multiline_TextInput data={Object.keys(val)}/>;

    // } else if (key === "GRI-2.2.c.1.ii") {

    //   Form = <Form_Multiline_TextInput data={Object.keys(val)}/>;

    // } else if (key === "GRI-2.2.c.1.iii") {

    //   Form = <Form_Multiline_TextInput data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.3.a.1") {

    //   Form = <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.3.b.1") {

    //   Form = <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.3.c.1") {

    //   Form = <Form_date_input data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.3.d.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.4.a.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.4.a.1.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.4.a.1.ii") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.5.a.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.5.b.1") {

    //   Form = <Form_Radio_Group  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.5.b.1.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.5.b.1.ii") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.5.b.1.iii") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.6.a.1") {

    //   Form = <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.6.b.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.6.b.1.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.6.b.1.ii") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.6.b.1.iii") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.6.c.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.6.d.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.7.a.1.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.7.a.1.ii") {

    //   Form = <Form_Radio_Group  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.a.1.iii") {

    //   Form = <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.1.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.7.b.1.ii") {

    //   Form = <Form_Radio_Group  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.1.iii") {

    //   Form = <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.2.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.7.b.2.ii") {

    //   Form = <Form_Radio_Group  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.2.iii") {

    //   Form = <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.3.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.7.b.3.ii") {

    //   Form = <Form_Radio_Group  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.3.iii") {

    //   Form = <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.4.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.7.b.4.ii") {

    //   Form = <Form_Radio_Group  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.4.iii") {

    //   Form = <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.5.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.7.b.5.ii") {

    //   Form = <Form_Radio_Group  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.b.5.iii") {

    //   Form = <Form_Autocomplete  UpdateHandler={UpdateHandler}  data={Object.keys(val)}/>;

    // }else if (key === "GRI-2.7.c.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.7.d.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.7.e.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.8.a.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.8.c.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.9.a.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.9.a.2") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.9.b.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.10.a.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-2.10.b.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.1.a.1") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.1.a.2") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.1.a.3") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.1.b.1") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.1.b.2") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.1.b.3") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.3.a.1") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.3.b.1") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.3.c.1") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.3.d.1") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-401.3.e.1") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-402.1.a.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;;

    // }else if (key === "GRI-402.1.b.1") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;;

    // }else if (key === "GRI-403.1.a.1") {

    //   Form = <Form_Radio_Group data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;;

    // }else if (key === "GRI-403.1.a.1.i") {

    //   Form = <Form_Autocomplete data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;;

    // }else if (key === "GRI-403.1.a.1.ii") {

    //   Form = <Form_Autocomplete data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;;

    // }else if (key === "GRI-403.1.b.1") {

    //   Form = <Form_Grid_Structure data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;

    // }else if (key === "GRI-403.2.a.1.i") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;;

    // }else if (key === "GRI-403.2.a.1.ii") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;;

    // }else if (key === "GRI-403.2.a.1.iii") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;;

    // }else if (key === "GRI-403.2.a.1.iv") {

    //   Form = <Form_Text_input data={Object.keys(val)} UpdateHandler={UpdateHandler} qkey={key} />;;

    //}

    // else if (key === "Country") {
    //   Form = (
    //     <Form5  UpdateHandler={UpdateHandler} />
    //   );
    // }
    //setform(Form);
  };
  //arr.push(item[1].key);  //setExpanded((oldArray) => [...oldArray, item[1].key]);

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
          <Box mt={5} height="70%">
            <Typography variant="h6" align="center" px={3} mb={3}>
              {Question}
            </Typography>
            {form}
          </Box>
        </Box>
        {/* <Divider orientation="vertical" flexItem />
        <Box flex={3} sx={{overflowY:'scroll',height:'70%'}}></Box> */}
      </Stack>
    </Box>
  );
};

export default ViewReport;
