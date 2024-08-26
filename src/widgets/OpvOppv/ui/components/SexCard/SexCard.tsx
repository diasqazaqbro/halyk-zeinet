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
        <svg
          width="48"
          height="78"
          viewBox="0 0 48 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7 47.8551V48.2625V58.5V59H19.2H10.1V67.75H19.2H19.7V68.25V77.5H28.3V68.25V67.75H28.8H37.9V59H28.8H28.3V58.5V48.2625V47.8551L28.699 47.7728C39.4207 45.5616 47.5 35.9312 47.5 24.375C47.5 11.1812 36.9721 0.5 24 0.5H23.9971L19.7 47.8551ZM19.7 47.8551L19.301 47.7728M19.7 47.8551L19.301 47.7728M19.301 47.7728C8.5793 45.5616 0.5 35.9312 0.5 24.375C0.5 11.1827 11.0264 0.501522 23.997 0.5L19.301 47.7728ZM23.9969 39.5H23.997H24C32.2364 39.5 38.9 32.7211 38.9 24.375C38.9 16.0289 32.2364 9.25 24 9.25H23.997H23.9969C15.762 9.25158 9.1 16.0305 9.1 24.375C9.1 32.7195 15.762 39.4984 23.9969 39.5Z"
            stroke="white"
          />
        </svg>
      )}
      <div className={styles.title}>
        {type === "men" ? "мужской" : "женский"}
      </div>
    </div>
  );
};

export default OpvOppvCard;
