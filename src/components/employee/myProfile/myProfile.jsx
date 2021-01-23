import React, {useState, useEffect} from 'react';
import {Typography} from '@material-ui/core';
// import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import  './myProfile.css';
// import myPic from './../../assets/profile.png';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const myProfile = () => {

    return (
    <div  className="backColor">
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:'1'}}>
                        My Profile
                </Typography>
                {/* <InputLabel id="demo-simple-select-label">Select</InputLabel> */}
                <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper">
                    <MenuItem value="">
                        <em>My Profile</em>
                    </MenuItem>
                    <MenuItem>Payroll</MenuItem>
                    <MenuItem>Attendance</MenuItem>
                    <MenuItem>Loans</MenuItem>
                    <MenuItem>Employee Benefits</MenuItem>
                    <MenuItem>Holidays</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
          <div>
            <Grid container spacing={2} style={{padding:'50px', alignItems:'center'}}>
                <Grid item xs={12} md={2} lg={2}>
                    {/* <img src={myPic} class="myPic"/> */}
                </Grid>
                <Grid item xs={12} md={10} lg={10} style={{display:'flex'}}>
                    <div style={{marginLeft:'40px'}}>
                        <p>Name:</p>
                        <p>Team:</p>
                    </div>
                    <div style={{marginLeft:'10px'}}>
                        <p>Shristy</p>
                        <p>Team 1</p>
                    </div>
                    <div style={{marginLeft:'30px'}}>
                        <p>Emp. Id:</p>
                        <p>Location</p>
                    </div>
                    <div style={{marginLeft:'10px'}}>
                        <p>20186457</p>
                        <p>Chennai</p>
                    </div>
                    <div style={{marginLeft:'30px'}}>
                        <p>Designation:</p>
                        <p>Date of Joining:</p>
                    </div>
                    <div style={{marginLeft:'10px'}}>
                        <p>Full Stack</p>
                        <p>17-01-2019</p>
                    </div>
                </Grid>
            </Grid>
          </div>     
    </div>
    )
 }
export default myProfile;

// const top100Films = [
//     { title: 'The Shawshank Redemption', year: 1994 },
//     { title: 'The Godfather', year: 1972 }
// ];