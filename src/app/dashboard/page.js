"use client";

import { useRouter } from "next/navigation";
import { CloudRain, Sun, Wind } from "@phosphor-icons/react";
import Menu from "@/ui/Menu";
import Header from "@/ui/Header";
import Card from "@/ui/Card";
import Graphic from "@/ui/Graphic";
import styles from "./style.module.css";

const Dashboard = () => {
  const router = useRouter();

  const handleMenuClick = (page) => {
    router.push(`${page}`);
  };

  return (
    <div className={styles.container}>
      <Menu onMenuClick={handleMenuClick} />
      <Header />

      <div className={styles.content}>
        <h2 className={styles.title}>Dados do Biodigestor</h2>

        <div className={styles.sectionCards}>
          <Card title="Umidade" icon={<CloudRain size={42} />} value="70,00%" />
          <Card title="Temperatura" icon={<Sun size={42} />} value="19.0ºC" />
          <Card title="Gás Metano" icon={<Wind size={42} />} value="115 ppm" />
        </div>

        <div className={styles.sectionGraphic}>
          <h2>Sales Details</h2>
          <Graphic />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
