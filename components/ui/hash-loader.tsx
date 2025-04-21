import React, { CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const HashloaderWrapper = () => {
  return (
    <HashLoader
      color="gray"
      loading={true}
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
    />
  );
};

export default HashloaderWrapper;
