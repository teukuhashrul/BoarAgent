const pgp = require("pg-promise")();

const db = pgp({
  user: process.env.PSQL_USER || "postgres",
  host: process.env.PSQL_HOST || "localhost",
  database: process.env.PSQL_DB || "postgres",
  password: process.env.PSQL_PASS || "mysecretpassword",
  port: process.env.PSQL_PORT ? parseInt(process.env.PSQL_PORT, 10) : 8080
});

module.exports = { db, pgp };