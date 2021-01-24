import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

import { Col, Form, FormGroup, Label, Input } from "reactstrap";

const AddEmployee = (props) => {
    const [oEmail, setoEmail] = React.useState('');
    const [pEmail, setpEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [empcode, setEmpcode] = React.useState('');
    const [designation, setDesignation] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [dob, setDOB] = React.useState('');
    const [phonenumber1, setPhonenumber1] = React.useState('');
    const [phonenumber2, setPhonenumber2] = React.useState('');
    const [bloodGroup, setBloodGroup] = React.useState('');
    const [maritalStatus, setMaritalStatus] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [identificationMark, setIdentificationMark] = React.useState('');



  const handleSubmit = async(e) => {
    e.preventDefault();

    const data1 = {
        employeeCode: pEmail,
        password: password
    }
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    console.log(data1);
    var data = JSON.stringify({
        "employeeCode":data1.employeeCode,
        "password":data1.password,
        "personalInfo":[{"lastName":"","firstName":"","fatherName":"","dob":"","country":"4","identificationMark":"4","bloodGroup":"","gender":"","maritalStatus":""}],
        "contactDetails":[{"officialemail":"","personalEmail":"4","phonenumber1":"","phonenumber2":""}],
        "socialDetails":[{"linkdn":"","facebook":"4","twitter":""}],"employementDetail":[{"employeeCode":"","reportingManager":"","dateOfJoining":"4","dateOfConfirmation":"","department":"","designation":"","location":""}],
        "bankDetail":[{"accountNumber":"4","name":"","bankName":"","operationType":"4","ifscCode":""}]});
    
    var config = {
      method: 'post',
      url: 'https://87b4642c4a21.ngrok.io/empRegister',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
        alert('employee details added');
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  if(props.showAddemployee){
    return(
        <div>
        <Grid item xs={6} md={12} lg={10} style={{ marginTop: "30px", marginLeft:'20px' }}>
          <Form id="form" onSubmit={handleSubmit}>
            <div>
                 <h4>Employee Login Details</h4>
                 <div style={{border:'1px solid rgb(6 25 162)',
                                boxShadow:'5px 9px 10px #888888',
                                marginTop:'20px',
                                padding: '20px'}}>                    
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2} md={2} lg={2}>Empcode </Label>
                            <Col sm={8}>
                                <Input
                                type="empcode"
                                name="empcode"
                                id="empcode"
                                placeholder="employee code"
                                value={empcode}
                                onChange={(e) => setEmpcode(e.target.value)}
                                //   onChange={setValue(email)}
                                // ref={emailI}
                                />
                            </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label for="Password" sm={2} md={2} lg={2}>
                                Password
                            </Label>
                            <Col sm={8}>
                                <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password" 
                                value={password}
                            onChange={(e) => setPassword(e.target.value)}
                                //   ref={passwordI}
                                />
                            </Col>
                            </FormGroup>
                    </div>
            </div>

            <div style={{marginTop:'20px'}}>
                <h4>Contact Details</h4>
                <div style={{border:'1px solid rgb(6 25 162)',
                         boxShadow:'5px 9px 10px #888888',
                         marginTop:'20px',
                         padding: '20px',}}>
                    <FormGroup row>
                    <Label for="exampleSelect" sm={2} md={2} lg={2}>
                        Official Email
                    </Label>
                    <Col sm={8}>
                    <Input
                        type="email"
                        name="omail"
                        id="omail"
                        placeholder="office email "
                        value={oEmail}
                        onChange={(e) => setoEmail(e.target.value)}
                        //   onChange={setValue(email)}
                        // ref={emailI}
                        />
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="examplePassword" sm={2} md={2} lg={2}>
                        Personal Email
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="email"
                        name="pemail"
                        id="pemail"
                        placeholder="other email"
                        value={pEmail}
                        onChange={(e) => setpEmail(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="examplePassword" sm={2} md={2} lg={2}>
                        Phone Number
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="number"
                        name="phNumber1"
                        id="phnumber1"
                        placeholder="phone no"
                        value={phonenumber1}
                        onChange={(e) => setPhonenumber1(e.target.value)}
                        />
                    </Col>
                    </FormGroup> 
                    <FormGroup row>
                    <Label for="exampleDate" sm={2} md={2} lg={2}>
                        Other Phone Number 
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="number"
                        name="phNumber1"
                        id="phNumber1"
                        placeholder="other phone no"
                        value={phonenumber2}
                        onChange={(e) => setPhonenumber2(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
           </div>
           </div>

         

            <div style={{marginTop:'20px'}}>
                <h4>Personal Details</h4>
                <div style={{border:'1px solid rgb(6 25 162)',
                         boxShadow:'5px 9px 10px #888888',
                         marginTop:'20px',
                         padding: '20px',}}>
                             <FormGroup row>
                    <Label for="examplePassword" sm={2} md={2} lg={2}>
                        First Name
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="firstName"
                        name="firstName"
                        id="firstnme"
                        // placeholder="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="examplePassword" sm={2} md={2} lg={2}>
                        Last Name
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="lastName"
                        name="lastName"
                        id="lastname"
                        // placeholder="lastName "
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="exampleSelect" sm={2} md={2} lg={2}>
                        Blood Group
                    </Label>
                    <Col sm={8}>
                    <Input
                        type="blood group"
                        name="blood gropu"
                        id="blood"
                        // placeholder="blood group "
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="exampleSelect" sm={2} md={2} lg={2}>
                        Country
                    </Label>
                    <Col sm={8}>
                    <Input
                        type="blood group"
                        name="blood gropu"
                        id="blood"
                        // placeholder="blood group "
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="exampleSelect" sm={2} md={2} lg={2}>
                        Identification Mark
                    </Label>
                    <Col sm={8}>
                    <Input
                        type="blood group"
                        name="blood gropu"
                        id="blood"
                        // placeholder="blood group "
                        value={identificationMark}
                        onChange={(e) => setIdentificationMark(e.target.value)}
                        
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="exampleSelect" sm={2} md={2} lg={2}>
                        Marital Status                   
                    </Label>
                    <Col sm={8}>
                    <Input
                        type="blood group"
                        name="blood gropu"
                        id="blood"
                        // placeholder="blood group "
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                        
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="exampleSelect" sm={2} md={2} lg={2}>
                        Gender
                    </Label>
                    <Col sm={4}>
                        <Label check style={{ marginLeft: "25px" }}>
                        <Input type="radio" name="radio1" /> Male
                        </Label>
                    </Col>
                    <Col sm={4}>
                        <Label check>
                        <Input type="radio" name="radio1" /> Female
                        </Label>
                    </Col>
                    </FormGroup>

                     
                    <FormGroup row>
                    <Label for="exampleDate" sm={2} md={2} lg={2}>
                        Date Of Birth
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="date"
                        name="dob"
                        id="exampleDate"
                        placeholder="date placeholder"
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                  
           </div>
           </div>

           <div style={{marginTop:'20px'}}> 
                <h4>Employee Details</h4>
                <div style={{border:'1px solid rgb(6 25 162)',
                         boxShadow:'5px 9px 10px #888888',
                         marginTop:'20px',
                         padding: '20px'}}>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2} md={2} lg={2}>
                            Designation
                        </Label>
                        <Col sm={8}>
                            <Input
                            type="name"
                            name="date"
                            id="exampleDate"
                            placeholder=""/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2} md={2} lg={2}>
                            Department
                        </Label>
                        <Col sm={8}>
                            <Input
                            type="name"
                            name="date"
                            id="exampleDate"
                            placeholder=""/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2} md={2} lg={2}>
                            Team
                        </Label>
                        <Col sm={8}>
                            <Input
                            type="name"
                            name="date"
                            id="exampleDate"
                            placeholder=""/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2} md={2} lg={2}>
                            Reporting Manager
                        </Label>
                        <Col sm={8}>
                            <Input
                            type="name"
                            name="date"
                            id="exampleDate"
                            placeholder=""/>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label for="exampleDate" sm={2} md={2} lg={2}>
                            Date of Joining
                        </Label>
                        <Col sm={8}>
                            <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder=""
                            // value={doj}
                            // onChange={(e) => setDoj(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleDate" sm={2} md={2} lg={2}>
                            Date of Confirmation
                        </Label>
                        <Col sm={8}>
                            <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder=""
                            // value={doj}
                            // onChange={(e) => setDoj(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleDate" sm={2} md={2} lg={2}>
                            Date of Termination
                        </Label>
                        <Col sm={8}>
                            <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                            // value={dot}
                            // onChange={(e) => setDot(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2} md={2} lg={2}>
                            Location
                        </Label>
                        <Col sm={8}>
                            <Input
                            type="location"
                            name="location"
                            id="location"
                            placeholder="posted location"/>
                        </Col>
                    </FormGroup> 

                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 5 }}>
                        <Button color="primary" variant="contained" type="submit">
                        Submit
                        </Button>
                    </Col>
                    </FormGroup>
            </div>
            </div>

            <div style={{marginTop:'20px'}}> 
                <h4>Bank Details</h4>
                <div style={{border:'1px solid rgb(6 25 162)',
                         boxShadow:'5px 9px 10px #888888',
                         marginTop:'20px',
                         padding: '20px'}}>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2} md={2} lg={2}>
                            Account Number
                        </Label>
                        <Col sm={8}>
                            <Input
                            type="name"
                            name="account-no"
                            id="account-no"
                            placeholder="account No."
                            // value={doj}
                            // onChange={(e) => setDoj(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                    <Label for="exampleDate" sm={2} md={2} lg={2}>
                        Name
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="name"
                        // value={doj}
                        // onChange={(e) => setDoj(e.target.value)}
                        />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="exampleDate" sm={2} md={2} lg={2}>
                        Bank Name
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="bank-name"
                        name="bank-name"
                        id="bank-name"
                        placeholder="bank name"
                        // value={dot}
                        // onChange={(e) => setDot(e.target.value)}
                        />
                    </Col>
                    </FormGroup> 
                    <FormGroup row>
                    <Label for="exampleDate" sm={2} md={2} lg={2}>
                        Operation Type
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="op-type"
                        name="op-type"
                        id="op-type"
                        placeholder="operation-type"
                        // value={dot}
                        // onChange={(e) => setDot(e.target.value)}
                        />
                    </Col>
                    </FormGroup> 
                    <FormGroup row>
                    <Label for="exampleDate" sm={2} md={2} lg={2}>
                        IFSC Code
                    </Label>
                    <Col sm={8}>
                        <Input
                        type="ifscCode"
                        name="ifsc"
                        id="ifsc"
                        placeholder=" ifsc"
                        // value={dot}
                        // onChange={(e) => setDot(e.target.value)}
                        />
                    </Col>
                    </FormGroup> 
                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 5 }}>
                        <Button color="primary" variant="contained" type="submit">
                        Submit
                        </Button>
                    </Col>
                    </FormGroup>
            </div>
            </div>

          </Form>
        </Grid>
        </div>
    );
  }
  else {
      return(
          <div></div>
      );
  }
    
}
export default AddEmployee;