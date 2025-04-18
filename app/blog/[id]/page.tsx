import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";
import { BlogPost } from "@/types/BlogPost";
import { notFound } from "next/navigation";
import mongoose from "mongoose";
import Image from "next/image";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await dbConnect();

  try {
    const isValid = mongoose.Types.ObjectId.isValid(id);

    if (!isValid) return notFound();

    const post = await Post.findById<BlogPost>(id);

    if (!post) return notFound();

    const formattedDate = new Date(post.createdAt).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    return (
      <div className="min-h-screen py-24">
        <div className="relative h-96 w-full">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-60" />
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: post.image
                ? `url(/upload/${post.image})`
                : `url(/fallback.jpg)`,
            }}
          />
          <div className="absolute right-0 bottom-0 left-0 z-20 container mx-auto px-6 pb-8 text-white">
            <h1 className="mb-2 text-4xl leading-tight font-bold md:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="relative z-30 container mx-auto -mt-10 px-4 md:px-6">
          <div className="rounded-lg bg-neutral-900 p-6 shadow-lg md:p-10">
            <div className="mb-8 flex items-center">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/logo.jpg"
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border-2 object-cover"
              />

              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm">{formattedDate}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-white">
              <div
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 border-t border-gray-200 pt-6">
                <h3 className="mb-3 text-lg font-semibold">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return notFound();
  }
}
