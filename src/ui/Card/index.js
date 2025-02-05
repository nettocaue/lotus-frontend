import styles from "./card.module.css";

const Card = ({ title, icon, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h2>{title}</h2>
        <p>{value}</p>
      </div>

      <div className={styles.blockIcon}>
      {icon}
      </div>
    </div>
  );
};

export default Card;
