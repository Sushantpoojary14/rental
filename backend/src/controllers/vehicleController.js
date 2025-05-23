const { Op } = require("sequelize");

const {
  VehicleType,
  VehicleCategory,
  Customer,
  Vehicle,
} = require("../models/index");

exports.getVehicleType = async (req, res) => {
  try {
    const vehicleTypes = await VehicleType.findAll();
    return res.status(200).json({ message: "Fetched", vehicleTypes });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "server error" });
  }
};

exports.getVehicleCategories = async (req, res) => {
  try {
    const vehicle_type_id = req.params.vehicle_type_id;
    const vehicleCategories = await VehicleCategory.findAll({
      where: { vehicle_type_id: vehicle_type_id },
    });
    return res.status(200).json({ message: "Fetched", vehicleCategories });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "server error" });
  }
};

exports.getVehicles = async (req, res) => {
  try {
    const vehicle_category_id = req.params.vehicle_type_id;
    const vehicles = await Vehicle.findAll({
      where: { vehicle_category_id: vehicle_category_id },
    });
    return res.status(200).json({ message: "Fetched", vehicles });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "server error" });
  }
};

exports.vehicleBooking = async (req, res) => {
  try {
    const { first_name, last_name, vehicle_id, book_date } = req.body ?? {};
    if (!first_name || !last_name || !vehicle_id || !book_date) {
      return res.status(400).json({ message: "missing fields" });
    }
    const vehicleExist = await Customer.findOne({
      where: {
      vehicle_id: vehicle_id,
      book_date: {
        [Op.eq]: new Date(book_date).setHours(0, 0, 0, 0),
      },
      },
    });
    console.log(vehicleExist);
    
    if (vehicleExist) {
      return res
      .status(409)
      .json({ message: "Already booked. Please select a different date." });
    }
    await Customer.create({
      first_name,
      last_name,
      vehicle_id,
      book_date: new Date(book_date).setHours(0, 0, 0, 0),
    });
    return res.status(200).json({ message: "Successfully added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};
