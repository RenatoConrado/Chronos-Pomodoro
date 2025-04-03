import styles from "./style.module.css";

interface Props extends React.ComponentProps<"button">{
  color?: "green" | "red"
};

function Button({ color = "green" , children, ...props }: Props) {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {children}
    </button>
  );
}
export default Button;
