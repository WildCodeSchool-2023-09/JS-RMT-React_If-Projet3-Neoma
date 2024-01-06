const express = require("express");

const router = express.Router();
const userControllers = require("./controllers/userControllers");
const contactControllers = require("./controllers/contactControllers");

// Route to get a list of users
router.get("/user", userControllers.browse);

// Route to get a specific user by ID
router.get("/user/:id", userControllers.read);

// Route to add a new user
router.post("/signup", userControllers.add);

//
//

// Route to check connection
router.post("/login", userControllers.login);

//
//

// Route to get a list of contacts
router.get("/contact/:userid", contactControllers.browse);

// Route to get a specific contact by ID
router.get("/contact/:userid/:contactId", contactControllers.read);

// Route to add a new contact
router.post("/createcontact", contactControllers.add);

module.exports = router;
