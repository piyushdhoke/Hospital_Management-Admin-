const express = require('express')
const tbl_hptl_empprofileRouter = express.Router();
const {getprofile, postprofile, getIdprofile, deleteprofile, putprofile} = require('../../Controller/Admin/tbl_hptl_EmpprofileController')


tbl_hptl_empprofileRouter.get('/hptl/empprofile',getprofile)
tbl_hptl_empprofileRouter.get('/hptl/management/empprofile/:emp_ID',getIdprofile)
tbl_hptl_empprofileRouter.post('/hptl/management/empprofile',postprofile)
tbl_hptl_empprofileRouter.delete('/hptl/management/empprofile/:emp_ID',deleteprofile)
tbl_hptl_empprofileRouter.put('/hptl/management/empprofile/:emp_ID',putprofile)


module.exports = tbl_hptl_empprofileRouter
