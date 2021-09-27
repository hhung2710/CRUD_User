const express = require("express");
const app = express();
const config = require("./config/config");
const getConnection = require("./config/database");
const routes = require('./view/routers/user.router');

app.use(express.json());

async () => {
  try {
    await getConnection;
  } catch (error) {
    console.log(error);
  }
};
app.use('/user',routes);

app.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
});
