const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

const Login = require('./routes/Login')
const Session = require('./routes/Session')
const Test = require('./routes/Test')
const verifyToken = require('./middleware/Authorization')

app.use(express.json());

// Routes
app.use('/api/v1/', Login);
app.use('/api/v1/session', verifyToken, Session);

app.use('/api/v1/testing', verifyToken, Test);

app.get('/', (req, res) => {
    res.send('Active');
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})