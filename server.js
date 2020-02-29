const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3001;

// app.use(require('./client/routes'));
app.use(express.static(__dirname + '/public'));

app.listen(PORT, console.log(`Server connected @ ${PORT}`)); 