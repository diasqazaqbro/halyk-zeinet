import React, { FC } from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import Image from "next/image";

interface ICard  {
  title: string
  img: any
}

const OpvOppvCard: FC<ICard>  = ({title, img}) => {
  return (
    <div className={styles.root}>
      <Heading className={styles.title} component="h2">
        {title}
      </Heading>

      <Image className={styles.img} src={img} alt="Dias" />
    </div>
  );
};

export default OpvOppvCard;
