"use client";
import { motion } from "motion/react";
import { ImagesSlider } from "@/components/ui/images-slider";

export default function ImagesSliderWrapper() {
  const images = [
    "./img/slider_1.jpg",
    "./img/slider_2.jpg",
    "./img/slider_3.jpg",
    "./img/slider_4.jpg",
    "./img/slider_5.jpg",
  ];
  return (
    <ImagesSlider className="h-[20rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center"
      >
        <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-2xl font-bold text-transparent md:text-5xl">
          Kunstvolle Tattoos im minimalistischen Stil
        </motion.p>
        <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-sm font-bold text-transparent md:text-2xl">
          Einzigartige Designs, die deine Geschichte erzählen
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
