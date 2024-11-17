import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`}>
      <div className="row"></div>

      <div className={`${styles.footerBottom}`}>
        <p style={{ textAlign: "center" }}>
          <a href="https://github.com/Sagar-Mondal" target="_blank" rel="noopener noreferrer">
            Sagar Mondal (21BCE1913)
          </a>{" "}
          |{" "}
          <a href="https://github.com/ishitaagl20" target="_blank" rel="noopener noreferrer">
            Ishita Agarwal(21BCE5317)
          </a>{" "}
          |{" "}
          <a href="https://github.com/aanchxl" target="_blank" rel="noopener noreferrer">
            Aanchal Singh(21BCE5447)
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
