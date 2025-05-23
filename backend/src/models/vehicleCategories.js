
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const VehicleCategory = sequelize.define(
    "VehicleCategory",
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
      vehicle_type_id: {
        type: DataTypes.INTEGER,
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
      tableName: "vehicle_categories",
    }
  );

  VehicleCategory.associate = (models) => {
    VehicleCategory.belongsTo(models.VehicleType, {
      foreignKey: "vehicle_type_id",
      as: "vehicleType",
    });
    VehicleCategory.hasMany(models.Vehicle, {
      foreignKey: "vehicle_category_id",
      as: "vehicles",
    });
  };

  return VehicleCategory;
};