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
  "footer.png",
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

  const y = useTransform(scrollYProgress, [0, 1], [height, height * -0.6]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height]);
  const y3 = useTransform(scrollYProgress, [0, 1], [height, height * -0.6]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);

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
        className="h-105vh relative overflow-hidden bg-cover bg-fixed bg-gradient-to-t from-tedx-bg/30 to-transparent"
        ref={ref}
      >
        <div className="absolute -top-[12.5vh] w-full px-20 h-200vh flex justify-center items-center gap-4vw p-2vw">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          {window.innerWidth > 450 && (
            <Column images={[images[3], images[4], images[5]]} y={y2} />
          )}
          {/* 
          {window.innerWidth > 768 && (
            <Column images={[images[6], images[7], images[8]]} y={y3} />
          )}
          <Column images={[images[9], images[10], images[11]]} y={y4} /> */}
        </div>
        <div className=" h-screen sm:h-[120vh] bg-gradient-to-t from-black/40 to-black/70 flex  justify-center items-center  ">
          <div className="p-4 sticky text-5xl bg-gradient-to-tr w-full h-full from-black/40 to-black/70   flex items-center justify-center text-center font-bold ">
            Hello
          </div>
          {/* <div className="absolute h-full w-full bg-gradient-to-t from-black/30 via-transparent to-black/60"></div> */}
        </div>
      </div>
    </main>
  );
}

const Column = ({ images, y, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["start end", "end start"],
  });
  return (
    <motion.div
      ref={ref}
      className="sm:w-1/2 duration-300 w-full ease-linear min-w-450px   flex-col gap-2vw whitespace-nowrap"
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
    >
      {images.map((src, i) => (
        <div key={i} className={cn("relative h-full last:top-0", className)}>
          <img
            src={require(`../../assets/${src}`)}
            alt="parallax"
            className={cn(
              "object-cover  w-full h-[450px] relative left-30 ",
              i % 2 === 0 ? " p-10 " : "p-20"
            )}
          />
        </div>
      ))}
    </motion.div>
  );
};
