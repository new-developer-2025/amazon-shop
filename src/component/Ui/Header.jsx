import { useState, useRef, useEffect } from "react";
import { useCart } from "../../hooks/useCart";
// declare images
import amazon from "../../assets/images/amazone.png";
import location from "../../assets/images/location.svg";
import magnifying from "../../assets/images/magnifying.svg";
import Amreica from "../../assets/images/Amreica.png";
import arrowDown from "../../assets/images/arrow-down.png";
import arrowPrev from "../../assets/images/arrow-prev.webp";
import shopingCart from "../../assets/images/shoping-cart.png";
import customProfile from "../../assets/images/custom-profile.png";
import arrowRight from "../../assets/images/arrow-right.webp";
import language from "../../assets/images/language.webp";
// Add module css
import styles from "../Ui/Header.module.css";

const Header = () => {
  const [changeLocation, setChangeLocation] = useState(() => {
    const hasSeen = localStorage.getItem("hasSeenLocationMessage");
    return hasSeen !== "true";
  });
  const [selectedOption, setSelectedOption] = useState([]);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  // Side Menu
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  // Prime Video nested panel
  const [isPrimeOpen, setIsPrimeOpen] = useState(false);
  // cartItems
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const [showMore, setShowMore] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    if ((showMore || showItems) && menuRef.current) {
      menuRef.current.scrollTop = menuRef.current.scrollHeight;
    }
  }, [showMore, showItems]);
  // options
  const options = [
    "All Department",
    "Arts & Crafts",
    "Automotive",
    "Baby",
    "Books",
    "Electronics",
    "Fashion",
  ];
  // handleDismiss
  const handleDismiss = () => {
    localStorage.setItem("hasSeenLocationMessage", "true");
    setChangeLocation(false);
  };
  // for get value in array
  const handleChange = (e) => {
    const values = Array.from(
      e.target.selectedOption,
      (option) => option.value
    );
    setSelectedOption(values);
  };
  // toggleHamburgerMenu for open and close Hamburger menu
  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    // for close prime panel
    if (isHamburgerOpen) {
      setIsPrimeOpen(false);
    }
  };
  // openPrimePanel
  const openPrimePanel = (e) => {
    e.preventDefault();
    setIsPrimeOpen(true);
  };
  // closePrimePanel
  const closePrimePanel = () => {
    setIsPrimeOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.controlHeader}>
        <img src={amazon} alt="amazon logo" className={styles.logo} />
        {/* location */}
        <div className={styles.location}>
          <img
            src={location}
            alt="location image"
            className={styles.locationSvg}
          />
          <div className={styles.country}>
            <span>Deliver to</span>
            <span>Iran, Islamic Rep...</span>
          </div>
          {changeLocation && (
            <div className={styles.tooltip}>
              <p>
                We're showing you items that ship to Iran. To see items that
                ship to a different country, change your delivery address.
              </p>
              <div className={styles.controlBtn}>
                <button onClick={() => handleDismiss()}>Dismiss</button>
                <button className={styles.change}>
                  <a href="#">Change Address</a>
                  {/* open new box in page for Change location*/}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.selectItems}>
          <select
            value={selectedOption}
            onChange={handleChange}
            className={styles.options}
          >
            {options.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {selectedOption.map((item) => (
            <span key={item}>{item}, </span>
          ))}
          <input type="text" placeholder="Search Amazon" />
          <button className={styles.searchImage}>
            <img src={magnifying} alt="magnify" />
          </button>
        </div>
        {/* header-right */}
        <div className={styles.headerRight}>
          {/* language and sign-in sections */}
          <div
            className={styles.language}
            onMouseEnter={() => setIsLanguageOpen(true)}
            onMouseLeave={() => setIsLanguageOpen(false)}
          >
            <div className={styles.languageTrigger}>
              <img src={Amreica} width="21.6" height="20" alt="" />
              <span>EN</span>
              <img src={arrowDown} alt="" />
            </div>
            {isLanguageOpen && (
              <ul className={styles.languageBox}>
                <li className={styles.moreInfo}>
                  <p>Change language</p>
                  <a href="#" className={styles.details}>
                    Learn more
                  </a>
                </li>
                <li>
                  <input type="radio" name="lang" />
                  <p>English - EN</p>
                </li>
                <li>
                  <input type="radio" name="lang" />
                  <p>Español - ES</p>
                </li>
                <li>
                  <input type="radio" name="lang" />
                  <p>العربية - AR</p>
                </li>
                <li>
                  <input type="radio" name="lang" />
                  <p>Deutsch - DE</p>
                </li>
                <li>
                  <input type="radio" name="lang" />
                  <p>עברית - HE</p>
                </li>
                <li>
                  <input type="radio" name="lang" />
                  <p>한국어 - KO</p>
                </li>
                <li>
                  <input type="radio" name="lang" />
                  <p>português - PT</p>
                </li>
                <li className={styles.borderBottom}>
                  <input type="radio" name="lang" />
                  <p>中文 简体 - ZH</p>
                </li>
                <li className={styles.moreInfo}>
                  <p>Change language</p>
                  <a href="#" className={styles.details}>
                    Learn more
                  </a>
                </li>
                <li className={styles.moreInfo}>
                  <p>$ - USD - US Dollar</p>
                  <a href="#" className={styles.details}>
                    Change
                  </a>
                </li>
                <li>
                  <img src={Amreica} width="21.6" height="20" alt="" />
                  <p>you are shopping on Amazon.com</p>
                </li>
                <a href="#" className={styles.region}>
                  Change country/region.
                </a>
              </ul>
            )}
            {(isLanguageOpen || isSignInOpen) && (
              <div className={styles.overlay}></div>
            )}
          </div>
          {/* sign-in */}
          <div
            className={styles.signIn}
            onMouseEnter={() => setIsSignInOpen(true)}
            onMouseLeave={() => setIsSignInOpen(false)}
          >
            <div>
              <p className={styles.white && styles.fontSize12}>
                Hello, sign in
              </p>
            </div>
            <div className={styles.account}>
              <p className={styles.white}>Account & Lists</p>
              <img src={arrowDown} alt="down icon" />
            </div>

            {isSignInOpen && (
              <ul className={styles.signInBox}>
                <button>Sign in</button>
                <li className={styles.customer}>
                  <span className={styles.fontSize12}>New customer?</span>
                  <a className={styles.fontSize12} href="#">
                    Start here.
                  </a>
                </li>
                {/* list for context menu */}
                <li className={styles.list}>
                  <div className={styles.left}>
                    <p href="#">Your Lists</p>
                    <a href="#">Create a List</a>
                    <a href="#">Find a List or Registery</a>
                  </div>
                  <div className={styles.rigth}>
                    <p href="#">Your Account</p>
                    <a href="#">orders</a>
                    <a href="#">Recommendations</a>
                    <a href="#">Browsing</a>
                    <a href="#">History</a>
                    <a href="#">Watchlist</a>
                    <a href="#">Video</a>
                    <a href="#">Purchases & Rentals</a>
                    <a href="#">Kindle Unlimited</a>
                    <a href="#">Subscribe & Save Items</a>
                    <a href="#">Memberships & Subscriptions</a>
                    <a href="#">Music Library</a>
                  </div>
                </li>
              </ul>
            )}
          </div>
          {/* Returns & Orders */}
          <div className={styles.returnsOrders}>
            <p className={styles.white && styles.fontSize12}>Returns</p>
            <p className={styles.white}>& Orders</p>
          </div>
          {/* shoping-cart */}
          <a href="#" className={styles.shopingCart}>
            <div className={styles.counter}>
              <span>{totalQuantity}</span>
              <img src={shopingCart} alt="cart" />
            </div>
            <p className={styles.white}>Cart</p>
          </a>
        </div>
      </div>
      {/* sub-nav */}
      <div className="sub-nav">
        <nav>
          <ul>
            {/* hamburger-menu */}
            <li
              className="hamburger-menu"
              onClick={toggleHamburgerMenu}
              style={{ cursor: "pointer" }}
            >
              <button id="label-toggle">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </button>
              <button className="white">All</button>
            </li>
            <li>
              <p>Today's Deals</p>
            </li>
            <li>
              <p>Customer Service</p>
            </li>
            <li>
              <p>Registry</p>
            </li>
            <li>
              <p>Gift Cards</p>
            </li>
            <li>
              <p>Sell</p>
            </li>
          </ul>
        </nav>
      </div>
      {/* side-menu */}
      <div className={`side-menu ${isHamburgerOpen ? "open" : ""}`}>
        {/* menu-header */}
        <div className="menu-header">
          <img src={customProfile} alt="customProfile" />
          <section className="menu-login">
            <h2>Hello,</h2>
            <h2>sign in</h2>
          </section>
          {/* close-menu */}
          <button
            id="label-toggle"
            className={`close-button ${isHamburgerOpen ? "active" : ""}`}
            onClick={toggleHamburgerMenu}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </button>
        </div>
        <ul className="menu-items" ref={menuRef}>
          <h3>Digital Content & Devices</h3>
          <li onClick={openPrimePanel}>
            <a href="#">
              Prime Video
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">
              Amazon Music
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">
              Kindle E-readers & Books
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">
              Amazon Appstore
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          {/* <hr /> */}
          <h3>Shop by Department</h3>
          <li>
            <a href="#">
              Electronics
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">
              Computers
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">
              Smart Home
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">
              Arts & Crafts
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          {/* border-bottom */}
          {showMore && (
            <>
              <li>
                <a href="#">
                  Automotive
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  Baby
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  Beauty and Personal Care
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  Women's Fashion
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  Men's Fashion
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  Girls' Fashion
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  Boys' Fashion
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  Health and Household
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
            </>
          )}
          <li>
            <button
              className="show-hidden"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "See less" : "See all"}
              <span
                className={`direction-items ${showMore ? "open" : ""}`}
              ></span>
            </button>
          </li>
          {/* Programs & Features */}
          <h3>Programs & Features</h3>
          <li>
            <a href="#">
              Gift Cards
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">Shop By Interest</a>
          </li>
          <li>
            <a href="#">
              Amazon Live
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">
              International Shopping
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          {showItems && (
            <li>
              <a href="#">
                Amazon Second Chance
                <img
                  src={arrowRight}
                  alt="arrow right"
                  width="25"
                  height="25"
                />
              </a>
            </li>
          )}
          <li>
            <button
              className="show-hidden"
              onClick={() => setShowItems(!showItems)}
            >
              {showItems ? "See less" : "See all"}
              <span
                className={`direction-items ${showItems ? "open" : ""}`}
              ></span>
            </button>
          </li>
          {/*  */}
          <h3>Help & Settings</h3>
          <li>
            <a href="#">
              Your Account
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li className="short-style">
            <a href="#">
              <img src={language} alt="language" width="15" height="15" />
              English
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li className="short-style">
            <a href="#">
              <img src={Amreica} alt="United States" width="15" height="15" />
              United States
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">
              Customer Service
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
          <li>
            <a href="#">
              Sign in
              <img src={arrowRight} alt="arrow right" width="25" height="25" />
            </a>
          </li>
        </ul>
        {/* Prime Video nested panel */}
        <div className={`prime-panel ${isPrimeOpen ? "open" : ""}`}>
          <div className="menu-header">
            <img src={customProfile} alt="" />
            <section className="menu-login">
              <h2>Hello,</h2>
              <h2>sign in</h2>
            </section>
          </div>
          <div className="panel-header">
            <button className="close-panel" onClick={closePrimePanel}>
              <img src={arrowPrev} alt="arrow prev" />
              <p>Main Menu</p>
            </button>
          </div>
          <h3>Prime Video</h3>
          <ul className="panel-items">
            <li>All Videos</li>
            <li>Included with Prime </li>
            <li>Prime Video Channels</li>
            <li>Rent or Buy</li>
            <li>Your Watchlist</li>
            <li>Purchases & Rentals</li>
            <li>Watch Anywhere</li>
            <li>Getting Started</li>
          </ul>
        </div>
      </div>
      {/* close menu */}
      {isHamburgerOpen && (
        <div
          className={styles.hamburgerOverlay}
          onClick={toggleHamburgerMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;


