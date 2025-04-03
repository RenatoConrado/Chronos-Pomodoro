import styles from "./style.module.css";

type Props = React.ComponentProps<"footer">;

function Footer({ children }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <a href="">{children}</a>
      <a href="">Chronos Pomodoro©; {year} - Feito com ❤️</a>
    </footer>
  );
}

export default Footer;
