import styles from "./ProductDescription.module.css";

const ProductDescription = (props) => {
  return <p className={styles.productDescription}>{props.description}</p>;
};

export default ProductDescription;
