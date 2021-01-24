import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
import "./Layout.css";
import { useHistory } from "react-router-dom";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import { Col, Form, FormGroup, Label, Input } from "reactstrap";


const Layout = () => {

  return (
    <div className="backColor">
      <AppBar position="sticky" className="topColor">
        <Toolbar>
          <Typography
            variant="h6"
            style={{ flexGrow: "1", textAlign: "center" }}
          >
            Company Portal
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Layout;
