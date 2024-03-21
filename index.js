const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const colors = require("colors");
const cors = require("cors");

const userRoute = require("./src/routes/userRoute");
const blogRoute = require("./src/routes/blogRoute");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(colors.bgCyan(`Server listening on PORT ${PORT}`));
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(colors.bgCyan("Succesfully connected to MongoDB"));
  })
  .catch(() => {
    console.log(colors.bgRed("Error in database connection!"));
  });
