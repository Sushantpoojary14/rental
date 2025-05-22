const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const vehicleCategories = sequelize.define("vehicleCategories", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  vehicleTypeID: {
    type: Sequelize.INTEGER,
    references: "vehicleType",
    referencesKey: "id",
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

module.exports = vehicleCategories;
