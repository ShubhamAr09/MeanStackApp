var employeeModel = require('./employeeModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createEmployeeDBService = (employeeDetails) => {

    var employeeModelData = new employeeModel();
    employeeModelData.name = employeeDetails.name;
    employeeModelData.phone = employeeDetails.phone;
    employeeModelData.email = employeeDetails.email;
    employeeModelData.password = encryptor.encrypt(employeeDetails.password);
 
    return employeeModelData.save()
       .then(result => {
          return Promise.resolve(true);
       })
       .catch(error => {
          return Promise.reject(false);
       });
 }
 
 module.exports.loginuserDBService = (employeeDetails) => {
 
    return employeeModel.findOne({ email: employeeDetails.email })
       .then(result => {
          if (result != undefined && result != null) {
             var decrypted = encryptor.decrypt(result.password);
             if (decrypted == employeeDetails.password) {
                return Promise.resolve({ status: true, msg: "Employee Validated Successfully" });
             } else {
                return Promise.reject({ status: false, msg: "Employee Validation failed" });
             }
          } else {
             return Promise.reject({ status: false, msg: "Employee Error Details" });
          }
       })
       .catch(error => {
          return Promise.reject({ status: false, msg: "Invalid Data" });
       });
 }
 