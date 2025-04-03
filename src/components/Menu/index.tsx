import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { aria } from "../../functions";
import { useState, useEffect } from "react";

type Theme = "dark" | "light";

function getTheme() {
  return localStorage.getItem("theme") as Theme || "dark";
}

function Menu() {
  const [theme, setTheme] = useState<Theme>(getTheme);
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme]);

  function handleTheme(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    setTheme(nextTheme);
  }
  return (
    <nav className={styles.menu}>
      <button className={styles.menuLink} {...aria("Ir à Pagina Principal")}>
        <a href="#">
          <HouseIcon />
        </a>
      </button>

      <button className={styles.menuLink} {...aria("Ir ao Historico")}>
        <a href="#">
          <HistoryIcon />
        </a>
      </button>
      <button className={styles.menuLink} {...aria("Ir as Configurações")}>
        <a href="#">
          <SettingsIcon />
        </a>
      </button>
      <button className={styles.menuLink} onClick={handleTheme} {...aria(`Alternar tema para ${nextTheme}`)}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav >
  );
}

export default Menu;
