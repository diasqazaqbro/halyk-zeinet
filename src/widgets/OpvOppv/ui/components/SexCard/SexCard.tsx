import React, { FC } from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import Image from "next/image";

interface ICard {
  type: "men" | "women";
  handleClick: any;
}

const OpvOppvCard: FC<ICard> = ({ type, handleClick }) => {
  return (
    <div className={styles.root} onClick={() => handleClick(type)}>
      {type === "men" ? (
        <svg
          className={styles.svg}
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.001 8.28627H42.6925V0.5H77.5V35.3076H69.7137V14.9992V13.7921L68.8602 14.6456L53.4142 30.0914L53.1092 30.3965L53.3662 30.7429C56.9827 35.6176 59.1225 41.6524 59.1225 48.1888C59.1225 64.3769 45.9993 77.5 29.8112 77.5C13.6231 77.5 0.5 64.3769 0.5 48.1888C0.5 32.0005 13.6231 18.8775 29.8114 18.8775C36.3478 18.8775 42.3824 21.0173 47.2571 24.6338L47.6035 24.8908L47.9086 24.5858L63.3546 9.13983L64.2081 8.28627H63.001ZM9.3181 48.1886C9.3181 59.5066 18.4932 68.6817 29.8112 68.6817C41.1292 68.6817 50.3044 59.5068 50.3044 48.1886C50.3044 36.8706 41.1293 27.6955 29.8112 27.6955C18.4932 27.6955 9.3181 36.8706 9.3181 48.1886Z"
            stroke="white"
          />
        </svg>
      ) : (
        <svg className={styles.svg} width="49" height="79" viewBox="0 0 49 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.5 24.88C48.5 11.41 37.76 0.5 24.5 0.5C11.24 0.5 0.5 11.41 0.5 24.88C0.5 36.67 8.75 46.51 19.7 48.77V59.01H10.1V68.76H19.7V78.51H29.3V68.76H38.9V59.01H29.3V48.77C40.25 46.51 48.5 36.68 48.5 24.88ZM24.5 39.5C16.55 39.5 10.1 32.95 10.1 24.88C10.1 16.81 16.55 10.26 24.5 10.26C32.45 10.26 38.9 16.81 38.9 24.88C38.9 32.95 32.45 39.5 24.5 39.5Z" stroke="white" stroke-miterlimit="10"/>
        </svg>
        
      )}
      <div className={styles.title}>
        {type === "men" ? "мужской" : "женский"}
      </div>
    </div>
  );
};

export default OpvOppvCard;
