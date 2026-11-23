import mongoose, { Schema } from "mongoose";
import type { ContactMessage } from "@/types";

const messageSchema = new Schema<ContactMessage>(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    subject: { type: String, required: true, trim: true, maxlength: 120 },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
  },
  { timestamps: true, strict: "throw" },
);

const Message =
  mongoose.models.Message ??
  mongoose.model<ContactMessage>("Message", messageSchema);

export default Message;
