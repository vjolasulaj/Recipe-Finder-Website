import React from 'react';
import styles from "../../app/styles/Navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image 
              src="/cravekitchen.png" 
              alt="Crave Kitchen Logo" 
              width={130} 
              height={100} 
              objectFit="contain" 
            />
          </Link>
        </div>

        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/recipe">Recipes</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
