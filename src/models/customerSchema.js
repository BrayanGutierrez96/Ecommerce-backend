import { Schema, model } from "mongoose";

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 16,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Customers = model("Customers", customerSchema);
