import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";

const images = [
  "bg.jpeg",
  "hehe.jpg",
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
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * -1.3]);

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
        className="h-full w-full relative overflow-hidden bg-cover bg-fixed bg-gradient-to-t from-tedx-bg/100 to-transparent"
        style={{
          backgroundImage: `url(${require(`../../assets/Parallax-bg.png`)})`,
        }}
        ref={ref}
      >
        <div className="absolute w-full h-[200vh] top-0 flex justify-center items-center gap-[4vw] p-[2vw]">
          <Column images={images} y={y} className={"p-10 space-x-6"} />
        </div>
        <Overlay />
      </div>
    </main>
  );
}

const Column = ({ images, y, className }) => {
  return (
    <motion.div
      className=" relative w-full md:w-full min-w-450px   flex-col gap-[2vw] whitespace-nowrap"
      style={{ y }}
    >
      <div className=" top-10 w-full h-full">
        <img
          src={require(`../../assets/${images[0]}`)}
          className="absolute inset-0 object-cover h-[50vh] w-[40vw] z-10 -top-[30vh]"
          alt="parallax"
        />
        <img
          src={require(`../../assets/${images[1]}`)}
          className="absolute -top-[5vh] left-[55vw] scale-95 object-cover h-[40vh] w-[60vh] z-20"
          style={{ y }}
          alt="parallax"
        />
        <img
          src={require(`../../assets/${images[2]}`)}
          className="absolute bottom-[40vh] left-[27.5vw] object-cover h-[25vh] w-[25vh] z-30"
          alt="parallax"
        />
        <img
          src={require(`../../assets/${images[3]}`)}
          className="absolute bottom-[13vh] right-[.5vw] object-cover h-[25vh] w-[50vh] z-30"
          alt="parallax"
        />
        <img
          src={require(`../../assets/${images[4]}`)}
          class="absolute -bottom-[90vh] right-[17.5vw] object-cover h-[25vh] w-[25vh] z-30"
          alt="parallax"
        />
        <img
          src={require(`../../assets/${images[5]}`)}
          class="absolute top-[35vh] right-[45vw] scale-95 object-cover h-[40vh] w-[60vh] z-20"
          alt="parallax"
        />
      </div>
    </motion.div>
  );
};
