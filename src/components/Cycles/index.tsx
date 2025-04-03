import styles from "./style.module.css";

function Cycles() {
  return (
    <div>
      <h4 className={styles.title}>ciclos</h4>

      <div className={styles.cycles}>
        <span className={`${styles.dot} ${styles.workTime}`}></span>
        <span className={`${styles.dot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.dot} ${styles.workTime}`}></span>
        <span className={`${styles.dot} ${styles.workTime}`}></span>
        <span className={`${styles.dot} ${styles.workTime}`}></span>
        <span className={`${styles.dot} ${styles.workTime}`}></span>
        <span className={`${styles.dot} ${styles.workTime}`}></span>
        <span className={`${styles.dot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}

export default Cycles;
