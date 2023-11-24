import React from 'react';
import styles from "./ProductPage.module.css";
import { FaCartShopping } from "react-icons/fa6";

const CartButton = () => {
  return (
    <button className={styles.add_to_cart}>
       <h2><FaCartShopping size={15}/></h2> 
      <p>Add to Cart</p>
    </button>
  );
};

export default CartButton;

