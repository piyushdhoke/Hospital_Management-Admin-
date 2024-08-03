const joi = require ('joi')


const employeeSchema = joi.object({
       emp_ID : joi.string().min(2).max(20).required(),
       emp_name : joi.string().min(2).max(50).required(),
       emp_password : joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
       Depart_ID : joi.string().min(2).max(20).required(),
       email : joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
       Room_number : joi.string().min(2).max(10).required()

})

const validEmployee = (req,res,next)=>{
    const{error} = employeeSchema.validate(req.body)

    if(error){
        console.log(error)
    }
    else{
        console.log('Data is valid')
    }
    next();
}


module.exports ={validEmployee}