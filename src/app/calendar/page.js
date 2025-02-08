"use client";

import Menu from "@/ui/Menu";
import Header from "@/ui/Header";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Calendar() {
  const router = useRouter();

  const handleMenuClick = (page) => {
    router.push(`/${page}`);
  };

  return (
    <div className={styles.container}>
      <Menu onMenuClick={handleMenuClick} />
      <Header />
      
      <div className={styles.content}>
        <h1>Calendário</h1>
        <p>Aqui será a página de calendário</p>
      </div>
    </div>
  );
}
