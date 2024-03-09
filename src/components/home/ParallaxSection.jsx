import React, { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";
import debounce from "lodash/debounce";

const images = [
  "Img1.jpeg",
  "Img.jpeg",
  "Img2.jpeg",
  "Img3.jpeg",
  "Img1.jpeg",
  "Img.jpeg",
  "Img2.jpeg",
   "Img1.jpeg",
  "Img.jpeg",
  "Img2.jpeg",
  "Img3.jpeg",
  "Img1.jpeg",
  "Img.jpeg",
  "Img2.jpeg",                  
];

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * -1.3]);

  useEffect(() => {
    const resize = debounce(() => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, 100); // Adjust the debounce delay as needed
    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const MemoizedColumn = useMemo(() => React.memo(Column), []);

  return (
    <main className="font-sans">
      <div
        className="h-full w-full relative overflow-hidden bg-cover bg-fixed bg-gradient-to-t from-tedx-bg/100 to-transparent"
        style={{
          backgroundImage: `url(${require(`../../assets/Parallax-bg.png`)})`,
        }}
        ref={ref}
      >
        <div className="absolute w-full h-[200vh] top-0 flex justify-center items-center gap-[4vw] p-[2vw]">
          <MemoizedColumn images={images} y={y} className={"p-10 space-x-6"} />
        </div>
        <Overlay />
      </div>
    </main>
  );
}

const Column = ({ images, y, className }) => {
  return (
    <motion.div
      className={`relative w-full md:w-full min-w-450px flex-col gap-[2vw] whitespace-nowrap ${className}`}
      style={{ y }}
    >
      <div className=" top-10 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={require(`../../assets/${image}`)}
            className={`absolute ${getStyle(index)} z-${30 - index}`}
            alt="parallax"
          />
        ))}
      </div>
    </motion.div>
  );
};

const getStyle = (index) => {
  // Define position styles for each image based on the index
  // Adjust these styles as per your layout requirements
  switch (index) {
    case 0:
      return "inset-0 object-cover h-[50vh] w-[40vw] z-10 -top-[30vh]";
    case 1:
      return "-top-[5vh] left-[55vw] scale-95 object-cover h-[40vh] w-[60vh]";
    case 2:
      return "bottom-[40vh] left-[27.5vw] object-cover h-[25vh] w-[25vh]";
    case 3:
      return "bottom-[13vh] right-[.5vw] object-cover h-[25vh] w-[50vh]";
    case 4:
      return "-bottom-[90vh] right-[17.5vw] object-cover h-[25vh] w-[25vh]";
    case 5:
      return "top-[35vh] right-[45vw] scale-95 object-cover h-[40vh] w-[60vh]";
    default:
      return "";
  }
};
