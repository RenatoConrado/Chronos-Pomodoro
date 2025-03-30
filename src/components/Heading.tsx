import styles from "./Heading.module.css";

interface Props {
  children: React.ReactNode;
}

function Heading({ children }: Props) {
  return <div className={styles.heading}>{children}</div>;
}

export default Heading;
