const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const vehicles = sequelize.define("vehicles", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  vehicleCategoriesID: {
    type: Sequelize.INTEGER,
    references: "vehicleCategories",
    referencesKey: "id",
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
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

module.exports = vehicles;
