import React from "react";
import FlashCard from "../FlashCard/FlashCard";
import styles from "./FlashCardList.module.css";

const FlashCardList = ({ words }) => {

  const length = words.length;
  
  return (
    <div className={styles['card-grid']}>
      {words.map((word) => {
        return (
          <FlashCard
            l1={word.lang1}
            l2={word.lang2}
            key={Math.random()}
          ></FlashCard>
        );
      })}
      <div className={styles.welcome}>{length === 0 ? 'Welcome!' : ''}</div>
    </div>
  );
};

export default FlashCardList;
