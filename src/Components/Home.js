import React from "react";
import { useHistory } from "react-router-dom";
import StickyHeadTable from "../UI/Table";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";

const Home = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/addnewreport");
  };
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-lg-11 ">
          <StickyHeadTable />
        </div>
        <div className="col-lg-1 ">
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
    </div>
  );
};

export default Home;
