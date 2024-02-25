import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["center center", "center end"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["100%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);
  return (
    <div
      ref={ref}
      className="h-[90vh] relative place-items-center bg-contain flex items-center justify-center text-white text-6xl font-bold  bg-tedx-bg"
      style={{
        backgroundImage: `url('${require("../../assets/Parallax.png")}')`,
      }}
    >
      <motion.div className="h-[300vh] flex justify-center items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ y: textY }}
          className="relative z-10"
        >
          Parallax Section
        </motion.h1>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          src={`${require("../../assets/bg.jpeg")}`}
          className=" w-[300px] rounded-lg md:w-[500px] absolute top-[0%] left-10"
          style={{ y: backgroundY }}
          alt="Image"
        />

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          src={`${require("../../assets/footer.png")}`}
          className="w-[500px] absolute bottom-[50%] rounded-lg right-10"
          style={{ y: backgroundY }}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
