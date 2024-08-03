const express = require('express')
const Authenticate_Route = express.Router()
const {Signup, Login} =require('../../Controller/userAuthentication')

Authenticate_Route.post('/app/signup',Signup)

Authenticate_Route.post('/app/login',Login)



module.exports = Authenticate_Route;


