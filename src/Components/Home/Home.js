import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import ProductPage from "../ProductsPage/ProductPage";

const Home = () => {
  return (
    <>
      <div className={styles.homeCont}>
        <img src="Images/vector_1.png" alt="" className={styles.vector_1} />
        <div className={styles.content}>
          <h3 className={styles.contentHeading}>
            Up to <span>60% off</span> on all items till{" "}
            <span>September 11</span>
          </h3>
          <button className={styles.shop}>
            <Link to="">
              Shop now
              <h4>
                <MdArrowForwardIos />
              </h4>
            </Link>
          </button>
        </div>
      </div>
      <section className={styles.collection_container}>
        <div className={styles.collection_heading}>
          <h2>Featured Collections</h2>
          <p>
            View all
            <FaPlus size={15} />
          </p>
        </div>
        <div className={styles.collections}>
          <div>
            <img src="Images/vector_2.png" alt="" className={styles.vector_2} />
            <div className={styles.vector_2_content}>
              <p>UP TO 80% OFF</p>
              <h2>
                <BsArrowUpRight />
              </h2>
            </div>
            <div className={styles.vector_2_content_2}>
              <h3>Kiddies Korean Summer Collection</h3>
              <button>
                <Link to="/cart">
                  <p>Shop Now</p>
                  <h4>
                    <MdArrowForwardIos />
                  </h4>
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.collections_2}>
            <div>
              <img
                src="Images/vector_3.png"
                alt=""
                className={styles.vector_3}
              />
              <div className={styles.vector_3_content_3}>
                <p>UP TO 80% OFF</p>
                <h3>Children Summer Play Set</h3>
              </div>
            </div>

            <div>
              <img
                src="Images/vector_4.png"
                alt=""
                className={styles.vector_4}
              />
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className={styles.product_container}>
          <div className={styles.product_heading}>
            <h2>Popular Products</h2>
            <p>
              View all
              <FaPlus size={15} />
            </p>
          </div>

          <ProductPage />
        </div>

        <div className={styles.product_container}>
          <div className={styles.product_heading}>
            <h2>Latest Products</h2>
            <p>
              View all
              <FaPlus size={15} />
            </p>
          </div>

          <ProductPage />
        </div>
      </div>
    </>
  );
};

export default Home;
