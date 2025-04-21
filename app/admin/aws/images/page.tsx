import ImageGallery from "@/components/ImageGallery";
import ImageUploader from "@/components/ImageUploader";
import React from "react";

const page = () => {
  return (
    <>
      <h2>Image Uploader</h2>
      <ImageUploader />
      <ImageGallery />
    </>
  );
};

export default page;
