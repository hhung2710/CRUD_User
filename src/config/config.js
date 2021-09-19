const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    db: {
        dbname: process.env.DB_dbname,
        username: process.env.DB_username,
        password: process.env.DB_password,
        host: process.env.DB_host,
        dialect: process.env.DB_dialect
    }

}