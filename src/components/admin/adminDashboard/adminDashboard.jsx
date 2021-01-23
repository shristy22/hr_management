import React, {useState, useEffect} from 'react';
import { Typography} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import  './adminDashboard.css';
import { useHistory } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';


const AdminDashboard = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const history = useHistory();

    const myprofile = () => {
        history.push("/myprofile");
    }
    const payroll = () => {
        history.push("/payroll");
    }
    const attendance = () => {
        history.push("/attendance");
    }
    // const loans = () => {
    //     history.push("/loans");
    // }
    // const empbenefits = () => {
    //     history.push("/empBenefits");
    // }
    // const holidays = () => {
    //     history.push("/holidays");
    // }
    // const faq = () => {
    //     history.push("/faq");
    // }
    return (
     <div className="backColor">
       {/* <h1 style={{fontFamily:'Georgia,serif', textAlign:'center', color:'rgb(6 25 162)'}}>Welcome Shristy !!</h1> */}
       <AppBar position="sticky" className="topColor">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:'1', textAlign:'center'}}>
                    Company Portal
                </Typography> 
                <Button>Increment</Button>
                <Button>Decrement</Button>           
           
            </Toolbar>
        </AppBar>
        <Grid container spacing={6} className="gridSpace">
            <Grid item xs={6} md={2} lg={2} className="tabStyle">
                <Tabs orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        // className="tabStyle"
                    >
                    <Tab label="Add employee" 
                    // {...a11yProps(0)}
                    />
                    <Tab label="View employee" 
                    // {...a11yProps(0)}
                    />
                    <Tab label="View Attendance" 
                    // {...a11yProps(0)}
                    />
                    <Tab label="Salary Approve" 
                    // {...a11yProps(0)}
                    />
                    <Tab label="Employee benefits Approve" 
                    //{...a11yProps(0)}
                    />
                    <Tab label="Loans Approve" 
                    // {...a11yProps(0)}
                    />
                    
                </Tabs>
            </Grid>
            <Grid item xs={6} md={10} lg={10} style={{marginTop: '30px'}} >
            <Form>
            <FormGroup row>
                <Label for="exampleEmail" sm={2} md={2} lg={2}>Email</Label>
                <Col sm={8}>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examplePassword" sm={2} md={2} lg={2}>Password</Label>
                <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2} md={2} lg={2}>Account Access</Label>
                <Col sm={8}>
                <Input type="select" name="select" id="exampleSelect" placeholder="select">
                    <option hidden  value="hi">select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2} md={2} lg={2}>Role</Label>
                <Col sm={8}>
                <Input type="select" name="select" id="exampleSelect">
                <option hidden  value="hi">select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </Col>
             </FormGroup>
             <FormGroup row>
                <Label for="exampleSelect" sm={2} md={2} lg={2}>Gender
                </Label>
                <Col sm={4}>
                <Label check style={{marginLeft:'25px'}}>
                     <Input type="radio" name="radio1" />{' '} Male
                </Label>
                </Col>
                <Col sm={4}>
                <Label check>
                      <Input type="radio" name="radio1" />{' '} Female
                </Label>
                </Col>
             </FormGroup>

            <FormGroup row>
                <Label for="examplePassword" sm={2} md={2} lg={2}>First Name</Label>
                <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examplePassword" sm={2} md={2} lg={2}>Middle Name</Label>
                <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examplePassword" sm={2} md={2} lg={2}>Last Name</Label>
                <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleDate" sm={2} md={2} lg={2}>Date</Label>
                <Col sm={8}>
                <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examplePassword" sm={2} md={2} lg={2}>Contact No</Label>
                <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examplePassword" sm={2} md={2} lg={2}>Employee Code</Label>
                <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="exampleSelect" sm={2} md={2} lg={2}>Department</Label>
                <Col sm={8}>
                <Input type="select" name="Select" id="exampleSelect">
                <option hidden  value="hi">select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </Col>
      </FormGroup>
      <FormGroup row>
                <Label for="exampleSelect" sm={2} md={2} lg={2}>Position</Label>
                <Col sm={8}>
                <Input type="select" name="select" id="exampleSelect">
                <option hidden  value="hi">select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </Col>
      </FormGroup>
      <FormGroup row>
                <Label for="exampleDate" sm={2} md={2} lg={2}>Date of joining</Label>
                <Col sm={8}>
                <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleDate" sm={2} md={2} lg={2}>Date of Termination</Label>
                <Col sm={8}>
                <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"/>
                </Col>
            </FormGroup>
             <FormGroup check row>
                <Col sm={{ size: 10, offset: 5 }}>
                <Button color="primary" variant="contained">Submit</Button>
                </Col>
             </FormGroup>
            </Form>
         </Grid>
      </Grid>
     </div>
    )
 }
export default AdminDashboard;