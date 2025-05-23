const { Sequelize } = require('sequelize');

console.log( process.env.DB_DATABASE);
 const sequelize = new Sequelize({
  database: process.env.DB_DATABASE || "rental_db",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST,
  port: 3306, 
  dialect: 'mysql',

});

// Test the connection
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}
module.exports = sequelize
connectToDatabase()
