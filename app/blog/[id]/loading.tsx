import HashloaderWrapper from "@/components/ui/hash-loader";
import React from "react";

const Loading = () => {
  return (
    <div className="my-14 flex flex-col items-center justify-center">
      <p className="my-12 text-3xl font-bold md:text-5xl">
        Inhalte werden geladen...
      </p>
      <HashloaderWrapper />
    </div>
  );
};

export default Loading;
