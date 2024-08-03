
let connection = require('../Model/db_connect')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const {response}= require('express')

// let jwt = require('jsonwebtoken')

const Signup = async (req, res) => {
   try {
       const { username, email, password } = req.body;

       // Check if the email already exists in the database
       const emailExistsQuery = 'SELECT * FROM signup WHERE email = ?';
       connection.query(emailExistsQuery, [email], async (error, result) => {
           if (error) {
               return res.status(500).send(error.sqlMessage);
           }

           if (result.length > 0) {
               return res.send({ message: 'Email is already in use' });
           }

           // Hash the password
           const salt = await bcrypt.genSalt(10);
           const hashedPassword = await bcrypt.hash(password, salt);

           // Insert new user data into the database
           const insertQuery = 'INSERT INTO signup (username, email, password) VALUES (?, ?, ?)';
           connection.query(insertQuery, [username, email, hashedPassword], (error, result) => {
               if (error) {
                   return res.status(500).send(error.sqlMessage);
               }
               res.send(result);
           });
       });
   } catch (error) {
       console.error('Error during signup:', error);
       res.status(500).send('An internal server error occurred');
   }
};




const Login = (req, res) => {
    const sql = 'SELECT * FROM signup WHERE email = ?';
    const values = [req.body.email];
 
    connection.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error inside server:', err);
            return res.status(500).json({ message: "Error inside server" });
        }
        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    return res.status(500).json({ message: "Error comparing passwords" });
                }
                if (response) {
                    const email = data[0].email;
                    const username = data[0].username;
                    const token = jwt.sign({ email, username }, 'jwt-secret-key', { expiresIn: '1d' });
                    res.cookie('token', token);
                    return res.json({ Status: "success", token });
                } else {
                    return res.json({ Login: false, message: 'Password not matched' });
                }
            });
        } else {
            return res.json({ Error: "No user with this email exists" });
        }
    });
 };









module.exports={Signup , Login}