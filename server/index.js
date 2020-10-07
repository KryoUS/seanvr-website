require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();

if (process.env.DEV === true) {
    app.use(express.static(path.join(__dirname, '../client/build')));
} else {
    app.use(express.static(path.join(__dirname, '../var/www/seanvr.net/html')));
}

app.get("/", (req, res) => {

    if (process.env.DEV === true) {
        return res.sendFile(path.join(__dirname + "/client/build/index.html"));
    } else {
        return res.sendFile(path.join(__dirname + "../var/www/seanvr.net/html"));
    }
    
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);