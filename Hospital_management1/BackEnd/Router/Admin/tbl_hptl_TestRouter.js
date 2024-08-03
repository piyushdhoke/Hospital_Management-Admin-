const express = require('express');
const tbl_hptl_TestRouter = express.Router()
const {getTest, getIdTest, postTest, deleteTest, putTest} = require ('../../Controller/Admin/tbl_hptl_TestroleController')

tbl_hptl_TestRouter.get('/hptl/test',getTest)
tbl_hptl_TestRouter.get('/hptl/management/test/:Test_ID',getIdTest)
tbl_hptl_TestRouter.post('/hptl/management/test',postTest)
tbl_hptl_TestRouter.delete('/hptl/management/test/:Test_ID',deleteTest)
tbl_hptl_TestRouter.put('/hptl/management/test/:Test_ID',putTest)



module.exports = tbl_hptl_TestRouter