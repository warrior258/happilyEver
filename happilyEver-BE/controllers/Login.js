const { v4: uuidv4 } = require('uuid');
const { pool } = require('../db/config')

const studentLogin = (req, res) => {
    
    const { studentID, password } = req.body;

    if(studentID === "" || password === ""){
        return res.send("All fields are required!");
    }

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('SELECT * FROM student WHERE studentID=? AND password=?', [studentID,password], (err, rows) => {

                connection.release();

                if(err){
                    return res.send('Query cannot executed!')
                }

                if(rows.length === 0){
                    return res.status(200).json({message: 'Invalid username or password'});
                }
                
                res.status(200).json({token: uuidv4()});
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }

    // res.status(200).json({token: uuidv4()});
};

const deanLogin = (req, res) => {
    
    const { deanID, password } = req.body;

    if(deanID === "" || password === ""){
        return res.send("All fields are required!");
    }

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('SELECT * FROM dean WHERE deanID=? AND password=?', [deanID,password], (err, rows) => {

                connection.release();

                if(err){
                    return res.send('Query cannot executed!')
                }

                if(rows.length === 0){
                    return res.status(200).json({message: 'Invalid username or password'});
                }
                
                res.status(200).json({token: uuidv4()});
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }

    // res.status(200).json({token: uuidv4()});
};


module.exports = { studentLogin, deanLogin };