const express = require('express');
const router = express.Router();

const { getAllSessions, getStudentJoinedSession, getDeanCreatedSession, createSession, joinSession } = require('../controllers/Sesssion')

router.get('/', getAllSessions);

router.get('/student/:studentID', getStudentJoinedSession);

router.get('/dean/:deanID', getDeanCreatedSession);

router.post('/', createSession);

router.post('/join', joinSession);

module.exports = router;