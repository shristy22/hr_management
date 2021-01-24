var axios = require('axios');
var data = JSON.stringify({
    "employeeCode":"5",
    "password":"5",
    "personalInfo":[{"lastName":"","firstName":"","fatherName":"","dob":"","country":"4","identificationMark":"4","bloodGroup":"","gender":"","maritalStatus":""}],
    "contactDetails":[{"officialemail":"","personalEmail":"4","phonenumber1":"","phonenumber2":""}],
    "socialDetails":[{"linkdn":"","facebook":"4","twitter":""}],"employementDetail":[{"employeeCode":"","reportingManager":"","dateOfJoining":"4","dateOfConfirmation":"","department":"","designation":"","location":""}],
    "bankDetail":[{"accountNumber":"4","name":"","bankName":"","operationType":"4","ifscCode":""}]});

var config = {
  method: 'post',
  url: 'https://c45808b07c8e.ngrok.io/empRegister',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
