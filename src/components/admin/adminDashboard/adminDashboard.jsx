import React, { useState, useEffect } from "react";
import Piechart from './../../charts/piechart'
import Grid from "@material-ui/core/Grid";
import "./adminDashboard.css";
import { useHistory } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Layout from "./../../common/Layout/Layout";
import AddEmployee from './../addEmployee/addEmployee';

const AdminDashboard = () => {
    const [value, setValue] = React.useState(0);
    const [showAddemployee, setShowAddEmployee] = React.useState(0);
    const [showhomepage, setshowhomepage] = React.useState(1);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const history = useHistory();
  
    const myprofile = () => {
      history.push("/myprofile");
    };
    
  
  return (
    <div>
        <Layout/>
        <Grid container spacing={6} className="gridSpace">
        <Grid item xs={6} md={2} lg={2} className="tabStyle">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            // className="tabStyle"
          >
            <Tab
              label="Add employee"
              // {...a11yProps(0)}
              onClick={ (e) => {
                setShowAddEmployee(!showAddemployee)
                setshowhomepage(!showhomepage)}
              }
            />
            <Tab
              label="View employee"
              // {...a11yProps(0)}
            />
            <Tab
              label="View Attendance"
              // {...a11yProps(0)}
            />
            <Tab
              label="Salary Approve"
              // {...a11yProps(0)}
            />
            <Tab
              label="Employee benefits Approve"
              //{...a11yProps(0)}
            />
            <Tab
              label="Loans Approve"
              // {...a11yProps(0)}
            />
          </Tabs>
        </Grid>
        <Grid item xs={6} md={10} lg={10} style={{ marginTop: "30px" }}>
            <Piechart showhomepage = {showhomepage} width1 = {'400px'}/>
            <AddEmployee showAddemployee = {showAddemployee} />
        </Grid>
      </Grid>
    </div>
  );
};
export default AdminDashboard;
