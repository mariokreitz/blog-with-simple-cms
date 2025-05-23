"use client";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./ui/blog-post-card";
import { BlogPost } from "@/types/BlogPost";
import Link from "next/link";
import { getPosts } from "@/lib/dataFetching";
import HashloaderWrapper from "./ui/hash-loader";

const Posts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (error instanceof Error) console.error(error.message);

  if (isLoading)
    return (
      <div className="my-14 flex flex-col items-center justify-center">
        <p className="my-12 text-3xl font-bold md:text-5xl">
          News werden geladen...
        </p>
        <HashloaderWrapper />
      </div>
    );
  if (error instanceof Error)
    return (
      <div className="my-14 flex flex-col items-center justify-center px-8">
        <p className="text-3xl font-bold md:text-5xl">Hopala...</p>
        <p className="mt-4 text-center text-xl text-pretty">
          Es sieht so aus, als ob der Server aktuell kein Zeit hat, dir News
          anzuzeigen. Schau einfach bei mir auf Instagram vorbei...
          <br />
          <a
            href="https://www.instagram.com/lipp.tattoos/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @lipp.tattoos
          </a>
        </p>
      </div>
    );

  if (!data || data.length === 0) {
    return (
      <div className="my-14 flex flex-col items-center justify-center px-8">
        <p className="text-3xl font-bold md:text-5xl">Keine News verfügbar</p>
        <p className="mt-4 text-center text-xl text-pretty">
          Es sieht so aus, als ob der Server aktuell keine News anzuzeigen hat.
          Probiere es einfach später noch einmal...
        </p>
      </div>
    );
  }

  return (
    <section id="news" className="flex flex-col items-center px-4 py-14">
      <h2 className="relative my-12 text-4xl font-bold md:text-6xl">
        News
        <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-slate-500/0 via-slate-500/70 to-slate-500/0"></span>
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((post: BlogPost, index) => (
          <div key={index} className="h-full w-full">
            <Link href={`/blog/${post._id}`}>
              <Card post={post} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
