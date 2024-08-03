const express = require ('express');
const dotenv = require('dotenv');
const tbl_hptl_RoomRouter = require('./Router/Admin/tbl_hptl_RoomRouter')
const tbl_hptl_DepratmentRouter = require('./Router/Admin/tbl_hptl_DepartmentRouter')
const tbl_hptl_RolesRouter = require('./Router/Admin/tbl_hptl_RolesRouter')
const tbl_hptl_LabRouter = require('./Router/Admin/tbl_hptl_LabRouter')
const tbl_hptl_TestRouter = require('./Router/Admin/tbl_hptl_TestRouter')
const tbl_hptl_EmployeeRouter = require('./Router/Admin/tbl_hptl_EmployeeRouter')
const tbl_hptl_RoleassignRouter = require('./Router/Admin/tbl_hptl_RoleassignRouter')
const tbl_hptl_empprofileRouter =  require('./Router/Admin/tbl_hptl_empprofileRouter')
const tbl_hptl_PaientRouter = require('./Router/Admin/tbl_hptl_PatientRouter')
const Authenticate_Route =require('./Router/Admin/userAuthenticationRoute')



const hptl = express();
const cors = require ('cors');
hptl.use(cors());
dotenv.config()
hptl.use(express.json());



const port = process.env.PORT

hptl.use('/',tbl_hptl_RoomRouter);
hptl.use('/',tbl_hptl_DepratmentRouter)
hptl.use('/', tbl_hptl_RolesRouter)
hptl.use('/', tbl_hptl_LabRouter)
hptl.use('/',tbl_hptl_TestRouter)
hptl.use('/',tbl_hptl_EmployeeRouter)
hptl.use('/',tbl_hptl_RoleassignRouter)
hptl.use('/',tbl_hptl_empprofileRouter)
hptl.use('/',tbl_hptl_PaientRouter)
hptl.use('/',Authenticate_Route)






hptl.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}...`)
})