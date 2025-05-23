require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "rental_db",
    host: process.env.DB_HOST,
    dialect: "mysql",
    migrationStorageTableName: "migration",
  },
  test: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "rental_db",
    host: process.env.DB_HOST,
    dialect: "mysql",
    migrationStorageTableName: "migration",
  },
  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "rental_db",
    host: process.env.DB_HOST,
    dialect: "mysql",
    migrationStorageTableName: "migration",
  },
};
