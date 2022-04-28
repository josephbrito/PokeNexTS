import React from "react";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <p>Esse é o footer</p>
      </div>
    </footer>
  );
};

export default Footer;
