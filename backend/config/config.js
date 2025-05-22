require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "rental_db",
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};
