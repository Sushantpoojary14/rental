const vehicleType = require("../models/vehicleType");
const vehicleCategories = require("../models/vehicleCategories");
const { where } = require("sequelize");
exports.module = getVehicleType = async (req, res) => {
  try {
    const vehicleType = await vehicleType.findAll();
    return res.status(200).json({ message: "server error", vehicleType });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "server error" });
  }
};

// exports.module = getVehicleCategories = async (req, res) => {
//     try {
//         const vehicleTypeId = req.vehicleType
//       const vehicleCategories = await vehicleCategories.findAll({where:});
//       return res.status(200).json({ message: "server error", vehicleCategories });
//     } catch (error) {
//       console.log(error);
      
//       return res.status(500).json({ message: "server error" });
//     }
//   };