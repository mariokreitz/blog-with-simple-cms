import { BlogPost } from "@/types/BlogPost";
import Image from "next/image";

export function Card({ post }: { post: BlogPost }) {
  return (
    <div className="group/card w-full max-w-xs">
      <div
        className="card backgroundImage relative mx-auto flex h-96 max-w-sm cursor-pointer flex-col justify-between overflow-hidden rounded-md p-4 shadow-xl"
        style={{
          backgroundImage: post.image
            ? `url(/upload/${post.image})`
            : `url(/fallback.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full opacity-60 transition duration-300 group-hover/card:bg-black"></div>
        <div className="z-10 flex flex-row items-center space-x-4">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/logo.jpg"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="relative z-10 text-base font-normal text-gray-50">
              {post.author}
            </p>
            <p className="text-sm text-gray-400">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="relative z-10 text-xl font-bold text-gray-50 md:text-2xl">
            {post.title}
          </h3>
          <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );
}
