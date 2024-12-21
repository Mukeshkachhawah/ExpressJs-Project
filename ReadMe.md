# Product and Order API

This project is an Express-based API for managing products and orders. It includes routes for fetching products based on various criteria and a random selection of products, as well as a simple root route.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Product Routes](#product-routes)
  - [Order Routes](#order-routes)
  - [Root Route](#root-route)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/yourrepository.git
   ```
2. Navigate to the project directory:
   ```sh
   cd yourrepository
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```
2. The server will start on `http://localhost:3000`.

## API Endpoints

### Product Routes

- **Get All Products**

  - **Endpoint:** `/products`
  - **Method:** `GET`
  - **Description:** Fetch all products from the database.

- **Get Product by ID**

  - **Endpoint:** `/products/id/:id`
  - **Method:** `GET`
  - **Description:** Fetch a product by its ID.

- **Get Products by Category**

  - **Endpoint:** `/products/category/:category`
  - **Method:** `GET`
  - **Description:** Fetch products by category name.

- **Get Products by Sub-Category**

  - **Endpoint:** `/products/subcategory/:sub_category`
  - **Method:** `GET`
  - **Description:** Fetch products by sub-category name.

- **Get Products by Name**

  - **Endpoint:** `/products/name/:name`
  - **Method:** `GET`
  - **Description:** Fetch products by name.

- **Get Random Products**
  - **Endpoint:** `/products/random`
  - **Method:** `GET`
  - **Description:** Fetch a random selection of 6 products.

### Order Routes

- **Get All Orders**
  - **Endpoint:** `/orders`
  - **Method:** `GET`
  - **Description:** Fetch all orders from the database.

### Root Route

- **Root Route**
  - **Endpoint:** `/`
  - **Method:** `GET`
  - **Description:** Root endpoint for the API.

## File Structure

project/
│
├── controllers/
│ ├── products/
│ │ └── productcontroller.js
│ ├── orders/
│ │ └── ordercontroller.js
│ └── rootcontroller.js
│
├── models/
│ └── ProductSchema.js
│
├── routes/
│ ├── productRoutes.js
│ ├── orderRoutes.js
│ └── rootRoutes.js
│
├── app.js
└── README.md
