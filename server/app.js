const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path');
const staticFolder = path.join(__dirname+"/public");
const port = process.env.PORT || 3000;

//routes
const api_routes = require('./routes/api_routes');
app.use(cors())
app.use(cookieParser());
app.use(express.json());

/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/

app.use(express.static(staticFolder));
app.use("/api", api_routes);


app.get("/", (req, res) => {
    res.sendFile(__dirname +'/index.html')
})


app.listen(port, (err) => {
    if(err) throw new Error(`There has been an error connection to ${port}`);
    console.log(`Listening on port ${port}`);
})