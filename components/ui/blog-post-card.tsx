"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Card() {
  return (
    <div className="group/card w-full max-w-xs">
      <div
        className={cn(
          "card backgroundImage relative mx-auto flex h-96 max-w-sm cursor-pointer flex-col justify-between overflow-hidden rounded-md p-4 shadow-xl",
          "bg-[url(/urkunde_pb.jpeg)] bg-cover",
        )}
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
              Philipp Silabetzschky
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="relative z-10 text-xl font-bold text-gray-50 md:text-2xl">
            Urkunde
          </h1>
          <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
            Professionelle Tätowierung - 614 Tattoo & Piercing.
          </p>
        </div>
      </div>
    </div>
  );
}
