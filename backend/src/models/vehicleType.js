const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

module.exports = (sequelize, DataTypes) => {
  const vehicleType = sequelize.define("vehicleType", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wheels: {
      type: DataTypes.TINYINT,
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

  vehicleType.associate = (models) => {
    vehicleType.hasMany(models.Vehicle, {
      foreignKey: "vehicleType",
      as: "vehicleCategories",
    });
  };

  return vehicleType;
};
