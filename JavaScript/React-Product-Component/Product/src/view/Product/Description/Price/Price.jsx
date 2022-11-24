import styles from "./Price.module.css";

const Price = (props) => {
  return <ins className={styles.price}>{props.priceValue}</ins>;
};

export default Price;
