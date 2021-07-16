const mongoose = require("mongoose")

mongoose
  .connect(
    "mongodb://localhost:27017/omObayda",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  )
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log("couldnt connect to DB"))
