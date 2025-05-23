const express = require("express");
const {
  getVehicleType,
  getVehicleCategories,
  getVehicles,
  vehicleBooking,
} = require("../controllers/vehicleController");

const router = express.Router();

router.get("/vehicleType", getVehicleType);
router.get("/getVehicleCategories/:vehicle_type_id", getVehicleCategories);
router.get("/getVehicles/:vehicle_type_id", getVehicles);
router.post("/vehicleBooking", vehicleBooking);

module.exports = router;
