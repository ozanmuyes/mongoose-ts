import { Schema, model } from "mongoose";

import type User from "../entities/User";

const schema = new Schema<User>({
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  // NOTE Match with the entity
});

export default model<User>("User", schema);
