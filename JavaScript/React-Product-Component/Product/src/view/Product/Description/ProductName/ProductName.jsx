import styles from "./ProductName.module.css";

const ProductName = (props) => {
  return <h1 className={styles.productName}>{props.name}</h1>;
};

export default ProductName;
