const Pool = require("pg").Pool;

const dbConfig = new Pool({
  user: "postgres",
  password: "Mehru.123",
  host: "localhost",
  port: 5432,
  database: "node_login",
  secret:"jswt87T"
});

// const pool= new Pool({
//     user: "postgres",
//     password: "Mehru.123",
//     database: "node_database",
//     host: "localhost",
//     port: 5432
// });

// no