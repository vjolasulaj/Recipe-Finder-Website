import React from "react";
import Image from "next/image";
import styles from "../../app/styles/MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src="/main.jpg"
          alt="Main Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h2 className={styles.overlayText}>Your favorite recipe, make it yourself</h2>
      <p className={styles.overlayParagraph}>Delicious recipes made simple — cook, create, enjoy.</p>
    </div>
  );
};

export default MainPage;
