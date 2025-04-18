import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="my-14 flex flex-col items-center justify-center">
      <p className="my-12 text-3xl font-bold md:text-5xl">
        Inhalte werden geladen...
      </p>
      <HashLoader
        color="gray"
        loading={true}
        size={100}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loading;
