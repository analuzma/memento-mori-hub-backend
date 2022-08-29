const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    firstName: {
      type: String,
      minlength: 1,
    },
    imageUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806705/asdsadsa_iysw1l.jpg",
    },
    dateOfBirth: {
      type: Date,
      required: 'Please fill date of birth',
      trim: true,
      min: '1900-00-00',
    },
    dateOfDeath: {
      type: Date,
      required: 'Please fill aproximate date of death',
      trim: true,
      max: '2150-00-00',
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;