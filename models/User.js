import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    surname: {
      type: String,
      required: [true, "Please provide a surname"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    ibanNo: {
      type: String,
      required: [true, "Please provide the iban no"],
      maxlength: [60, "IBAN no cannot be more than 26"],
    },
    swiftCode: {
      type: String,
      requires: true,
    },
    offerupNick: {
      type: String,
      required: [true, "Please enter your offerup nick."],
      maxlength: [40, "Species specified cannot be more than 40 characters"],
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      requires: true,
    },
    sales: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sales",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
