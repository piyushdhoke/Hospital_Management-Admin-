const express = require('express')
const tbl_hptl_EmployeeRouter = express.Router();
const {getEmployee, getIdEmployee, postEmployee, deleteEmployee, putEmployee} = require('../../Controller/Admin/tbl_hptl_Employeecontroller')
const {validEmployee} = require('../../Controller/Admin/Validation/Employeevalidate')

tbl_hptl_EmployeeRouter.get('/hptl/employee',getEmployee)
tbl_hptl_EmployeeRouter.get('/hptl/management/employee/:emp_ID',getIdEmployee)
tbl_hptl_EmployeeRouter.post('/hptl/management/employee',validEmployee,postEmployee)
tbl_hptl_EmployeeRouter.delete('/hptl/management/employee/:emp_ID',deleteEmployee)
tbl_hptl_EmployeeRouter.put('/hptl/management/employee/:emp_ID',validEmployee,putEmployee)


module.exports = tbl_hptl_EmployeeRouter;
