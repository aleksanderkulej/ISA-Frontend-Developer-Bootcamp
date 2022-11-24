import styles from "./Category.module.css";

const Category = (props) => {
  return <p className={styles.category}>{props.categoryName}</p>;
};

export default Category;
