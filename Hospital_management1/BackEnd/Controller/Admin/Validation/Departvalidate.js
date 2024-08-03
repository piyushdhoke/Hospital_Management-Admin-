const joi = require('joi')


const departSchema = joi.object({
    Depart_ID : joi.string().min(2).max(20).required(),
    Depart_name : joi.string().min(2).max(50).required(),
    Established_date :joi.required()

})

const validDepart = (req,res,next)=>{
  const{error}= departSchema.validate(req.body);

  
if(error){
    console.error(error)
}else{
    console.log(`Data is valid`)
}
  next();
}

module.exports = {validDepart};

