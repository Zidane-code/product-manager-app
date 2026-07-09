const express = require('express');

const adminData = require("./admin");
const products  = adminData.products;

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home', {pageTitle: 'Home'});
})

router.get('/products', (req, res, next) => {
    res.render('products', {pageTitle: 'Products', products: products, hasProducts: products.length > 0})
})


exports.router = router;