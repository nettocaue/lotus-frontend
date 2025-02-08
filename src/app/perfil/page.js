"use client";

import Menu from "@/ui/Menu";
import Header from "@/ui/Header";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Perfil() {
  const router = useRouter();

  const handleMenuClick = (page) => {
    router.push(`/${page}`);
  };

  return (
    <div className={styles.container}>
      <Menu onMenuClick={handleMenuClick} />
      <Header />
      
      <div className={styles.content}>
        <h1>Perfil</h1>
        <p>Aqui será a página de perfil do usuário</p>
      </div>
    </div>
  );
}
