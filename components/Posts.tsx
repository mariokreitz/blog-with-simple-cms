"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card } from "./ui/blog-post-card";
import { IPost } from "@/models/Post";

export const getPosts = async (): Promise<IPost[]> => {
  const response = await axios.get("/api/posts");
  return response.data.posts;
};

const Posts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  if (!data || data.length === 0) {
    return <div>No posts available.</div>;
  }

  data.sort(
    (a: IPost, b: IPost) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <div className="my-8 flex flex-col items-center">
      <h2 className="my-8 text-3xl font-bold md:text-5xl">News</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((post: IPost) => (
          <div key={post._id} className="h-full w-full">
            <Card data={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
