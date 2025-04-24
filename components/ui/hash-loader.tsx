import React, { CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

interface HashloaderWrapperProps {
  size?: number;
}

const HashloaderWrapper = ({ size = 100 }: HashloaderWrapperProps) => {
  return (
    <HashLoader
      color="gray"
      loading={true}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
    />
  );
};

export default HashloaderWrapper;
