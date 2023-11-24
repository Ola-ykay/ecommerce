import React from "react";
import styles from "./ProductPage.module.css";
import Products from "../Product/Product";
// import Rating from "../ProductsPage/Rating";
import CartButton from "./CartButton";

const ProductPage = () => { 

  return (
    <>
      <div>
        <div className={styles.products_list}>
          {Products.map((product) => (
            <div key={product.id} className={styles.product_wrapper}>
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  height={260}
                  width={296}
                />
              </div>

              <div className={styles.product_details}>
                <div className={styles.details_1}>
                <p className={styles.product_name}>{product.name}</p>
                <p className={styles.price_container}>
                  <span className={styles.naira}>&#8358;</span>
                 <span className={styles.price}>{product.price}</span> 
                  <span className={styles.price_decimal}>.99</span>
                </p>
                </div>
               
                <p className={styles.product_desc}>{product.description}</p>
                <div className={styles.rating}>
                  {/* <Rating /> */}
                  <span>(91)</span>
                </div>
                <CartButton />
              </div>

    
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
