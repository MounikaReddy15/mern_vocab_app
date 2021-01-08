const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv/config");

// connect to database
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}),
  mongoose.connection.once("open", () => {
    console.log("connected to DB");
  });

const app = express();

const port = process.env.PORT || 9000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//we need to tell the app to use the exported router
app.use("/", require("./routes/user"));

//to make the app listen
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
