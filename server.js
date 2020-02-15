const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    const data = {
        user: "mike",
        age: "old enough to know better"
    }
    res.json(data);
});

app.get('/api/user', (req, res) => {
    const data = {
        user: "mp",
        age: "like wine... vinegar"
    }
    res.json(data);
});

app.listen(PORT, console.log(`Server connected @ ${PORT}`));