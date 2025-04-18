import { Schema, models, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true },
);

const Post = models.Post || model("Post", PostSchema);

export default Post;
