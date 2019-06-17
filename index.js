const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const apiRoutes = require("./api-routes");
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/resthub');
const db = mongoose.connection;
const port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes);
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});