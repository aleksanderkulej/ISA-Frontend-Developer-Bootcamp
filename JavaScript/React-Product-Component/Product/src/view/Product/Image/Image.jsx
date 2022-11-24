import styles from "../Image/Image.module.css";
import icon from "../../../components/Button/images/image-product-desktop.jpg";
import iconMobile from "../../../components/Button/images/image-product-mobile.jpg";

const Image = (props) => {
  
  
  return (
  <>
  <img src={icon} className={styles.imageDesktop}/>
  <img src={iconMobile} className={styles.imageMobile}/>
  </>
  )
};


export default Image;
