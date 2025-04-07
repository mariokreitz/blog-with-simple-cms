"use client";

import { useEffect, useState } from "react";

const Location = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="location"
      className="mx-auto flex max-w-7xl flex-col items-center px-4 py-12"
    >
      <h2 className="relative w-fit text-center text-2xl font-bold sm:text-4xl">
        Wo du mich finden kannst
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-slate-500/0 via-slate-500/70 to-slate-500/10"></span>
      </h2>
      <p className="text-md mt-4 text-center">
        Du findest mich im Studio bei 614 Tattoo &amp; Piercing in Schorndorf.
      </p>
      {isClient && (
        <iframe
          className="mt-8 h-96 w-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.74735635769!2d9.52275407675357!3d48.80580030440559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799bb244617b605%3A0xb2f82972f8f1353e!2s614%20Tattoo%20%26%20Piercing!5e0!3m2!1sde!2sde!4v1744024458621!5m2!1sde!2sde"
          loading="lazy"
        ></iframe>
      )}
    </section>
  );
};

export default Location;
