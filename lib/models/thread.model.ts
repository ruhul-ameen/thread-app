import mongoose from "mongoose";
import { Original_Surfer } from "next/font/google";

const threadSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "community",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;

// Thread Original (parent)
//     -> Thread Comment1   (children)
//         -> Thread Comment2   (children)
//             -> Thread Comment3   (children)
//                 -> Thread Comment4   (children)
