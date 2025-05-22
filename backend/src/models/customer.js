const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const customers = sequelize.define("customers", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehiclesID: {
    type: Sequelize.INTEGER,
    references: "vehicles",
    referencesKey: "id",
    allowNull: false,
  },
  bookDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = customers;
