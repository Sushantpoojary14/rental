
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      book_date: {
        type: DataTypes.DATE,
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
      tableName: "customers",
    }
  );

  Customer.associate = (models) => {
    Customer.belongsTo(models.Vehicle, {
      foreignKey: "vehicle_id",
      as: "vehicle",
    });
  };

  return Customer;
};