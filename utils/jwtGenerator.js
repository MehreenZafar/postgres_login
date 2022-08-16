const jwt = require("jsonwebtoken");
require("dotenv").config();

const Pool = require("pg").Pool;

const dbConfig = new Pool({
  user: "postgres",
  password: "Mehru.123",
  host: "localhost",
  port: 5432,
  database: "node_login",
  secret:"jswt87T"
});


module.exports = (user_id) => {
  const payload = {
    user: user_id,
  };

  return jwt.sign(payload, "jswt87T", { expiresIn: "1hr" });
};