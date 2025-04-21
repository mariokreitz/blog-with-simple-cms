import Gallery from "@/components/Gallery";
import ImageUploader from "@/components/ImageUploader";
import React from "react";

const page = () => {
  return (
    <>
      <h2>Image Uploader</h2>
      <ImageUploader />
      <Gallery />
    </>
  );
};

export default page;
