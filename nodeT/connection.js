const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234k",
    database: "caamto"
})

module.exports = client