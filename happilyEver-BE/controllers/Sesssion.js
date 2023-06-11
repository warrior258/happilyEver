const { pool } = require('../db/config')

const getAllSessions = (req, res) => {

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('SELECT * FROM session;', (err, rows) => {

                connection.release();

                if(err){
                    return res.send('Query cannot executed!')
                }
                
                res.status(200).json({avialableSessions: rows});
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }
};


const getStudentJoinedSession = (req, res) => {

    const {studentID} = req.params;

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('SELECT * FROM session WHERE studentID LIKE ?;',`%${studentID}%`, (err, rows) => {

                connection.release();

                if(err){
                    return res.send('Query cannot executed!')
                }

                if(rows.length === 0){
                    return res.status(200).send("No session found with this id");
                }
                
                res.status(200).json({yourJoinedSessions: rows});
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }
};

const getDeanCreatedSession = (req, res) => {

    const {deanID} = req.params;

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('SELECT * FROM session WHERE deanID=? AND status="pending";',[deanID], (err, rows) => {

                connection.release();

                if(err){
                    return res.send('Query cannot executed!')
                }

                if(rows.length === 0){
                    return res.status(200).send("No session found with this id");
                }
                
                res.status(200).json({yourCreatedSessions: rows});
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }
};

const createSession = (req, res) => {

    const { deanID, timing } = req.body;

    if(deanID === "" || timing === ""){
        return res.send("All fields are required!");
    }

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('INSERT INTO session(deanID, timing, status) VALUES(?,?, "pending")', [deanID,timing], (err, rows) => {

                connection.release();

                if(err){
                    console.log(err)
                    return res.send('Query cannot executed!')
                }
                
                res.status(200).send("Session Created");
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }
};

const joinSession = (req, res) => {

    let arr = [];
    
    const { studentID, sessionID } = req.body;

    

    if(studentID === "" || sessionID === ""){
        return res.send("All fields are required!");
    }

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('SELECT studentID from session WHERE id=?',[sessionID], (err, rows) => {

                // connection.release();

                if(err){
                    return res.send('Query cannot executed!')
                }

                // console.log()

                if(rows[0].studentID !== ""){

                    arr = JSON.parse(rows[0].studentID)
                    arr.push(studentID);
                }else{
                    arr.push(studentID);
                }

                connection.query('UPDATE session SET studentID=? WHERE id=?', [JSON.stringify(arr), sessionID], (err, rows) => {
                    connection.release();

                    if(err){
                        return res.send('Query cannot executed!')
                    }

                    // console.log(rows)
                    res.status(200).send("Session Joined");
                })

                
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }
};

module.exports = { getAllSessions, getStudentJoinedSession, getDeanCreatedSession, createSession, joinSession };
