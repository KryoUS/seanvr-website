require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();


app.use(express.static(path.join(__dirname, '../client/build')));

app.get("/", (req, res) => {
    if (process.env.DEV === true) {
        return res.sendFile(path.join(__dirname + "/../client/build/index.html"));
    } else {
        return res.sendFile(path.join(__dirname + "/client/build/index.html"));
    }
});

app.all("*", (req, res) => {
    if (process.env.DEV === true) {
        return res.sendFile(path.join(__dirname + "/../client/build/index.html"));
    } else {
        return res.sendFile(path.join(__dirname + "/client/build/index.html"));
    }
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);