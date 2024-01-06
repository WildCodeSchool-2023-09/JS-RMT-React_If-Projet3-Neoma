const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const contacts = await tables.contact.readAll(req.params.userid);
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific contact from the database based on the provided userID and contactID
    const contact = await tables.contact.readById(
      req.params.userid,
      req.params.contactId
    );

    // If the contact is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the contact in JSON format
    if (!contact) {
      res.sendStatus(404);
    } else {
      res.json(contact);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  const contact = req.body;

  try {
    const insertId = await tables.contact.create(contact);
    res.status(201).json({ id: insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
