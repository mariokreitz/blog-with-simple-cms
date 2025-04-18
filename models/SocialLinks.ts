import { Schema, model, models } from "mongoose";

const SocialLinksSchema = new Schema({
  instagram: String,
  tiktok: String,
});

const SocialLinks =
  models.SocialLinks || model("SocialLinks", SocialLinksSchema);

export default SocialLinks;
