import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Speedometer, Note, CalendarDots, User } from "@phosphor-icons/react";
import styles from "./menu.module.css";

const Menu = ({ onMenuClick }) => {
  const pathname = usePathname();

  const handleMenuClick = (path) => {
    onMenuClick(path);
  };

  return (
    <div className={styles.menu}>
      <Image
        src="/images/lotus.jpeg"
        width={150}
        height={150}
        alt="Logo da Lotus"
        className={styles.imageMenuLogo}
      />

      <div
        className={`${styles.menuItem} ${
          pathname === "/dashboard" ? styles.active : ""
        }`}
        onClick={() => handleMenuClick("dashboard")}
      >
        <Speedometer size={24} color="#202224" weight="bold" />
        Dashboard
      </div>
      <div
        className={`${styles.menuItem} ${
          pathname === "/note" ? styles.active : ""
        }`}
        onClick={() => handleMenuClick("note")}
      >
        <Note size={24} color="#202224" weight="bold" />
        Notas
      </div>
      <div
        className={`${styles.menuItem} ${
          pathname === "/calendar" ? styles.active : ""
        }`}
        onClick={() => handleMenuClick("calendar")}
      >
        <CalendarDots size={24} color="#202224" weight="bold" />
        Calendário
      </div>
      <div
        className={`${styles.menuItem} ${
          pathname === "/perfil" ? styles.active : ""
        }`}
        onClick={() => handleMenuClick("perfil")}
      >
        <User size={24} color="#202224" weight="bold" />
        Perfil
      </div>
    </div>
  );
};

export default Menu;
