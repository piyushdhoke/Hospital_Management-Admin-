const connection = require('../../Model/db_connect')


let getLabs = (req,res)=>{
    let sqlQuery = 'SELECT * FROM  tbl_hptl_Labs'
    connection.query(sqlQuery,(error,result)=>{
     if(error){
        console.log('error',error.sqlMessage )
     }
     else{
        res.send(result)
     }
    })
}


let getIdLab = (req,res)=>{
    let data = req.params.Lab_ID;
    let sqlQuery = 'SELECT * FROM tbl_hptl_Labs WHERE Lab_ID = ?'
    connection.query(sqlQuery,data,(error,result)=>{
        if(error){
            console.log("error",error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}


let postLab = (req,res)=>{
    let userData = req.body
    let sqlQuery = 'INSERT INTO tbl_hptl_Labs SET ?';
    connection.query(sqlQuery,userData,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.json(result)
        }
    })
}


let deleteLab = (req,res)=>{
    let data = req.params.Lab_ID
    let sqlQuery = 'DELETE FROM tbl_hptl_Labs where Lab_ID = ?'
    connection.query (sqlQuery,data, (error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record deleted`)
        }
    }) 

}


let putlabs = (req,res)=>{

    let {Lab_name} = req.body
    let data = req.params.Lab_ID;
    let sqlQuery = 'UPDATE tbl_hptl_Labs SET Lab_name = ? WHERE Lab_ID = ?'
    connection.query(sqlQuery,[Lab_name,data],(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record updated`)
        }
    })
    
    
    }



    module.exports = {getLabs,getIdLab,postLab,deleteLab,putlabs}