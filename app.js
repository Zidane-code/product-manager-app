const express = require("express");

const path = require('path');

const shopData = require("./routes/shop");
const adminData = require("./routes/admin");

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(shopData.router);
app.use(adminData.router)

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Error" });
});

app.listen(3000);
