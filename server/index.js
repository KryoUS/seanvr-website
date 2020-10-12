const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});
const express = require('express');
const crons = require('./cronjobs/cronIndex');

/* Start CronJobs */
crons.jobs();

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

app.use("/", require('./routes/routeIndex'));

app.all("/*", (req, res) => {
    return res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);