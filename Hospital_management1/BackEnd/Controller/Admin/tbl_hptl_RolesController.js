const connection = require('../../Model/db_connect')


let getRole =(req,res)=>{
    let sqlQuery = 'SELECT * FROM tbl_hptl_roles'
    connection.query(sqlQuery,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}


let getIdrole = (req,res)=>{
    let data = req.params.Role_ID;
    let sqlQuery = 'SELECT * FROM tbl_hptl_Roles WHERE Role_ID = ?'
    connection.query(sqlQuery,data,(error,result)=>{
        if(error){
            console.log("error",error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}


let postRoles = (req,res)=>{
    let userData = req.body
    let sqlQuery = 'INSERT INTO tbl_hptl_Roles SET ?';
    connection.query(sqlQuery,userData,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.json(result)
        }
    })
}


let deleteRoles = (req,res)=>{
    let depart = req.params.Role_ID
    let sqlQuery = 'DELETE FROM tbl_hptl_Roles WHERE Role_ID = ?'
    connection.query (sqlQuery,depart, (error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record deleted`)
        }
    }) 

}


let putRoles = (req,res)=>{

let {Role_name} = req.body
let data = req.params.Role_ID;
let sqlQuery = 'UPDATE tbl_hptl_Roles SET Role_name = ? WHERE Role_ID = ?'
connection.query(sqlQuery,[Role_name,data],(error,result)=>{
    if(error){
        console.log('error',error.sqlMessage)
    }
    else{
        res.send(`${result.affectedRows} record updated`)
    }
})


}



module.exports = {getRole,getIdrole,postRoles,deleteRoles,putRoles}