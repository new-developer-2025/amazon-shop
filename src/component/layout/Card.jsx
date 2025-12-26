import { Link } from "react-router-dom";
import styles from "../layout/Card.module.css";

const Card = ({
  id,
  title,
  img,
  price,
  oldPrice,
  description,
  star,
  reviews,
}) => {
  return (
    <Link to={`/products/${id}`} className={styles.linkWrapper}>
      <section className={styles.product}>
        <div className={styles.imagewrapper}>
          <img src={img} className={styles.picture} alt={title} />
        </div>

        <h2 className={styles.heading}>{title}</h2>

        <div className={styles.price}>
          <p>$</p>
          <p className={styles.mainprice}>{price}</p>
          <p className={styles.smallprice}>99</p>
        </div>

        <span className={styles.oldprice}>${oldPrice}</span>

        <p className={styles.description}>{description}</p>

        <div className={styles.rating}>
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <p className={styles.reviews}>{reviews}</p>
        </div>

        <a href="#" className={styles.moredetails}>
          <p>see more ...</p>
        </a>
      </section>
    </Link>
  );
};

export default Card;
