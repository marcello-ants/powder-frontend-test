import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/powder.png" width={20} height={20} />
      </div>
      <div className={styles.frame}>
        <img src="/frame.png" width={60} height={60} />
        <div className={styles.heading}>
          <h2>Screen Recording</h2>
          <div className={styles.tagWrapper}>
            <span className={styles.tag}>1080p</span>
            <span className={styles.tag}>60 FPS</span>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.roundButton} />
        <div className={styles.actionButton}>
          <span>Start Session</span>
        </div>
        <div className={styles.roundButton} />
        <div className={styles.roundButton} />
      </div>
    </header>
  );
};

export default Header;
