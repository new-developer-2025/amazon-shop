// images
import amazon from "../../assets/images/amazone.png";
import language from "../../assets/images/language.webp";
import Amreica from "../../assets/images/Amreica.png";
// Add module css
import styles from "../Ui/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* left */}
      <div>
        <p className={styles.footer_title}>Get to Know Us</p>
        <ul className={styles.context}>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About Amazon</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Amazon Devices</a>
          </li>
          <li>
            <a href="#">Amazon Science</a>
          </li>
        </ul>
      </div>
      <div>
        <p className={styles.footer_title}>Make Money with Us</p>
        <ul className={styles.context}>
          <li>
            <a href="#">Sell products on Amazon</a>
          </li>
          <li>
            <a href="#">Sell on Amazon Business</a>
          </li>
          <li>
            <a href="#">Sell apps on Amazon</a>
          </li>
          <li>
            <a href="#">Become an Affiliate</a>
          </li>
          <li>
            <a href="#">Advertise Your Products</a>
          </li>
          <li>
            <a href="#">Self-Publish with Us</a>
          </li>
          <li>
            <a href="#">Host an Amazon Hubs</a>
          </li>
          <li>
            <a href="#">See More Make Money with Us</a>
          </li>
        </ul>
      </div>
      <div>
        <p className={styles.footer_title}>Amazon Payment Products</p>
        <ul className={styles.context}>
          <li>
            <a href="#">Amazon Business Card</a>
          </li>
          <li>
            <a href="#">Shop with Points</a>
          </li>
          <li>
            <a href="#">Reload Your Balance</a>
          </li>
          <li>
            <a href="#">Amazon Currency Converter</a>
          </li>
        </ul>
      </div>
      {/* right */}
      <div>
        <p className={styles.footer_title}>Let Us Help You</p>
        <ul className={styles.context}>
          <li>
            <a href="#">Amazon and COVID-19</a>
          </li>
          <li>
            <a href="#">Your Account</a>
          </li>
          <li>
            <a href="#">Your Orders</a>
          </li>
          <li>
            <a href="#">
              <p>Shipping Rates &</p>
              Policies
            </a>
          </li>
          <li>
            <a href="#">
              <p>Returns &</p>
              Replacements
            </a>
          </li>
          <li>
            <a href="#">Manage Your Content and Devices</a>
          </li>
          <li>
            <a href="#">Amazon Assistant</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      {/* footer_settings */}
      <div className={styles.footer_settings}>
        <div className={styles.box}>
          <img src={amazon} alt="amazon logo" className={styles.logo} />
        </div>
        <div className={`${styles.box} ${styles.border}`}>
          <img src={language} alt="language" width="17" height="17" />
          <p>English</p>
        </div>
        <div className={`${styles.box} ${styles.border}`}>
          <p>
            <span>$</span>
            USD - U.s Dollor
          </p>
        </div>
        <div className={`${styles.box} ${styles.border}`}>
          <img src={Amreica} alt="United States" width="17" height="17" />
          <p>United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
