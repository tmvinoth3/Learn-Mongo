const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');

app.use(express.json());
app.use(cors());
//import routes
const postRoute = require('../routes/posts');

//Middlewares
app.use('/posts', postRoute);

//routes
app.get('/', (req, res) => {
    res.send("we are at home");
});

//DB Connection
mongoose.connect('mongodb://localhost:27017/posts', { useNewUrlParser: true }, (err) => {
    if(err){console.log(err);}
    console.log("DB Connected");
});

//listening to the server
app.listen(3000, () => {console.log("Listening to ther server port 3000");});