const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const { json } = require('express');
const pageRoute = require('./routes/pageRoute');



// environment variable 
dotenv.config();
const PORT = process.env.PORT || 4000;


// express init 
const app = express();


// data manage 
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));


// static folder
app.use('/public/', express.static('public'));




// router init
app.use(pageRoute);






// server listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
