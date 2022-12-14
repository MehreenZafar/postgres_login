const express = require("express");
const app = express();
const cors = require("cors");

//CONSTANTS
const PORT = process.env.PORT || 3000;

//MIDDLEWARES
app.use(express.json()); //to return files as json
app.use(cors()); //for cross origin  files

//ROUTES
app.use("/auth", require("./routes/userAuth"));
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

//SERVER PORT
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});