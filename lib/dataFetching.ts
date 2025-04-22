import type { BlogPost } from "@/types/BlogPost";
import type { ImageData } from "@/types/ImageData";
import { SocialMediaLinks } from "@/types/SocialMediaLinks";
import axios from "axios";

// GET all posts
export const getPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get("/api/posts");
  return response.data.posts;
};

// GET all images
export const getImages = async (): Promise<ImageData[]> => {
  const response = await axios.get("/api/aws/images");
  return response.data.images;
};

// GET all social media links
export const fetchSocialMediaLinks = async (): Promise<SocialMediaLinks> => {
  const response = await axios.get<SocialMediaLinks>("/api/social-links");
  return response.data;
};

// PUT all social media links
export const saveSocialMediaLinks = async (links: SocialMediaLinks) => {
  await axios.put("/api/social-links", links);
};

// GET all whitelisted emails
export const fetchWhitelist = async (): Promise<string[]> => {
  const response = await axios.get("/api/whitelist");
  return response.data;
};

// PUT all whitelisted emails
export const addToWhitelist = async (email: string): Promise<void> => {
  await axios.post("/api/whitelist", { email });
};

// DELETE a whitelisted email
export const removeFromWhitelist = async (email: string): Promise<void> => {
  await axios.delete("/api/whitelist", { data: { email } });
};
