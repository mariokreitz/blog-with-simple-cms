import type { BlogPost } from "@/types/BlogPost";
import type { ImageData } from "@/types/ImageData";
import { SocialMediaLinks } from "@/types/SocialMediaLinks";
import axios from "axios";

export const getPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get("/api/posts");
  return response.data.posts;
};

export const getImages = async (): Promise<ImageData[]> => {
  const response = await axios.get("/api/aws/images");
  return response.data.images;
};

export const fetchSocialMediaLinks = async (): Promise<SocialMediaLinks> => {
  const response = await axios.get<SocialMediaLinks>("/api/social-links");
  return response.data;
};

export const saveSocialMediaLinks = async (links: SocialMediaLinks) => {
  await axios.put("/api/social-links", links, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
