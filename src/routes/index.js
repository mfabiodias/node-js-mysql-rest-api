const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const port = process.env.PORT || 3000;
const productRoutes = require('./product');
const categoryRoutes = require('./category');

// const func = require('../functions');
// func.requireAllFiles(__dirname, ['index.js', 'product.js']);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Product Routes 
server.use('/product', productRoutes)
// Category Routes 
server.use('/category', categoryRoutes)


server.listen(port, (err) => {
    if(err) throw err;

    console.log(`Server is running on port ${port}`);
});

module.exports = server;



