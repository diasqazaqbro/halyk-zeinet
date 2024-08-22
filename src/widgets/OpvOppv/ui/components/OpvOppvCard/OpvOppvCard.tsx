import React, { FC } from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import cn from "classnames";
import Aida from "../../assets/aida.png";
import Image from "next/image";

interface ICard {
  title: string;
  img: any;
  handleClick: any;
}

const OpvOppvCard: FC<ICard> = ({ title, img, handleClick }) => {
  return (
    <div className={styles.root} onClick={() => handleClick(title)}>
      <Heading className={styles.title} component="h2">
        {title}
      </Heading>
      <div className={styles.imgContainer}>
        <div className={styles.circle}></div>
        <Image
          className={cn(
            {
              [styles.topSpacing]: img === Aida,
            },
            styles.img
          )}
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
};

export default OpvOppvCard;
