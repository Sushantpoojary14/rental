const express = require("express");
const { getVehicleType } = require("../controllers/vehicle");

const router = express.Router();


router.get("/", getVehicleType);

module.exports = router;