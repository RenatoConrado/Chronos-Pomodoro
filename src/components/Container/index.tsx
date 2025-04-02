import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
export default Container;
