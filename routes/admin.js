const express = require("express");

const router = express.Router();

const products = [];

router.get("/admin/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
});

router.post("/admin/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
    price: req.body.price,
    descripton: req.body.description,
  });
  res.redirect("/products");
});

exports.router = router;
exports.products = products;
