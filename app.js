const http = require('http');

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');  

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);                  

app.use(shopRoutes)
app.use((req,res,next) => {
    res.status(404).send('<h1> PAGE NOT FOUND</h1>')
})

// Allows the request to continue to the next middleware in lin


app.listen(3000);