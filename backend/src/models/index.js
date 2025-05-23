

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const models = {
  VehicleType: require("./vehicleType")(sequelize, DataTypes),
  VehicleCategory: require("./vehicleCategories")(sequelize, DataTypes),
  Vehicle: require("./vehicles")(sequelize, DataTypes),
  Customer: require("./customer")(sequelize, DataTypes),
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
