import React, { useState, useEffect, useRef } from "react";
import style from "./FlashCard.module.css";

const FlashCard = (props) => {
  const [toggle, setToggle] = useState(true);

  const currentFlipHandler = (event) => {
    setToggle(!toggle);
  };

  return (
    <div
      onClick={currentFlipHandler}
      className={`${style.card} ${toggle ? "" : style.flip}`}
    >
      <div className={toggle ? style.front : style.back}>
        {toggle ? props.l1 : props.l2}
      </div>
    </div>
  );
};

export default FlashCard;
