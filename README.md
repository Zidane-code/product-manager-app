# Product Manager App

A beginner-friendly Product Manager web app built with **Node.js**, **Express.js**, and **EJS**.

This project was created as a practice project while learning backend development with Express and templating engines.

---

## Project Idea

The app allows users to:

* View a home page
* View all products
* Add a new product using a form
* Submit product data using a POST request
* Display added products on the products page
* See a custom 404 page for unknown routes

The project uses temporary in-memory data with a simple array, so the products will reset when the server restarts.

---

## Features

* Express server setup
* EJS templating engine
* Separate route files
* Static CSS files
* Product listing page
* Add product form
* POST request handling
* Redirect after form submission
* Custom 404 page

---

## Technologies Used

* Node.js
* Express.js
* EJS
* HTML
* CSS

---

## Project Structure

```txt
product-manager-app/
├── app.js
├── package.json
├── routes/
│   ├── admin.js
│   └── shop.js
├── views/
│   ├── home.ejs
│   ├── products.ejs
│   ├── add-product.ejs
│   └── 404.ejs
├── public/
│   └── css/
│       └── main.css
├── .gitignore
└── README.md
```

---

## Routes

### Shop Routes

```txt
GET /
GET /products
```

### Admin Routes

```txt
GET /admin/add-product
POST /admin/add-product
```

### Not Found Route

```txt
Any unknown route → 404 page
```

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/Zidane-coded/product-manager-app.git
```

### 2. Move into the project folder

```bash
cd product-manager-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

### 5. Open the app in the browser

```txt
http://localhost:3000
```

---

## Learning Goals

This project was built to practice the following backend concepts:

* Creating an Express.js server
* Using `express.Router()`
* Splitting routes into separate files
* Rendering EJS views
* Passing data from routes to views
* Handling form data with `express.urlencoded()`
* Using `req.body`
* Redirecting after POST requests
* Serving static files
* Creating a simple project structure

---

## Notes

This project does not use a database yet.

Products are stored temporarily in an array.
This is intentional because the goal of the project is to practice Express routes, EJS views, and form handling before moving to advanced topics like MVC, databases, authentication, or APIs.

---

## Future Improvements

Possible improvements after learning more advanced backend topics:

* Add a database
* Add controllers
* Add product edit and delete features
* Add form validation
* Add image upload
* Add authentication
* Convert the app into a REST API

---

## Author

Built by Zidane as part of his Node.js backend learning journey.