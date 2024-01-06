// Import access to database tables
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");
const config = require("../config"); // Assurez-vous d'avoir un fichier de configuration avec une clé secrète pour JWT

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;
  console.info(user);
  const { email, mdp, nom, prenom } = req.body;

  try {
    // Hash the user's password with Argon2
    const hashedPassword = await argon2.hash(mdp);

    // Create a new user object with the hashed password
    const userToRegister = {
      email,
      mdp: hashedPassword,
      nom,
      prenom,
    };

    // Insert the user into the database
    const insertId = await tables.user.create(userToRegister);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
    res.status(201).json({ id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const login = async (req, res, next) => {
  // Extract the user data from the request body
  const { email, mdp } = req.body;

  try {
    // Étape 1 : aller chercher l'utilisateur via son email
    const user = await tables.user.readmail(email);
    // Si l'utilisateur est trouvé
    if (user) {
      // Comparer les mots de passe avec Argon2
      const passwordMatch = await argon2.verify(user.mdp, mdp);

      // Si les mots de passe correspondent
      if (passwordMatch) {
        // Générer un jeton JWT
        const token = jwt.sign({ email: user.email }, config.jwtSecret, {
          expiresIn: "1h",
        });

        // Paramétrer le cookie HTTPOnly
        res.cookie("token", token, { httpOnly: true });

        // Répondre avec le statut 200 (OK) et les informations de connexion
        res
          .cookie({ token })
          .status(200)
          .json({ connected: true, email: user.email });
      } else {
        // Si les mots de passe ne correspondent pas, rejeter la connexion avec un message d'erreur
        res.status(401).json({ error: "Wrong credentials" });
      }
    } else {
      // Si l'utilisateur n'est pas trouvé, rejeter la connexion avec un message d'erreur
      res.status(401).json({ error: "Wrong credentials" });
    }
  } catch (err) {
    // Passer les erreurs au middleware de gestion des erreurs
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  login,
  // destroy,
};
