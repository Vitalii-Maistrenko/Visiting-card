import "./navbar.scss";
import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/vetal.stor?igsh=b3lnZmJ6YnB0aWEx">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/vitalii-maistrenko-066023283/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Vitalii-Maistrenko">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://t.me/MaystrenkoVO">
            <img src="/telegram.png" alt="Telegram" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
