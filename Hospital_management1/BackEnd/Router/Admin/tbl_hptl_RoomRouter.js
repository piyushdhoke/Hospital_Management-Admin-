const express = require('express');
const tbl_hptl_RoomRouter = express.Router();
const {getRoom,postRoom,getIdroom, deleteRoom, putRoom} = require('../../Controller/Admin/tbl_hptl_RoomController');

tbl_hptl_RoomRouter.get('/hptl/management',getRoom)
tbl_hptl_RoomRouter.get('/hptl/management/:Room_number',getIdroom)

tbl_hptl_RoomRouter.post('/hptl/management',postRoom)
tbl_hptl_RoomRouter.delete('/hptl/management/:Room_number',deleteRoom)
tbl_hptl_RoomRouter.put('/hptl/management/room/:Room_number',putRoom)




module.exports=tbl_hptl_RoomRouter;
