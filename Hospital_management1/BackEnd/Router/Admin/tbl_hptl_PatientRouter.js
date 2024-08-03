const express = require('express')
const tbl_hptl_PaientRouter = express.Router()
const {getpatient, getIdpatient, postpatient, deletepatient, putpatient} = require('../../Controller/Admin/tbl_hptl_PatientController')



tbl_hptl_PaientRouter.get('/hptl/patient',getpatient)
tbl_hptl_PaientRouter.get('/hptl/management/patient/:P_ID',getIdpatient)
tbl_hptl_PaientRouter.post('/hptl/management/patient',postpatient)
tbl_hptl_PaientRouter.delete('/hptl/management/patient/:P_ID',deletepatient)
tbl_hptl_PaientRouter.put('/hptl/management/patient/:P_ID',putpatient)


module.exports = tbl_hptl_PaientRouter;