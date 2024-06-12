const express = require("express");
//express is a variable
//express =  require is header file  .. that is old version
//require is a function that is used to import the header file
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const rootroute = require("./routes/rootroute");
const productroute = require("./routes/productroute");
const { connect } = require("mongoose");
const connectDB = require("./config/db");

const app = express();
//express jo hai vo server handling kar skti hai
//express ko server ke lia use krna hai
//express is a function that is used to create a server
//jisse hum http protocol ka use kar payenge jisme http methods ka access kar skeneg
// eg. get ,post ,put ,patch ,delete
// app is a variablex

dotenv.config();
connectDB();

const PORT = process.env.PORT || 8000 || 6000;

app.use("/", rootroute);
app.use("/products", productroute);
//content ko dikhana kya he ye vo kam krega
//root(request) , controller(response)
//session storage(session) and local storage(cockie)
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});



// // Importing necessary modules
// const express = require("express");
// // Express is a variable that holds the reference to the Express module, which is used to create the server.

// const dotenv = require("dotenv");
// // Dotenv is a module that loads environment variables from a .env file into process.env.

// // const cors = require("cors");
// // CORS is a middleware for enabling Cross-Origin Resource Sharing.

// // const morgan = require("morgan");
// // Morgan is a middleware for logging HTTP requests.

// const rootroute = require("./routes/rootroute");
// // Importing the root route module. This typically contains the routing logic for the root endpoint.

// // const productroute = require("./routes/productroute");
// // Importing the product route module. This typically contains the routing logic for product-related endpoints.

// // const { connect } = require("mongoose");
// // Destructuring the 'connect' function from the mongoose module. Mongoose is an ODM (Object Data Modeling) library for MongoDB.

// // const connectDB = require("./config/db");
// // Importing a custom module that handles the database connection logic.

// const app = express();
// // Initializing the Express application. 'app' is an instance of the Express application.

// // Middleware explanation comments
// // Express is used to handle server functionality and HTTP methods like GET, POST, PUT, PATCH, DELETE.

// // dotenv.config();
// // Loading environment variables from a .env file into process.env.

// // connectDB();
// // Connecting to the database using the custom connectDB function from ./config/db.

// const PORT = process.env.PORT || 8000 || 6000;
// // Defining the port number on which the server will listen. It first tries to use the value from the .env file, then defaults to 8000, and finally to 6000 if the others are not defined.

// app.use("/", rootroute);
// // Using the root route for handling requests to the root endpoint ("/").

// // app.use("/products", productroute);
// // Using the product route for handling requests to the "/products" endpoint.

// // Additional comments
// // The root route and product route handle the content display (response) for their respective endpoints.
// // The root route ("/") handles the default requests, while the product route ("/products") manages product-related requests.

// app.listen(PORT, () => {
//   console.log(`server running on ${PORT}`);
// });
// // Starting the server and making it listen on the defined port. Logs the running port to the console.
