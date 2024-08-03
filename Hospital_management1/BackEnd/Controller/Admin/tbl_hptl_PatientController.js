const connection =  require('../../Model/db_connect')

let getpatient = (req,res)=>{
    let sqlQuery = 'SELECT * FROM tbl_hptl_patient'
    connection.query(sqlQuery,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}



let getIdpatient = (req,res)=>{
    let data = req.params.P_ID;
    let sqlQuery = 'SELECT * FROM tbl_hptl_patient WHERE P_ID = ?'
    connection.query(sqlQuery,data,(error,result)=>{
        if(error){
            console.log("error",error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}


let postpatient = (req,res)=>{
    let userData = req.body
    let sqlQuery = 'INSERT INTO tbl_hptl_patient SET ?';
    connection.query(sqlQuery,userData,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.json(result)
        }
    })
}


let deletepatient = (req,res)=>{
    let data = req.params.P_ID
    let sqlQuery = 'DELETE FROM tbl_hptl_patient WHERE P_ID = ?'
    connection.query (sqlQuery,data, (error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record deleted`)
        }
    }) 

}


let putpatient = (req,res)=>{

    let {P_name,mobile_number,Gender,Age,Symtoms,registration_data} = req.body
    let data = req.params.P_ID;
    let sqlQuery = 'UPDATE tbl_hptl_patient SET P_name = ?,mobile_number = ?,Gender = ?,Age = ?, Symptoms = ?, registration_date = ? WHERE P_ID = ?'
    connection.query(sqlQuery,[P_name,mobile_number,Gender,Age,Symtoms,registration_data,data],(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record updated`)
        }
    })
    
    
    }


    module.exports = {getpatient,getIdpatient,postpatient,deletepatient,putpatient}