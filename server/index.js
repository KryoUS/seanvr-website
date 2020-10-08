const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));
console.log(process.env.DEV);
app.get("/", (req, res) => {
    if (process.env.DEV === 'true') {
        return res.sendFile(path.join(__dirname + "/../client/build/index.html"));
    } else {
        return res.sendFile(path.join(__dirname + "/client/build/index.html"));
    }
});

app.all("*", (req, res) => {
    if (process.env.DEV === 'true') {
        return res.sendFile(path.join(__dirname + "/../client/build/index.html"));
    } else {
        return res.sendFile(path.join(__dirname + "/client/build/index.html"));
    }
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);