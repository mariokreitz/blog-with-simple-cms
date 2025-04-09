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
      <article className="container mx-auto px-4 py-24">
        <header className="mb-12">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-gray-600">
            {new Date(post.createdAt).toLocaleDateString()}
            {" - "}
            {post.author}
          </p>
        </header>
        <div className="mb-12 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div
              style={{
                backgroundImage: post.image
                  ? `url(/upload/${post.image})`
                  : `url(/fallback.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <div
              className="prose prose-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    );
  } catch (error) {
    console.error(error);
    return notFound();
  }
}
