const express = require('express');
const  tbl_hptl_LabRouter = express.Router()
const {getLabs, getIdLab, postLab, deleteLab, putlabs} = require('../../Controller/Admin/tbl_hptl_LabsController')



tbl_hptl_LabRouter.get('/hptl/labs',getLabs)
tbl_hptl_LabRouter.get('/hptl/management/labs/:Lab_ID',getIdLab)
tbl_hptl_LabRouter.post('/hptl/management/labs',postLab)
tbl_hptl_LabRouter.delete('/hptl/management/labs/:Lab_ID',deleteLab)
tbl_hptl_LabRouter.put('/hptl/management/labs/:Lab_ID',putlabs)


module.exports = tbl_hptl_LabRouter;