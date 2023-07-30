const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonorsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonorController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

// ROUTER OJJECT
const router = express.Router();

// ROUTES

// GET || DONOR LIST
router.get(
  "/donor-list",
  authMiddleware,
  adminMiddleware,
  getDonorsListController
);

// GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

// GET || ORG LIST
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

// ===============================

// Delete Donor
router.delete(
  "/delete-donor/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonorController
);

// EXPORT
module.exports = router;
