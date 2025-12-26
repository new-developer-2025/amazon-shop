import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart.jsx";
// component
import products from "../data/products.js";
import Header from "../Ui/Header.jsx";
import Footer from "../Ui/Footer.jsx";
// Add images
import International from "../../assets/images/International.jpg";
import star from "../../assets/images/star.svg";
import close from "../../assets/images/close.webp";
import message from "../../assets/images/message.webp";
import tooltip from "../../assets/images/tooltip.webp";
import location from "../../assets/images/location.svg";
// Add module css
import styles from "../pages/ProductDetails.module.css";
import down from "../../assets/images/down.webp";
import Button from "../button/Button.jsx";

const ProductDetails = () => {
  const [isactive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [activeRam, setActiveRam] = useState(null);
  // ---------- Static Data ----------
  const Cards = [
    { id: "R3", title: "R3 7320U", price: "$299.99" },
    { id: "R7", title: "R7 5700U", price: "$499.99" },
  ];
  // ---------- Toggle Sections ----------
  const [showMore, setShowMore] = useState(false);
  const [aboutMore, setAboutMore] = useState(false);
  // ---------- Product & Cart ----------
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const { updateCart, getItemInCart } = useCart();
  const currentCartItem = getItemInCart(product.id);
  // const inCart = !!currentCartItem;
  const inCart = Boolean(currentCartItem);

  // ---------- Pricing Constants ----------
  const PRICE_STEP = 10000; // price increase per extra quantity
  const DEFAULT_QUANTITY = 1;

  // ---------- Quantity & Price States ----------
  const [selectedQuantity, setSelectedQuantity] = useState(
    currentCartItem?.quantity ?? DEFAULT_QUANTITY
  );

  const [price, setPrice] = useState(
    currentCartItem?.price ?? product.oldPrice
  );

  const [_addedPrice, setAddedPrice] = useState(0); // extra price based on quantity
  // ---------- Cart Update Detection ----------
  const isUpdate = inCart && currentCartItem?.quantity !== selectedQuantity;

  // ---------- Quantity Select Options ----------
  const options = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `Quantity: ${i + 1}`,
  }));

  // ---------- Handlers ----------
  const handleSelectChange = (e) => {
    setSelectedQuantity(Number(e.target.value));
  };

  // handleAddToCart  Add / Update / Remove
  const handleAddToCart = () => {
    const quantity = selectedQuantity;
    const basePrice = Number(product.oldPrice);

    // Calculate additional price based on quantity
    const increment = quantity > 1 ? PRICE_STEP * (quantity - 1) : 0;
    const finalPrice = basePrice + increment;

    // Add new item to cart
    if (!inCart) {
      updateCart({
        id: product.id,
        title: product.title + (increment ? ` (+${increment})` : ""),
        price: finalPrice,
        quantity,
      });
      setPrice(finalPrice);
      setAddedPrice(increment);
      return;
    }

    // Update existing cart item
    if (isUpdate) {
      updateCart({
        id: product.id,
        title: product.title + (increment ? ` (+${increment})` : ""),
        price: finalPrice,
        quantity,
      });
      setPrice(finalPrice);
      setAddedPrice(increment);
      return;
    }
    // Remove item from cart
    updateCart({
      id: product.id,
      quantity: 0,
    });

    setSelectedQuantity(DEFAULT_QUANTITY);
    setPrice(basePrice);
  };

  return (
    <>
      <Header />
      <div className={styles.International}>
        <img src={International} alt="" />
      </div>
      <main className={styles.all_details}>
        {/* item */}
        <div className={styles.item}>
          <img src={product.img} alt={product.title} />
        </div>
        {/* control */}
        <div className={styles.control}>
          <section className={styles.overview}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <a href="#" className={styles.color}>
              Visit the Amazon Renewed Store
            </a>
            <div className={`${styles.space} ${styles.review}`}>
              <span className={`${styles.rating} ${styles.space}`}>
                <p>4.3</p>
                {/* Stars images */}
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                {/* under box for show info rating */}
                <div className={styles.under_box}>
                  <div className={styles.all_veiw}>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p>4.3 out of 5</p>
                  </div>
                  <p className={styles.number_of_rating}>1,752 ratings</p>
                  <div className={styles.counter}>
                    <a href="#">
                      <p className={styles.color}>4star</p>
                      <div className={styles.fill}>
                        <div
                          className={`${styles.precent} ${styles.wide_one}`}
                        ></div>
                      </div>
                      <p className={styles.color}>65%</p>
                    </a>
                    <a href="#">
                      <p className={styles.color}>4star</p>
                      <div className={styles.fill}>
                        <div
                          className={`${styles.precent} ${styles.wide_two}`}
                        ></div>
                      </div>
                      <p className={styles.color}>17%</p>
                    </a>
                    <a href="#">
                      <p className={styles.color}>3star</p>
                      <div className={styles.fill}>
                        <div
                          className={`${styles.precent} ${styles.wide_three}`}
                        ></div>
                      </div>
                      <p className={styles.color}>7%</p>
                    </a>
                    <a href="#">
                      <p className={styles.color}>2star</p>
                      <div className={styles.fill}>
                        <div
                          className={`${styles.precent} ${styles.wide_four}`}
                        ></div>
                      </div>
                      <p className={styles.color}>3%</p>
                    </a>
                    <a href="#">
                      <p className={styles.color}>2star</p>
                      <div className={styles.fill}>
                        <div
                          className={`${styles.precent} ${styles.wide_five}`}
                        ></div>
                      </div>
                      <p className={styles.color}>8%</p>
                    </a>
                    <a href="#">
                      <p className={styles.color}>2star</p>
                      <div className={styles.fill}>
                        <div
                          className={`${styles.precent} ${styles.wide_six}`}
                        ></div>
                      </div>
                      <p className={styles.color}>2%</p>
                    </a>
                  </div>
                </div>
              </span>
              <a href="#" className={styles.color}>
                1,752 ratings
              </a>
              <span className={styles.space}>|</span>
              <a href="#" className={styles.color}>
                Search this page
              </a>
            </div>
            <p className={styles.members}>6K+ bought in past month</p>
          </section>
          <div className={styles.old}>
            <span>-7%</span>
            <div className={styles.old_price}>
              <span>$</span>
              <p>{product.oldPrice}</p>
              <span>99</span>
            </div>
          </div>
          <p className={styles.List_price}>
            List Price:
            <span>$321.99</span>
          </p>
          {/* shipping */}
          <div className={styles.shipping}>
            <p>$91.31 Shipping & Import Fees Deposit to Iran</p>
            {/* more_details */}
            <div
              className={styles.more_details}
              onClick={() => setIsActive((prev) => !prev)}
            >
              <p className={styles.color}>Details</p>
              <img src={down} alt="" width="12" height="12" />
              {/* message_box */}
              {isactive && (
                <div className={styles.message_box}>
                  <div className={styles.history_price}>
                    <p>Shipping & Fee Details</p>
                    <img src={close} alt="close box" width="15" height="15" />
                  </div>
                  <div className={styles.cost}>
                    <p>Price</p>
                    <span>$299.99</span>
                  </div>
                  <div className={styles.cost}>
                    <p>$64.32</p>
                    <span>$26.99</span>
                  </div>
                  <div className={styles.cost}>
                    <a href="#" className={styles.color}>
                      Estimated Import Fees Deposit
                    </a>
                    <span>$64.32</span>
                  </div>
                  <div className={styles.cost}>
                    <p>Total</p>
                    <span>$391.30</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* text */}
          <p className={styles.text}>
            Available at a lower price from
            <a href="#">other sellers</a>
            that may not offer free Prime shipping.
          </p>
          {/* offer */}
          <div className={styles.offer}>
            <a href="#">
              <span>Extra Savings</span>
              <p className={styles.color}>
                Amazon Music offer with this purchase 1 Applicable Promotion
              </p>
              <img src={down} alt="down" width="12" height="12" />
            </a>
            {/* offer_box */}
            <div className={styles.offer_box}>
              <div className={styles.inner_items}>
                <p>Amazon Music offer with this purchase</p>
                <a href="#" className={styles.color}>
                  Shop items
                </a>
              </div>
            </div>
          </div>
          {/* See_more */}
          <div className={styles.See_more}>
            <p>
              Style:
              <span>{title}</span>
            </p>
            {/* demo */}
            <div className={styles.demo}>
              {Cards.map((ram) => (
                <button
                  key={ram.id}
                  onClick={() => {
                    setTitle(ram.title);
                    setActiveRam(ram.id);
                  }}
                  className={activeRam === ram.id ? styles.active : ""}
                >
                  <p>{ram.title}</p>
                  <p className={styles.demo_title}>{ram.price}</p>
                </button>
              ))}
            </div>
            <div className={styles.content}>
              {/* left */}
              <div className={styles.content_left}>
                <p>Brand</p>
                <p>Model Name</p>
                <p>Screen Size</p>
                <p>Color</p>
                <p>Hard Disk Size</p>
                <p>CPU Model</p>
                {showMore && (
                  <>
                    <p>Ram Memory Installed Size</p>
                    <p>Operating System</p>
                    <p>Special Feature</p>
                    <p>Graphics Card Description</p>
                  </>
                )}
                {/* more-less */}
                <button
                  className={`${styles.color} ${styles.SeeInfo}`}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "See less" : "See more"}
                </button>
              </div>
              {/* right */}
              <div className={styles.content_irght}>
                <p>acer</p>
                <p>Laptop</p>
                <p>15.6 Inches</p>
                <p>Silver</p>
                <p>128 GB</p>
                <p>Ryzen 3</p>
                {showMore && (
                  <>
                    <p>8 GB</p>
                    <p>Windows 11 S</p>
                    <p>Backlit Keyboard</p>
                    <p>Integrated</p>
                  </>
                )}
              </div>
            </div>
            {/* about */}
            <div className={styles.about}>
              <ol
                className={aboutMore ? styles.about_full : styles.about_short}
              >
                <li>
                  <p>
                    Purposeful Design: Travel with ease and look great doing it
                    with the Aspire's 3 thin, light design.
                  </p>
                </li>
                <li>
                  <p>
                    Ready-to-Go Performance: The Aspire 3 is ready-to-go with
                    the latest AMD Ryzen 3 7320U Processor with Radeon
                    Graphics—ideal for the entire family, with performance and
                    productivity at the core.
                  </p>
                </li>
                <li>
                  <p>
                    Visibly Stunning: Experience sharp details and crisp colors
                    on the 15.6" Full HD IPS display with 16:9 aspect ratio and
                    narrow bezels.
                  </p>
                </li>
                <li>
                  <p>
                    Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB
                    NVMe solid-state drive storage to store your files and media
                  </p>
                </li>
                <li>
                  <p>
                    The HD front-facing camera uses Acer’s TNR (Temporal Noise
                    Reduction) technology for high-quality imagery in low-light
                    conditions. Acer PurifiedVoice technology with AI Noise
                    Reduction filters out any extra sound for clear
                    communication over online meetings.
                  </p>
                </li>
                <li>
                  <p>
                    Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent
                    wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO
                    technology.
                  </p>
                </li>
                <li>
                  <p>
                    Improved Thermals: With a 78% increase in fan surface area,
                    enjoy an improved thermal system and an additional 17%
                    thermal capacity. Allowing for longer, more efficient work
                    sessions while not plugged in.
                  </p>
                </li>
                <li>
                  <p>
                    Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2
                    Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C &amp; USB
                    Charging, 2 - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with
                    HDCP support, 1 - Headphone/Speaker/Line-Out Jack, DC-in for
                    AC adapter
                  </p>
                </li>
                <li>
                  <p>
                    What's In the Box: Acer Aspire Laptop, AC Adapter, Power
                    Cord
                  </p>
                </li>
                <li>
                  <p>Keyboard backlight not present on this model</p>
                </li>
              </ol>
              {/* more-less */}
              <button
                className={`${styles.color} ${styles.SeeInfo}`}
                onClick={() => setAboutMore(!aboutMore)}
              >
                {aboutMore ? "See less" : "See more"}
              </button>
            </div>
            {/* report */}
            <div className={styles.report}>
              <a href="#">
                <img src={message} alt="message" width="26" height="25" />
                <p className={styles.color}>
                  Report an issue with this product or seller
                </p>
              </a>
              <p>
                <span>Note: </span>
                Products with electrical plugs are designed for use in the US.
                Outlets and voltage differ internationally and this product may
                require an adapter or converter for use in your destination.
                Please check compatibility before purchasing.
              </p>
            </div>
          </div>
        </div>
        {/* sales_invoice */}
        <div className={styles.sales_invoice}>
          <div className={styles.buy_new}>
            <p>Buy new:</p>
            <img src={tooltip} alt="tooltip" width="20" height="21" />
          </div>
          <div className={styles.old_price}>
            <span>$</span>
            {/* <p>{product.oldPrice}</p> */}
            <p>Price: {price.toLocaleString()} </p>
            <span>99</span>
          </div>
          <p className={styles.time}>
            $91.31 Shipping & Import Fees Deposit to Iran Details Delivery
            Details Delivery
            <span> Wednesday, May 15</span>
          </p>
          <a href="#" className={`${styles.color} ${styles.deliver}`}>
            <img src={location} alt="location" width="15" height="15" />
            Deliver toIran
          </a>
          <p className={styles.stock}>In Stock</p>
          {/* select box */}
          <select
            value={selectedQuantity}
            onChange={handleSelectChange}
            className={styles.options}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <button className={styles.add_cart} onClick={handleAddToCart}>
            {!inCart && "Add to Cart"}
            {inCart && isUpdate && "Update"}
            {inCart && !isUpdate && "Remove from cart"}
          </button>

          <div className={styles.story}>
            <div>
              <p>Ships from</p>
              <p>Amazon.com</p>
            </div>
            <div>
              <p>Sold by</p>
              <p>Amazon.com</p>
            </div>
            <div class={styles.return}>
              <p>Returns</p>
              <p className={styles.color}>
                Eligible for Return, Refund or Replacement within 30 days of
                receipt
              </p>
            </div>
            <div>
              <p>Payments</p>
              <p className={styles.color}>Secure transaction</p>
            </div>
            <div>
              <p>Support</p>
              <p className={styles.color}>Product support included</p>
            </div>
          </div>
        </div>
      </main>
      {/* Back to top */}
      <Button />
      <Footer />
    </>
  );
};

export default ProductDetails;
