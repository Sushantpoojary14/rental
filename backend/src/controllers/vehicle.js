const { VehicleType, VehicleCategory } = require("../models/index");

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
    const params = req.params;
    const vehicleCategories = await VehicleCategory.findAll({
      where: { vehicle_type_id: params },
    });
    return res.status(200).json({ message: "server error", vehicleCategories });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "server error" });
  }
};
