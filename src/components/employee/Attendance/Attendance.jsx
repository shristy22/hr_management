import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";

const attendance = () => {
return(
    <div style={{padding:'20px'}} className="backColor">
       <h1 style={{fontFamily:'Georgia,serif', textAlign:'center', color:'rgb(6 25 162)'}}>Welcome Shristy !!</h1>
        <Grid container spacing={6} className="gridSpace">
            <Grid item xs={12} md={4} lg={6}>
                    <Typography>
                        Attendance View
                    </Typography>      
                    <FormControl className="formControl">
                        <InputLabel>year</InputLabel>
                        <Select native >
                            <option aria-label="None" value=""/>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                        </Select>
                    </FormControl>   
                    <FormControl className="formControl">
                        <InputLabel>month</InputLabel>
                        <Select native >
                            <option aria-label="None" value=""/>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>Sept</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                        </Select>
                    </FormControl>          
                    <Button variant="outlined" size="small" color="primary" style={{marginLeft:'15px',marginTop:'20px'}}>Go</Button>
                    <hr/>
                   <table>
                       {/* <tbody> */}
                           {/* <tr style={{border:'1px solid'}}>
                               <th style={{border:'1px solid'}}>Date</th>
                               <th style={{border:'1px solid'}}>Time</th>
                           </tr> */}
                           <tr>
                               <td>1</td>
                               <td>New year's day</td>
                           </tr>
                           <tr>
                               <td>2</td>
                               <td>SATURDAY</td>
                           </tr>
                           <tr>
                               <td>3</td>
                               <td>SUNDAY</td>
                           </tr >
                           <tr>
                               <td>4</td>
                               <td>9:10</td>
                           </tr>
                           <tr>
                               <td>5</td>
                               <td></td>
                           </tr>
                           <tr>
                               <td>6</td>
                               <td>10:00</td>
                           </tr>
                           {/* </tbody> */}
                   </table>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
                <Typography>
                    Application for Leave/OD:
                </Typography> 
              <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6} >
                <span>
                    <label>Leave Balance:</label>
                    <label>Opening:</label>
                    <label>PL:</label>
                    <label>20.0</label>
                </span>   
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <span>
                    <label>As on Date</label>
                    <label>PL</label>
                    <label>20.00</label>
                    <label>CL</label>
                    <label>8.0</label> 
                </span>  
            </Grid>
        </Grid>
        </Grid>
        </Grid>
     </div>

    )
  }
export default attendance;