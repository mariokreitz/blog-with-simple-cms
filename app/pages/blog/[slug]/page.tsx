import { GetServerSideProps } from "next";
import { BlogPost } from "@/types/BlogPost";
import dbConnect from "../../../../lib/dbConnect";
import Post from "../../../../schema/Post";

type BlogPageProps = {
  post: BlogPost | null;
};

export default function BlogPage({ post }: BlogPageProps) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.author}</p>
      <p className="mt-4">{post.content}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  await dbConnect();

  try {
    const post = await Post.findById(id).lean();
    return {
      props: { post: post ? JSON.parse(JSON.stringify(post)) : null },
    };
  } catch (error) {
    console.error(error);
    return { props: { post: null } };
  }
};
