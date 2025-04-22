import { Schema, model, models } from "mongoose";

const SocialLinkItemSchema = new Schema(
  {
    url: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { _id: false },
);

const SocialLinksSchema = new Schema(
  {
    links: {
      type: Map,
      of: SocialLinkItemSchema,
      default: {},
    },
  },
  { timestamps: true },
);

const SocialLinks =
  models.SocialLinks || model("SocialLinks", SocialLinksSchema);

export default SocialLinks;
