const joi = require('joi')


const roleSchema = joi.object({
    Role_ID: joi.string().min(2).max(20).required(),
    Role_name: joi.string().min(2).max(50).required()
})

const validRole = (req,res,next)=>{
    const{error}=roleSchema.validate (req.body)
    if(error){
        console.log(error)
    }else{
        console.log(`Data is valid`)
    }
    next();
}

module.exports={validRole};

