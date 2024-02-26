import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "../../lib/utils";
// import Image from "next/image";

//unsplash random images
//https://source.unsplash.com/random/800x600

const images = [
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
  "bg.jpeg",
];

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["start end", "end start"],
  });
  const [dimension, setDimension] = useState({ width: 0, height: -10 });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [height, height * -1.1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height]);
  const y3 = useTransform(scrollYProgress, [0, 1], [height, height * -1.1]);
  // const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="font-sans">
      <div
        className="h-105vh relative overflow-hidden bg-cover bg-fixed bg-gradient-to-t from-tedx-bg/100 to-transparent"
        ref={ref}
      >
        <div className="absolute -top-[12.5vh] h-200vh flex justify-center items-center gap-4vw p-2vw">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          {/* <Column images={[images[9], images[10], images[11]]} y={y4} /> */}
        </div>
        <div className=" h-[120vh] flex  justify-center items-center  ">
          <div className="p-4 sticky text-5xl bg-black w-1/2 h-1/4 flex items-center justify-center text-center font-bold ">
            Hello
          </div>
          <div className="absolute h-full w-full bg-gradient-to-t from-black/30 via-transparent to-black/60"></div>
        </div>
      </div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div
      className="w-1/2 min-w-450px flex  flex-col gap-2vw whitespace-nowrap"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full last:top-0">
          <img
            src={require(`../../assets/${src}`)}
            alt="parallax"
            className={cn(
              "object-cover w-full h-[450px] ",
              i % 2 === 0 ? "top-20 p-4" : "top-0"
            )}
          />
        </div>
      ))}
    </motion.div>
  );
};
