import Login from './components/common/Login/Login';
import EmpDashboard from './components/employee/EmpDashboard/EmpDashboard';
import myProfile from './components/employee/myProfile/myProfile';
import attendance from './components/employee/Attendance/Attendance';

import adminDashboard from './components/admin/adminDashboard/adminDashboard';
// import myProfile from './components/employee/myProfile/myProfile';
// import attendance from './components/employee/Attendance/Attendance';

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import {Provider} from "react-redux";
const token = '123';

const verifytoken = () =>{  
  if(token == '123')return 1;
  else return 0;
}

function Routing() {
  if(verifytoken()){
    return (
      <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
              <Redirect to="/adminDashboard" />
              </Route>
              <Route exact path="/login">
                 <Redirect to="/adminDashboard" />
              </Route>
              <Route path="/adminDashboard" component={adminDashboard} />
              <Route path="/empDashboard" component={EmpDashboard} />
              <Route path="/myProfile" component={myProfile} />
              <Route path="/attendance" component={attendance} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
  else {
    return (
      <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                 <Redirect to="/login" />
              </Route>
              <Route path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
  
}
export default Routing;

/*
func verifytoken 
  find token => find in app 
      1: verify token => api call
          1: return 1;
          0: return 0;
      0: return 0;
   
  

*/


/*
for admin and employee diffeence 




*/
