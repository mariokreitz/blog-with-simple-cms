import type { BlogPost } from "@/types/BlogPost";
import type { ImageData } from "@/types/ImageData";
import axios from "axios";

export const getPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get("/api/posts");
  return response.data.posts;
};

export const getImages = async (): Promise<ImageData[]> => {
  const response = await axios.get("/api/aws/images");
  return response.data.images;
};

export const fetchSocialMediaLinks = async (): Promise<{
  instagram?: string;
  tiktok?: string;
}> => {
  const response = await fetch("/api/social-links");
  if (!response.ok) {
    throw new Error("Error fetching social media links");
  }
  return response.json();
};

export const saveSocialMediaLinks = async (links: {
  instagram?: string;
  tiktok?: string;
}) => {
  const response = await fetch("/api/social-links", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(links),
  });
  if (!response.ok) {
    throw new Error("Error saving social media links");
  }
};
