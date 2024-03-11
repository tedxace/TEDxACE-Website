import React, { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";
import debounce from "lodash/debounce";

const images = [
  "powertrainguy.png",
  "Sajitha.png",
  "Aayu.png",
  "Gaurav.png",
  "Shibin.png",
  "Aayu.png",
  "Gauri.png", 
                  
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
      return "inset-0 object-cover  w-[23vw] z-10 left-[15vw] -top-[3vh]";
    case 1:
      return "-top-[5vh] left-[60vw] object-cover w-[20vw]";
    case 2:
      return "bottom-[8vh] left-[5.5vw] object-cover  w-[25vw]";
    case 3:
      return "bottom-[8vh] right-[4.5vw] object-cover w-[25vw]";
    case 4:
      return "bottom-[12vh] right-[35vw] object-cover w-[25vw]";
    case 5:
      return "top-[35vh] right-[3vw] object-cover w-[25vw]";
    case 6:
      return "top-[35vh] left-[3vw] object-cover w-[25vw]";
    default:
      return "";
  }
};
