const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
const cors  = require('cors');
app.use(cors());
const port = process.env.PORT || 8080;
const dotenv = require('dotenv');
dotenv.config()
const AllRoutes = require('./Routes')
app.use( "/" , AllRoutes)
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen( port, () => {
            console.log(`server is up on port ${port}`);
        });
    }).catch((err) => {
        console.log(err.message);
    })