const express = require('express')
const tbl_hptl_RolesRouter = express.Router();
const { getIdrole, postRoles, deleteRoles, putRoles, getRole} = require('../../Controller/Admin/tbl_hptl_RolesController')
const {validRole} = require('../../Controller/Admin/Validation/Rolesvalidate')


tbl_hptl_RolesRouter.get('/hptl/role',getRole)
tbl_hptl_RolesRouter.get('/hptl/management/role/:Role_ID',getIdrole);
tbl_hptl_RolesRouter.post('/hptl/management/roles',validRole,postRoles);
tbl_hptl_RolesRouter.delete('/hptl/management/roles/:Role_ID',deleteRoles);
tbl_hptl_RolesRouter.put('/hptl/management/roles/:Role_ID',validRole,putRoles);
 



module.exports =  tbl_hptl_RolesRouter;


