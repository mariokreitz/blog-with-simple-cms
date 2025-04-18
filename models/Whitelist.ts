import { Schema, model, models } from "mongoose";

const WhitelistSchema = new Schema({
  email: { type: String, unique: true, required: true },
});

const Whitelist = models.Whitelist || model("Whitelist", WhitelistSchema);

export default Whitelist;
