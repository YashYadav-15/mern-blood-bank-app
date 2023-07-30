const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonorController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

// router
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

// GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

// GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

// GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

// GET ALL BLOOD RECORDS
router.get("/get-donors", authMiddleware, getDonorController);

// GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

// GET ORGANISATION RECORDS
router.get("/get-organisation", authMiddleware, getOrganisationController);

// GET ORGANISATION RECORDS
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

module.exports = router;
