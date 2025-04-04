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
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg p-4 shadow-md">
      <Image
        src={`/upload/${data.image}`}
        alt={data.name}
        width={200}
        height={200}
        className="h-32 w-32 rounded-full object-cover"
      />
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p className="text-gray-600">{data.title}</p>
      <p className="text-gray-600">{data.description}</p>
    </div>
  );
};

export default AboutMeCard;
