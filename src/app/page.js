"use client";

import Menu from "@/ui/Menu";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const Home = () => {
  const router = useRouter();

  const handleMenuClick = (page) => {
    router.push(`${page}`);
  };

  return (
    <div className={styles.container}>
      <Menu onMenuClick={handleMenuClick} />
      <div className={styles.content}>
        <h1>Bem-vindo à Página Inicial</h1>
        <p>Conteúdo dinâmico baseado no menu clicado</p>
      </div>
    </div>
  );
};

export default Home;
