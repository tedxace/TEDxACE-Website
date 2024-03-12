import React, { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";
import debounce from "lodash/debounce";

const images = [
  "powertrainguy.png",
  "Kanikafinal.png",
  "mmafinal_pexedv.png",
  "Roy.png",
  "sbfinal_jkexcu.png",
  "mmafinal_pexedv.png",
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
  switch (index) {
    case 0:
      return "inset-0 object-cover w-[23vw] z-10 left-[13vw] -top-[3vh]";
    case 1:
      return "-top-[4vh] left-[60vw] z-20 object-cover w-[25vw]";
    case 2:
      return "bottom-[8vh] left-[5.5vw] object-cover  w-[25vw]";
    case 3:
      return "top-[40vh] right-[3vw] z-30 object-cover w-[17vw]";
    case 4:
      return "top-[35vh] left-[3vw] object-cover w-[25vw]";
    case 5:
      return " object-cover w-[23vw] right-[6vw] -top-[42vh]";
    default:
      return "";
  }
};
