const connection = require('../../Model/db_connect')


let getTest = (req,res)=>{
    let sqlQuery = 'SELECT * FROM tbl_hptl_test_roles'
    connection.query(sqlQuery,(error,result)=>{
     if(error){
        console.log('error',error.sqlMessage )
     }
     else{
        res.send(result)
     }
    })
}


let getIdTest = (req,res)=>{
    let data = req.params.Test_ID;
    let sqlQuery = 'SELECT * FROM tbl_hptl_test_roles WHERE Test_ID = ?'
    connection.query(sqlQuery,data,(error,result)=>{
        if(error){
            console.log("error",error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}


let postTest = (req,res)=>{
    let userData = req.body
    let sqlQuery = 'INSERT INTO tbl_hptl_test_roles SET ?';
    connection.query(sqlQuery,userData,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.json(result)
        }
    })
}


let deleteTest = (req,res)=>{
    let depart = req.params.Test_ID
    let sqlQuery = 'DELETE FROM tbl_hptl_test_roles WHERE Test_ID = ?'
    connection.query (sqlQuery,depart, (error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record deleted`)
        }
    }) 

}



let putTest = (req,res)=>{

    let {Test_name,price,updation_on} = req.body
    let data = req.params.Test_ID;
    let sqlQuery = 'UPDATE tbl_hptl_test_roles SET Test_name = ?,price = ?, updation_on = ?  WHERE Test_ID = ?'
    connection.query(sqlQuery,[Test_name,price,updation_on,data],(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record updated`)
        }
    })
    
    
    }



    module.exports = {getTest,getIdTest,postTest,deleteTest,putTest}
