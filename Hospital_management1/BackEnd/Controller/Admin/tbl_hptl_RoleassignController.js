const connection = require('../../Model/db_connect')


let getAssign = (req,res)=>{
    let sqlQuery = 'SELECT tbl_hptl_employee.emp_ID, tbl_hptl_roles.Role_name, tbl_hptl_role_assign.Role_ID ' +
    'FROM tbl_hptl_employee ' +
    'INNER JOIN tbl_hptl_role_assign ON tbl_hptl_employee.emp_ID = tbl_hptl_role_assign.emp_ID ' +
    'INNER JOIN tbl_hptl_roles ON tbl_hptl_role_assign.Role_ID = tbl_hptl_roles.Role_ID ';
    
    connection.query(sqlQuery,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}



let getIdAssign = (req,res)=>{
    let data = req.params.emp_ID;
    let sqlQuery = 'SELECT * FROM tbl_hptl_role_assign WHERE emp_ID = ?'
    connection.query(sqlQuery,data,(error,result)=>{
        if(error){
            console.log("error",error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}
let getId = (req, res) => {
    let emp_ID = req.params.emp_ID; // Assuming req.params.emp_ID contains the employee ID
    let sqlQuery = 'SELECT tbl_hptl_employee.emp_ID, tbl_hptl_roles.Role_name ' +
                   'FROM tbl_hptl_employee ' +
                   'INNER JOIN tbl_hptl_role_assign ON tbl_hptl_employee.emp_ID = tbl_hptl_role_assign.emp_ID ' +
                   'INNER JOIN tbl_hptl_roles ON tbl_hptl_role_assign.Role_ID = tbl_hptl_roles.Role_ID ' +
                   'WHERE tbl_hptl_employee.emp_ID = ?'; // Using ? as a placeholder for parameterized query

    connection.query(sqlQuery, [emp_ID], (error, result) => {
        if (error) {
            console.log("Error:", error.sqlMessage);
            res.status(500).send("Error occurred while fetching data.");
        } else {
            res.send(result);
        }
    });
}



let postAssign = (req,res)=>{
    let userData = req.body
    let sqlQuery = 'INSERT INTO tbl_hptl_role_assign SET ?';
    connection.query(sqlQuery,userData,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.json(result)
        }
    })
}


let deleteassign = (req,res)=>{
    let depart = req.params.emp_ID
    let sqlQuery = 'DELETE FROM tbl_hptl_role_assign WHERE emp_ID = ?'
    connection.query (sqlQuery,depart, (error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record deleted`)
        }
    }) 

}


let putAssign = (req,res)=>{

    let {Role_ID} = req.body
    let data = req.params.emp_ID;
    let sqlQuery = 'UPDATE tbl_hptl_role_assign SET Role_ID = ? WHERE emp_ID = ?'
    connection.query(sqlQuery,[Role_ID,data],(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record updated`)
        }
    })
    
    
    }


module.exports = {getAssign,getIdAssign,postAssign,deleteassign,putAssign,getId}

