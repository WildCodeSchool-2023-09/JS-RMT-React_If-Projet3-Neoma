/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class contactManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "contact" as configuration
    super({ table: "contact" });
  }

// The C of CRUD - Create operation
async create(contact) {
  // Execute the SQL INSERT query to add a new contact to the "contact" table
  const [result] = await this.database.query(
    `INSERT INTO ${this.table} (nom, prenom, email, Tel, IDUtilisateur) VALUES (?, ?, ?, ?, ?)`,
    [contact.nom, contact.prenom, contact.email, contact.Tel, contact.IDUtilisateur]
  );

  // Return the ID of the newly inserted contact
  return result.insertId;
}

  async readAll(userId) {
    try {
      // Execute the SQL SELECT query to retrieve all contacts for a specific IDUtilisateur
      const query = `SELECT * FROM ${this.table} WHERE IDUtilisateur = ?`;
      const [rows] = await this.database.query(query, [userId]);
  
      // Return the array of contacts
      return rows;
    } catch (error) {
      console.error('ReadAll Error:', error); // Log any error that occurs
      throw error; // Re-throw the error
    }
  }
  

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an contact by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = contactManager;
