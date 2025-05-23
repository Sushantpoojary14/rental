
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define(
    "Vehicle",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicle_category_id: {
        type: DataTypes.INTEGER,
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
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "vehicles",
    }
  );

  Vehicle.associate = (models) => {
    Vehicle.belongsTo(models.VehicleCategory, {
      foreignKey: "vehicle_category_id",
      as: "category",
    });
    Vehicle.hasMany(models.Customer, {
      foreignKey: "vehicle_id",
      as: "customers",
    });
  };

  return Vehicle;
};