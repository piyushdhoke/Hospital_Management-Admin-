const connection = require('../../Model/db_connect')


let getprofile = (req,res)=>{
    let sqlQuery = 'SELECT * FROM tbl_hptl_emp_profile'
    connection.query(sqlQuery,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}



let getIdprofile = (req,res)=>{
    let data = req.params.emp_ID;
    let sqlQuery = 'SELECT * FROM tbl_hptl_emp_profile WHERE emp_ID = ?'
    connection.query(sqlQuery,data,(error,result)=>{
        if(error){
            console.log("error",error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}


let postprofile = (req,res)=>{
    let userData = req.body
    let sqlQuery = 'INSERT INTO tbl_hptl_emp_profile SET ?';
    connection.query(sqlQuery,userData,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.json(result)
        }
    })
}


let deleteprofile = (req,res)=>{
    let data = req.params.emp_ID
    let sqlQuery = 'DELETE FROM tbl_hptl_emp_profile WHERE emp_ID = ?'
    connection.query (sqlQuery,data, (error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record deleted`)
        }
    }) 

}


let putprofile = (req,res)=>{

    let {emp_name,DOB,Gender,Email,Mobile,Address} = req.body
    let data = req.params.emp_ID;
    let sqlQuery = 'UPDATE tbl_hptl_emp_profile SET emp_name = ?,DOB = ?,Gender = ?,Email = ?, Mobile = ?,Address = ? WHERE emp_ID = ?'
    connection.query(sqlQuery,[emp_name,DOB,Gender,Email,Mobile,Address,data],(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record updated`)
        }
    })
    
    
    }


    module.exports = {getprofile,getIdprofile,postprofile,deleteprofile,putprofile}