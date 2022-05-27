import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
  {
    orderNo: {
      type: String,
      required: [true, "Please provide an order number"],
    },
    customerName: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    salesDate: {
      type: Date,
      required: true,
    },
    owner: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Sales || mongoose.model("Sales", SalesSchema);
