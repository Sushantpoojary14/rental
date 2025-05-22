"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("vehicleType", [
      {
        name: "Hatchback",
        wheels: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "SUV", wheels: 4, createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Sedan",
        wheels: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cruiser",
        wheels: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sports",
        wheels: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("vehicleCategories", [
      {
        name: "Compact Cars",
        vehicleTypeID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luxury SUVs",
        vehicleTypeID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Family Sedans",
        vehicleTypeID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Touring Bikes",
        vehicleTypeID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Racing Bikes",
        vehicleTypeID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Vehicles", [
      {
        name: "Swift",
        vehicleCategoriesID: 1,
        model: "2023",
        color: "Red",
        brand: "Maruti",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fortuner",
        vehicleCategoriesID: 2,
        model: "2022",
        color: "Black",
        brand: "Toyota",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Civic",
        vehicleCategoriesID: 3,
        model: "2021",
        color: "Blue",
        brand: "Honda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Royal Enfield",
        vehicleCategoriesID: 4,
        model: "2020",
        color: "Green",
        brand: "RE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kawasaki Ninja",
        vehicleCategoriesID: 5,
        model: "2021",
        color: "Black",
        brand: "Kawasaki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("customers", [
      {
        firstName: "John",
        lastName: "Doe",
        vehiclesID: 1,
        bookDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        vehiclesID: 2,
        bookDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("customers", null, {});
    await queryInterface.bulkDelete("Vehicles", null, {});
    await queryInterface.bulkDelete("vehicleCategories", null, {});
    await queryInterface.bulkDelete("vehicleType", null, {});
  },
};
