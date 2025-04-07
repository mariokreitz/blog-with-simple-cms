import React from "react";
import AboutMeCard from "./ui/about-me";

const AboutMe = () => {
  const data = {
    image: "urkunde_pb.jpeg",
    name: "Philipp Silabetzschky",
    title: "Tätowierer",
    description:
      "Seit ein paar Jahren träume ich davon, Tätowierer zu werden, und heute lebe ich diesen Traum. Mein Herz schlägt besonders für Anime und Manga, und genau dieser Stil prägt meine Tattoos. Jedes Design, das ich auf die Haut bringe, erzählt eine Geschichte - sei es ein Charakter, eine Szene oder ein Detail. Es ist für mich mehr als nur Kunst; es ist eine Leidenschaft, die ich mit jedem Tattoo in die Welt trage.",
  };
  return (
    <section id="about" className="flex flex-col items-center px-4 py-14">
      <div className="my-12">
        <h2 className="text-4xl font-bold">Das bin ich</h2>
      </div>
      <AboutMeCard data={data} />
    </section>
  );
};

export default AboutMe;
