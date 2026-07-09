const express = require("express");

const path = require("path");

const shopData = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(shopData.router);
app.use(adminRoutes.router);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Error" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
