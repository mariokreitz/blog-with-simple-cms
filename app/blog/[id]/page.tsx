import dbConnect from "@/lib/dbConnect";
import Post from "@/schema/Post";
import { BlogPost } from "@/types/BlogPost";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await dbConnect();

  try {
    const post = (await Post.findById(id)) as BlogPost | null;

    if (!post) return notFound();

    return (
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600">{post.author}</p>
        <p className="mt-4">{post.content}</p>
      </div>
    );
  } catch (error) {
    console.error(error);
    return notFound();
  }
}
