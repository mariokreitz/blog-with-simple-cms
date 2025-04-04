"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card } from "./ui/blog-post-card";
import { BlogPost } from "@/types/BlogPost";

export const getPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get("/pages/api/posts");
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
    (a: BlogPost, b: BlogPost) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <section
      id="news"
      className="my-14 flex scroll-mt-14 flex-col items-center"
    >
      <h2 className="my-12 text-3xl font-bold md:text-5xl">News</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((post: BlogPost) => (
          <div key={post._id} className="h-full w-full">
            <Card data={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
