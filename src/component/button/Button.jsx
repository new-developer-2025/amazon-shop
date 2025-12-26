import styles from "../button/Button.module.css";

const Button = () => {
  // handleToTopMenu
  const handleToTopMenu = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button className={styles.to_top_site} onClick={() => handleToTopMenu()}>
        Back to top
      </button>
    </div>
  );
};

export default Button;
