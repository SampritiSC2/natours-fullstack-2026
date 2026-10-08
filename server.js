const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
require("./config/db");

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server is started on ${PORT}`);
});
