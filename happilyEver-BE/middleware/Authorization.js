const express = require('express');
const { validate: uuidValidate } = require('uuid');

const verifyToken = (req, res, next) => {

    const { authorization } = req.headers;

    try {
        if(authorization && authorization.startsWith('Bearer')){
            const token = authorization.split(' ')[1];
            if(uuidValidate(token)){
                next();
            }else{
                res.status(400).send('Invalid Token!')
            }
        }else{
            res.status(400).send('Token Does not Exist!')
        }
    } catch (error) {
        res.status(401).send('Unauthorized!');
    }
}

module.exports = verifyToken;