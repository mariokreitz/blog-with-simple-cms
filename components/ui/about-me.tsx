import Image from "next/image";
import React from "react";

type AboutMeProps = {
  image: string;
  name: string;
  title: string;
  description: string;
};
const AboutMeCard = ({ data }: { data: AboutMeProps }) => {
  return (
    <article className="flex max-w-xs flex-col gap-2 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 sm:max-w-2xl sm:flex-row">
      <div className="relative flex min-w-fit">
        <Image
          className="grayscale"
          src={`/upload/${data.image}`}
          width={300}
          height={500}
          alt={data.name}
          priority={false}
        />
        {/* Grauer Verlauf */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-neutral-900 sm:bg-gradient-to-r"></div>
      </div>

      <div className="flex flex-col p-4">
        <h3 className="text-2xl">{data.name}</h3>
        <h4 className="mb-4">{data.title}</h4>
        <p className="">{data.description}</p>
      </div>
    </article>
  );
};

export default AboutMeCard;
