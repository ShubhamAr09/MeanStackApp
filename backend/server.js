const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./route/routes');
const port = process.env.PORT || 9998;
require('dotenv').config();

app.use(cors());

app.listen(port ,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("server is running on port " + port)
});

app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true })
.then(() => {
    console.log('Database Connected!');
}).catch((err)=>{
    console.log(err);
});
