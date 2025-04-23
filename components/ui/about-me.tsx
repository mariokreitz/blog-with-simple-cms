import React from "react";

type AboutMeProps = {
  image: string;
  name: string;
  title: string;
  description: string;
};
const AboutMeCard = ({ data }: { data: AboutMeProps }) => {
  return (
    <div className="flex max-w-xs flex-col gap-2 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 sm:max-w-2xl sm:flex-row">
      <div className="relative flex min-w-fit">
        <img
          className="grayscale"
          src={`https://lipptattoo.s3.eu-central-1.amazonaws.com/${data.image}`}
          width={300}
          height={500}
          alt={data.name}
        />
        {/* Grauer Verlauf */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-neutral-900 sm:bg-gradient-to-r"></div>
      </div>

      <div className="flex flex-col p-4">
        <h3 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl text-transparent">
          {data.name}
        </h3>
        <h4 className="mb-4 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
          {data.title}
        </h4>
        <p className="">{data.description}</p>
      </div>
    </div>
  );
};

export default AboutMeCard;
