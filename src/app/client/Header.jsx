import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import NavClient from "./NavClient";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <NavClient />
    
    </div>
  );
};

export default Header;
