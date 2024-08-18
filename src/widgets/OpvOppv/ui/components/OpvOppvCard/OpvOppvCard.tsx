import React, { FC } from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import Image from "next/image";

interface ICard  {
  title: string
  img: any
  handleClick: any
}

const OpvOppvCard: FC<ICard>  = ({title, img, handleClick}) => {
  return (
    <div className={styles.root} onClick={() => handleClick(title)}>
      <Heading className={styles.title} component="h2">
        {title}
      </Heading>
      <div className={styles.imgContainer}>
        <div className={styles.circle}></div>
        <Image className={styles.img} src={img} alt="Dias" />
      </div>
    </div>
  );
};

export default OpvOppvCard;
