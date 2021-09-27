const typeorm = require("typeorm");
const config = require("./config");

const getConnection = typeorm.createConnection({
    type: config.db.dialect,
    host: config.db.host,
    port: 5432,
    username: config.db.username,
    password: config.db.password,
    database: config.db.dbname,
    synchronize: true,
    entities: [
        require('../entities/user.entity')
    ]
})

module.exports = {
    getConnection
}