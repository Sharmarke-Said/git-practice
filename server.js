const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("MongoDB Connected Succesfully!...");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
