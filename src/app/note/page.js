"use client";

import Menu from "@/ui/Menu";
import Header from "@/ui/Header";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Note() {
  const router = useRouter();

  const handleMenuClick = (page) => {
    router.push(`/${page}`);
  };

  return (
    <div className={styles.container}>
      <Menu onMenuClick={handleMenuClick} />
      <Header />
      
      <div className={styles.content}>
        <h1>Notas</h1>
        <p>Aqui será a página de notas</p>
      </div>
    </div>
  );
}
