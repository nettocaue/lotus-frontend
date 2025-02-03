import styles from './input.module.css';

const Input = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        type={type}
        className={styles.inputField}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
