const express = require('express')
const tbl_hptl_RoleassignRouter = express.Router()
const {getAssign, getIdAssign, postAssign, deleteassign, putAssign, getId} = require('../../Controller/Admin/tbl_hptl_RoleassignController')


tbl_hptl_RoleassignRouter.get('/hptl/roleassign',getAssign)
tbl_hptl_RoleassignRouter.get('/hptl/management/roleassign/:emp_ID',getIdAssign)
tbl_hptl_RoleassignRouter.get('/hptl/management/roles/:emp_ID',getId)
tbl_hptl_RoleassignRouter.post('/hptl/management/roleassign',postAssign)
tbl_hptl_RoleassignRouter.delete('/hptl/management/roleassign/:emp_ID',deleteassign)
tbl_hptl_RoleassignRouter.put('/hptl/management/roleassign/:emp_ID',putAssign)


module.exports = tbl_hptl_RoleassignRouter