import styles from "./Product.module.css";
import Image from "./Image/Image";
import Category from "./Description/Category/Category";
import ProductName from "./Description/ProductName/ProductName";
import ProductDescription from "./Description/ProductDescription/ProductDescription";
import Price from "./Description/Price/Price";
import PrevPrice from "./Description/Price/PreviousPrice";
import Button from "../../components/Button/Button";

const Product = () => {
  return (
    <div className={styles.box}>
      <Image/>
      <div className={styles.descriptionPack}>
        <Category categoryName="PERFUME"/>
        <ProductName name="Gabrielle Essence Eau De Parfum"/>
        <ProductDescription description="A floral, solar and voluptous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL"/>
        <div className={styles.pricesElements}>
          <Price priceValue="$149.99"/>
          <PrevPrice value="$169.99" />
        </div>
        <Button btnText="Add to cart"/>
      </div>
    </div>
  );
};

export default Product;
