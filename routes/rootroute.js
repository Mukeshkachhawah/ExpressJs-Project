const express = require("express");
const rootcontroller = require("../controllers/rootcontroller");

const router = express.Router();

router.get("/", rootcontroller);

module.exports = router;



// const express = require("express");
// // This line imports the Express module, which is a web application framework for Node.js. It simplifies the process of creating server-side applications and handling HTTP requests and responses.
// const rootcontroller = require("../controller/rootcontroller");
// // The rootcontroller is expected to be a JavaScript file or module that exports some functionality (usually middleware functions or route handlers) for handling HTTP requests.

// const router = express.Router();
// // Creating a Router Object:
// // express.Router(): A method provided by the Express module to create a new router object. Routers are used to create modular, mountable route handlers.
// router.get("/", rootcontroller);
// // a route that uses the rootcontroller for handling requests to the root path

// module.exports = router;
