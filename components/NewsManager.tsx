"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts, getImages } from "@/lib/dataFetching";
import { BlogPost } from "@/types/BlogPost";
import { ImageData } from "@/types/ImageData";
import HashloaderWrapper from "./ui/hash-loader";
import NewPostForm from "./NewPostForm";
import PostsAdmin from "./PostsAdmin";

export default function NewsManager() {
  const {
    data: posts,
    error: postError,
    isLoading: pl,
    refetch: refetchPosts,
  } = useQuery<BlogPost[]>({ queryKey: ["posts", "admin"], queryFn: getPosts });
  const {
    data: images,
    error: imgError,
    isLoading: il,
  } = useQuery<ImageData[]>({
    queryKey: ["images", "admin"],
    queryFn: getImages,
  });

  if (pl || il) {
    return (
      <div className="my-14 flex flex-col items-center justify-center">
        <p className="my-12 text-3xl font-bold text-gray-200 md:text-5xl">
          Lade Daten...
        </p>
        <HashloaderWrapper />
      </div>
    );
  }
  if ((postError || imgError) instanceof Error) {
    return <p className="text-red-500">{(postError || imgError)!.message}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-6 text-2xl font-semibold text-gray-100">
        News Manager
      </h2>
      <NewPostForm images={images!} onSuccess={refetchPosts} />
      {posts && posts.length > 0 ? (
        <PostsAdmin posts={posts} images={images!} />
      ) : (
        <div className="py-10 text-center">
          <p className="text-3xl font-bold text-gray-200">
            Keine News verfügbar
          </p>
        </div>
      )}
    </div>
  );
}
