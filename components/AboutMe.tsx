import React from "react";
import AboutMeCard from "./ui/about-me";

const AboutMe = () => {
  const data = {
    image: "urkunde_pb.jpeg",
    name: "Philipp Silabetzschky",
    title: "Tätowierer",
    description: "hier text noch einfügen 😊",
  };
  return (
    <section>
      <AboutMeCard data={data} />
    </section>
  );
};

export default AboutMe;
