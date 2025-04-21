import ImageGallery from "@/components/ImageGallery";
import ImageUploader from "@/components/ImageUploader";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Bild hochladen</h1>
      <ImageUploader />
      <ImageGallery />
    </>
  );
};

export default page;
