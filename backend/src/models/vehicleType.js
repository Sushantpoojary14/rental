
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const VehicleType = sequelize.define(
    "VehicleType",
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
      wheels: {
        type: DataTypes.TINYINT,
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
      tableName: "vehicle_types",
    }
  );

  VehicleType.associate = (models) => {
    VehicleType.hasMany(models.VehicleCategory, {
      foreignKey: "vehicle_type_id",
      as: "categories",
    });
  };

  return VehicleType;
};