import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import NavClient from "./NavClient";

const Header = () => {
  return (
    <div className={styles.header_container} id="home">
      <h1 className="text-6xl text-white ">Pizzas.Hub</h1>
    </div>
  );
};

export default Header;
