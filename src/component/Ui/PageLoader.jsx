import styles from "./PageLoader.module.css";

const PageLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default PageLoader;
