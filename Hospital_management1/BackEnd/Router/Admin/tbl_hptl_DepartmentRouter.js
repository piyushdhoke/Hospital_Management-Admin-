const express = require('express');
const  tbl_hptl_DepratmentRouter = express.Router();
const  {getDepartment, postDepartment, deleteDpartment, putDepartment, getIDDepartment, } = require('../../Controller/Admin/tbl_hptl_Departmentcontroller')
const {validDepart} = require('../../Controller/Admin/Validation/Departvalidate')


tbl_hptl_DepratmentRouter.get('/hptl/department',getDepartment)
tbl_hptl_DepratmentRouter.get('/hptl/management/department/:Depart_ID',getIDDepartment)
tbl_hptl_DepratmentRouter.post('/hptl/management/department',validDepart,postDepartment)
tbl_hptl_DepratmentRouter.delete('/hptl/management/department/:Depart_ID',deleteDpartment)
tbl_hptl_DepratmentRouter.put('/hptl/management/department/:Depart_ID',validDepart,putDepartment)




module.exports = tbl_hptl_DepratmentRouter;