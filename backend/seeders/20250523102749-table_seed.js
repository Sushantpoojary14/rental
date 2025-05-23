

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("vehicle_types", [
      {
        name: "Car",
        wheels: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bike",
        wheels: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
   
    ]);

    await queryInterface.bulkInsert("vehicle_categories", [
      {
        name: "Hatchback",
        vehicle_type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sports",
        vehicle_type_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sedan",
        vehicle_type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cruiser",
        vehicle_type_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Suv",
        vehicle_type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("vehicles", [
      {
        name: "Swift",
        vehicle_category_id: 1,
        model: "2023",
        color: "Red",
        brand: "Maruti",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fortuner",
        vehicle_category_id: 1,
        model: "2022",
        color: "Black",
        brand: "Toyota",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Civic",
        vehicle_category_id: 1,
        model: "2021",
        color: "Blue",
        brand: "Honda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Royal Enfield",
        vehicle_category_id: 2,
        model: "2020",
        color: "Green",
        brand: "RE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kawasaki Ninja",
        vehicle_category_id: 2,
        model: "2021",
        color: "Black",
        brand: "Kawasaki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("customers", [
      {
        first_name: "John",
        last_name: "Doe",
        vehicle_id: 1,
        book_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("customers", null, {});
    await queryInterface.bulkDelete("vehicles", null, {});
    await queryInterface.bulkDelete("vehicle_categories", null, {});
    await queryInterface.bulkDelete("vehicle_types", null, {});
  },
};