import React from "react";
import { User } from "@phosphor-icons/react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.iconUser}>
        <User size={24} color="#202224" weight="bold" />
      </div>

      <div className={styles.content}>
        <span>User</span>
        <p>Admin</p>
      </div>
    </div>
  );
};

export default Header;
