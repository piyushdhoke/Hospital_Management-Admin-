const connection = require('../../Model/db_connect')



let getEmployee = (req,res)=>{
    let sqlQuery = 'SELECT * FROM tbl_hptl_employee'
    connection.query(sqlQuery,(error,result)=>{
     if(error){
        console.log('error',error.sqlMessage )
     }
     else{
        res.send(result)
     }
    })
}


let getIdEmployee = (req,res)=>{
    let data = req.params.emp_ID;
    let sqlQuery = 'SELECT * FROM tbl_hptl_employee WHERE emp_ID = ?'
    connection.query(sqlQuery,data,(error,result)=>{
        if(error){
            console.log("error",error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}


let postEmployee = (req,res)=>{
    let userData = req.body
    let sqlQuery = 'INSERT INTO tbl_hptl_employee SET ?';
    connection.query(sqlQuery,userData,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.json(result)
        }
    })
}


let deleteEmployee = (req,res)=>{
    let depart = req.params.emp_ID
    let sqlQuery = 'DELETE FROM tbl_hptl_employee WHERE emp_ID = ?'
    connection.query (sqlQuery,depart, (error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record deleted`)
        }
    }) 

}



let putEmployee = (req,res)=>{

    let {emp_name,emp_password,email,Depart_ID,Room_number} = req.body
    let data = req.params.emp_ID;
    let sqlQuery = 'UPDATE tbl_hptl_employee SET emp_name = ?,email = ?,Depart_ID = ?, Room_number = ?,emp_password = ? WHERE emp_ID = ?'
    connection.query(sqlQuery,[emp_name,emp_password,email,Depart_ID,Room_number,data],(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record updated`)
        }
    })
    
    
    }



    module.exports = {getEmployee,getIdEmployee,postEmployee,deleteEmployee,putEmployee}


