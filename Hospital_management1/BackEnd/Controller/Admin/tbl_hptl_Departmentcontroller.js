const connection = require('../../Model/db_connect')
const departSchema = require('./Validation/Departvalidate')


// let getDepartment = (req,res)=>{
//     let sqlQuery = 'SELECT * FROM tbl_hptl_department';
//     connection.query(sqlQuery,(error,result)=>{
//         if(error){
//             console.log('error',error.sqlMessage)
//         }
//         else{
//             res.json(result)
//         }
//     })
// }
// let getDepartment = (req,res)=>{


//     let sqlQuery = 'SELECT * FROM tbl_hptl_department';

//       connection.query(sqlQuery,(error,result)=>{

//         if(error){
//             console.log('error',error.sqlMessage)
//         }
//         else{
//             res.send(result)
//         }

//     })
// }


const getDepartment = (req, res) => {
    const sqlQuery = 'SELECT * FROM tbl_hptl_department';

    connection.query(sqlQuery, (error, result) => {
        if (error) {
            console.error('Error:', error.sqlMessage);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).json(result);
        }
    });
};



let getIDDepartment = (req,res)=>{
    let depart = req.params.Depart_ID
    let sqlQuery = 'SELECT * FROM tbl_hptl_department WHERE Depart_ID = ?'
    connection.query (sqlQuery,depart, (error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(result)
        }
    }) 

}


let postDepartment = (req,res)=>{ 
    
    let userData = req.body
    let sqlQuery = 'INSERT INTO tbl_hptl_department SET ?';
    connection.query(sqlQuery,userData,(error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.json(result)
        }
    })
}



let deleteDpartment = (req,res)=>{
    let depart = req.params.Depart_ID
    let sqlQuery = 'DELETE FROM tbl_hptl_department WHERE Depart_ID = ?'
    connection.query (sqlQuery,depart, (error,result)=>{
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record deleted`)
        }
    }) 

}


let putDepartment = (req,res)=>{
    let userData = {Depart_name,Established_date} 
     userData = departSchema.validate(req.body)
     if(userData.error){
        console.log(userData.error)
     }else{
        console.log('Data is valid')
     }

    let data = req.params.Depart_ID;
    let sqlQuery = "UPDATE tbl_hptl_department SET Depart_name = ?,Established_date = ? WHERE Depart_ID = ?"
    connection.query(sqlQuery,[Depart_name,Established_date,data],(error,result)=>{
        if(error){
            res.send('error',error.sqlMessage)
        }
        else{
            res.send(`${result.affectedRows} record updated`)
        }
    })
}


module.exports = {getDepartment,getIDDepartment,postDepartment,deleteDpartment,putDepartment};