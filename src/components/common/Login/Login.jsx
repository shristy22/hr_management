import React, {useState, useEffect} from 'react';
import  './Login.css';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const Login = ()=> {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
      };

    const history = useHistory();
    const signIn = () => {
        history.push("/adminDashboard")
    }

    return(
        <div className="container1">       
          <Grid container direction="row" justify="center">
            <div>
            <h1 style={{marginLeft:'20px', color: 'rgb(6 25 162)', fontFamily:'Georgia,serif'}}>Employee Sign In</h1>
                <div className="form1">
                <div className="tab-color">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Employee" />
                     <Tab label="Admin" />
                </Tabs>
                </div>
                  <form style={{marginLeft:'20px'}}>
                  <TextField id="standard-full-width"
                    label="Username" type="name"
                    style={{ marginTop: '30px' }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,}}/>
                    <TextField id="standard-full-width"
                    label="Employee Code" type="name"
                    style={{ marginTop: '20px' }}
                    // placeholder="password"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,}}/>
                      <TextField id="standard-full-width"
                    label="Password" type="password"
                    style={{ marginTop: '20px' }}
                    // placeholder="password"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,}}/>
                    <br/>
                    <span>
                        <Checkbox color="primary"/>
                        <label style={{marginTop:'2px'}}>Remember me</label>  
                    </span>              
                    <br/>                  
                    <Button color="primary" variant="contained" style={{marginTop:'10px', marginLeft:'10px'}}
                    onClick={signIn}>Sign In</Button> 
                    
                    
                    <span>
                        <p>Don't have an account? 
                            <Link href="#" style={{marginLeft:'5px'}}>Sign Up</Link>  
                        </p> 
                    </span> 
                  </form>
            </div>
            </div>
          </Grid>  
        </div>
    )
 }

export default Login; 

