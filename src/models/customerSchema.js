import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 16,
    },
    rol: {
      type: String,
      enum: ["admin", "customer", "superAdmin", "seller"],
      default: "customer",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const passwordEncrypt = await bcrypt.hash(this.password, 8);

      this.password = passwordEncrypt;
    } catch (err) {
      console.log(err);
    }
  }
});

// deshashear la contrasena, para cuando se autentifique
userSchema.methods.verifyPassword = async function (pass) {
  try {
    const compare = await bcrypt.compare(pass, this.password);
    return compare;
  } catch (error) {
    console.log(error);
  }
};

export const Users = model("Users", userSchema);
