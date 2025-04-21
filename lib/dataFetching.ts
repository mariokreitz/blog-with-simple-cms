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
