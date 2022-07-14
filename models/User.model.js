const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 50,
    },
    password: {
      type: String,
      required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true,
      },
      postcode: {
        type: Number,
        required: true,
        trim: true,
      },
      locality: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100,
      },
      address: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
