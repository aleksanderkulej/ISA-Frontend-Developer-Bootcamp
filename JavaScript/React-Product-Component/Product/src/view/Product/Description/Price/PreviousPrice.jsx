import styles from "./PreviousPrice.module.css";

const PrevPrice = (props) => {
  return <del className={styles.price}>{props.value}</del>;
};

export default PrevPrice;
