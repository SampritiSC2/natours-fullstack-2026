const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then((conn) => {
    console.log("Database is connected:", conn.connection.host);
  })
  .catch((err) => {
    console.log("Database is not connected", err);
    process.exit(1);
  });
