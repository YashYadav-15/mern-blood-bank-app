const mongoose = require("mongoose");

// Creating Schema
const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "Inventory Type Require"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood Group is Required"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      // required: [true, "Blood Quantity is Required"],
      require: [true, "Blood Quantity is Required"],
    },
    email: {
      type: String,
      required: [true, "Donor Email is Required"],
    },
    // email: {
    //   type: String,
    //   required: [true, "Blood Quantity is Required"],
    // },
    // Wasted - Many Days
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      // ref:"organisation",
      ref: "users",
      required: [true, "Organisation is Required"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
      // Commented in v-26
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
