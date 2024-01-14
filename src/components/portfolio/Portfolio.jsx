import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "Phone store",
    img: "/public/banner-phones.png",
    desc: "The project is a web application that allows users to browse and interact with a catalog of mobile phones, tablets, and accessories. Technologies used:",
    des: `
    ReactTS,
    SCSS,
    React Route,
    LocalStorage,
    Figma,
    API,
    Debounce.
  `,
    url: "https://vitalii-maistrenko.github.io/react_phone-catalog/",
  },
  {
    id: 2,
    title: "Cryptocurrency Website Starter",
    img: "/public/cripto.jpg",
    desc: "Cryptocurrency Website Starter is a web application developed using React and Tailwind CSS technologies, designed to track and analyze information about cryptocurrency markets. This starter project provides the basic functionality to create your own website.",
    des: `
    React,
    SCSS,
    Tailwind,
    Figma,
    API.
  `,
    url: "https://cripto-eta.vercel.app/",
  },
  {
    id: 3,
    title: "My Bike.",
    img: "/public/bike.jpg",
    desc: "Created using only HTML, JavaScript, and SCSS. I decided to express my passion for bicycles and showcase it in this project.",
    url: "https://vitalii-maistrenko.github.io/layout_miami/",
    des: `
    Js,
    Html,
    Scss,
    Figma.
    `,
  },
  {
    id: 4,
    title: "Vanilla JS",
    img: "/public/2048.png",
    desc: "The 2048 game in JavaScript, using HTML and CSS. Players can interact with a 4x4 grid using arrow keys. The goal is to merge identical numbers, aiming to achieve the number 2048. The game automatically adds new numbers (2 or 4) after each move. Players earn points for merging numbers. The game concludes when the player reaches 2048 or when no more moves are possible. The Start button initiates the game or restarts it, changing to Restart after the first move.",
    des: `
    Js,
    Html,
    Scss.
    `,
    url: "https://vitalii-maistrenko.github.io/js_2048_game/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "25%"]);

  const handleDemoClick = () => {
    window.location.href = item.url;
  };

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" onClick={handleDemoClick} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.des}</p>
            <button href="#" onClick={handleDemoClick}>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const scaleX = useSpring(
    useScroll({ target: ref, offset: ["end end", "start start"] })
      .scrollYProgress,
    {
      stiffness: 100,
      damping: 30,
    }
  );

  return (
    <motion.div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="single"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Single item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Portfolio;
