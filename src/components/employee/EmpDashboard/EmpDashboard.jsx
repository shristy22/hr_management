import React, { useState, useEffect } from "react";
import Layout from "./../../common/Layout/Layout";
import "./EmpDashboard.css";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Button from "@material-ui/core/Button";
import Calendar from 'react-calendar';


const EmpDashboard = () => {
  const [value, setValue] = React.useState(0);
  const [value1, onChange] = useState(new Date());


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
        <Grid container spacing={4}>
        <Grid item xs={6} md={6} lg={6} className="box border primary">
           <div className="box-title">
               <AccessTimeIcon/>
               <span>Time and Attendance</span>
           </div>
           <div style={{overflow:'visible'}} >
                <div className="calender">
                    <div className="cal-top">
                        <div className="absent-icon"></div>
                        <span>Absent</span>
                    </div> 
                    <div className="cal-top">
                        <div className="leave-applied-icon"></div>
                        <span>Leave Applied</span>
                    </div>
                    <div className="cal-top">
                        <div className="half-day-icon"></div>
                        <span>Half Day</span>
                    </div>
                    <div className="cal-top">
                        <div className="leave-appr-icon "></div>
                        <span>Leave Approved</span>
                    </div>
                    <div className="cal-top">
                        <div className="present-icon "></div>
                        <span>Present</span>
                    </div>
                    <div className="cal-top">
                        <div className="outdoor-appr-icon "></div>
                        <span>Outdoor Approved</span>
                    </div>
                </div>
                <div className="calender-left">
                    <div style={{display:'flex'}}>        
                        <p>January 2021</p>
                        <Button color="primary" variant="outlined" type="button" size="small">
                              Holidays
                        </Button>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="calender-right">
                    <div className="panel panel-default">
                        <div className="absent-label">
                            <span>Absent in current month</span>
                        </div>
                    </div>
                    <Button color="primary" variant="outlined" type="button" size="small">
                              Sick Leave
                        </Button>
                        <Button color="primary" variant="outlined" type="button" size="small">
                              Casual Leave
                        </Button>
                    
                </div>
            </div>
        </Grid>

        <Grid item xs={6} md={6} lg={6}>
            <PersonOutlineIcon/>
            <span>Employee Connect</span>
       
        </Grid>
        </Grid>
       
       
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar
            onChange={onChange}
            value={value1}
          />
        </main>
      </div>
    
        </div>

  );
};
export default EmpDashboard;
