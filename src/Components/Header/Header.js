import React from 'react';
import { CiSearch  } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
      <Link to='/' className={styles.logo}>
        <img src="Images/logo.png" alt='logo' />
      </Link>
      </div>
     
      <div className={styles.headerSec}>
        <div className={styles.search}>
        <p className={styles.searchIcon}><CiSearch  size={20} /></p>
      <p className={styles.searchText}>Search here ...</p> 
        </div>
      
      
        <ul className={styles.pagesCont}>
          
          <li className={styles.pageList}>
          <p className={styles.listIcon}><FaRegHeart />
          All Categories </p>
          </li>

          <li className={styles.pageList}>
            <Link to='/cart'>
          <p className={styles.listIcon}><FaCartShopping />
          Cart</p></Link>
          </li>

          <li className={styles.pageList}>
            <Link to='/profile'>
          <p className={styles.listIcon}><FaRegUser />
            Profile</p>
            </Link>
          </li>

         

          
          
        </ul>
      </div>
    </header>
  )
}

export default Header
