import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

function Heading({ children }: Props) {
  return <div className={styles.heading}>{children}</div>;
}

export default Heading;
