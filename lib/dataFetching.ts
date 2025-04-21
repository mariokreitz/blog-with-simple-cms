import { BlogPost } from "@/types/BlogPost";
import axios from "axios";

export const getPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get("/api/posts");
  return response.data.posts;
};
