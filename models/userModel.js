const mongoose = require("mongoose");

// Creating Schema
const userSchema = new mongoose.Schema(
  {
    role: {
      // Using Enums to check whether it is a user, organisation, or etc
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "organisation", "donor", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "user" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    organisationName: {
      type: String,
      required: function () {
        if (this.role === "organisation") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.role === "hospital") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address is requires"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema); // This will create a new collection for a user
