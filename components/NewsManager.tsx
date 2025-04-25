"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts, getImages } from "@/lib/dataFetching";
import { BlogPost } from "@/types/BlogPost";
import { ImageData } from "@/types/ImageData";
import HashloaderWrapper from "./ui/hash-loader";
import PostsAdmin from "./PostsAdmin";
import NewPostForm from "./NewPostForm";

export default function NewsManager() {
  const {
    data: posts,
    error: postError,
    isLoading: postsLoading,
    refetch: refetchPosts,
  } = useQuery<BlogPost[]>({
    queryKey: ["posts", "admin"],
    queryFn: getPosts,
  });

  const {
    data: images,
    error: imagesError,
    isLoading: imagesLoading,
  } = useQuery<ImageData[]>({
    queryKey: ["images", "admin"],
    queryFn: getImages,
  });

  if (postsLoading || imagesLoading) {
    return (
      <div className="my-14 flex flex-col items-center justify-center">
        <p className="my-12 text-3xl font-bold text-gray-200 md:text-5xl">
          Lade Daten...
        </p>
        <HashloaderWrapper />
      </div>
    );
  }

  if ((postError || imagesError) instanceof Error) {
    return (
      <p className="text-red-500">{(postError || imagesError)!.message}</p>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-6 text-2xl font-semibold text-gray-100">
        News Manager
      </h2>

      <NewPostForm images={images!} onSuccess={refetchPosts} />

      {!posts || posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-3xl font-bold text-gray-200">
            Keine News verfügbar
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PostsAdmin posts={posts} />
        </div>
      )}
    </div>
  );
}
