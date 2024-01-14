import "./services.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import photo from '/public/cv.png';
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const handleLinkClick = () => {
  window.location.href =
    "https://cv.djinni.co/7e/64780bfe27a4c4f15c03f9df53d11c/CV_Vitalii_Maistrenko__2_.pdf";
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
          <hr />
        </p>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </motion.div>
        <motion.div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Dev.
          </h1>
          <button onClick={handleLinkClick}>Way Me?</button>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
        >
          <img src={photo} alt="" onClick={handleLinkClick} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
