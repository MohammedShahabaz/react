import React from "react";
import { useHistory } from "react-router-dom";
import CustomizedTables from "../UI/Table";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";

const Home = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/addnewreport");
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-8 mt-5 ml-5">
          <CustomizedTables />
        </div>
      </div>
      <div className="row offset-8 col-lg-1">
        <IconButton
          onClick={() => clickHandler()}
          color="primary"
          aria-label="delete"
          size="large"
        >
          <AddCircleOutlineIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
