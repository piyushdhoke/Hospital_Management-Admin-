const connection = require('../../Model/db_connect')



let getRoom = (req,res)=>{


    let sqlQuery = 'SELECT * FROM tbl_hptl_Room';

      connection.query(sqlQuery,(error,result)=>{

        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(result)
        }

    })
}


let getIdroom = (req,res)=>{


    let sqlQuery = 'SELECT * FROM tbl_hptl_Room WHERE Room_number = ?';

      connection.query(sqlQuery,(error,result)=>{

        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(result)
        }

    })
}

let postRoom =(req,res)=>{
    let userData = req.body;
    let sqlQuery = 'INSERT INTO tbl_hptl_Room SET ?';
    connection.query(sqlQuery,userData,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.json(result)
        }
    })
}

let deleteRoom = (req,res)=>{
    let room = req.params.Room_number;
    let sqlQuery = 'DELETE FROM tbl_hptl_Room WHERE Room_number = ?'
    connection.query(sqlQuery,room,(error,result)=>{
       if(error){
        console.log('error',error.sqlMessage)
       }
       else{
           
        res.send(`${result.affectedRows} record deleted`)

       }
        

    })
}

let putRoom = (req,res)=>{
    let {Room_name}= req.body;
    let data = req.params.Room_number;
    let sqlQuery = 'UPDATE tbl_hptl_room set Room_name = ? WHERE Room_number =? '
    connection.query(sqlQuery,[Room_name,data],
        (error,result)=>{
         if(error){
            console.log('error',error.sqlMessage)
         } else{
           
            res.send(`${result.affectedRows} record updated`)
    
           }

        })

}





module.exports = {getRoom,postRoom,getIdroom,deleteRoom,putRoom};