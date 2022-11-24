import styles from "./Button.module.css";
import icon from "./images/icon-cart.svg";

const Button = (props) => {
  return (
    <button className={styles.btn}>
      <img className={styles.image} src={icon} />
      {props.btnText}
    </button>
  );
};

export default Button;
