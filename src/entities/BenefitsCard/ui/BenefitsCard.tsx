import React from "react";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import styles from "./styles.module.scss";
import cn from "classnames";

interface BenefitsProps {
  title: string;
  desc: string;
  icon: React.ReactElement;
  width?: string;
}

const BenefitsCard = ({ title, desc, icon, width }: BenefitsProps) => {
  return (
    <div className={styles.card}>
      <div className="flex flex-col gap-[15px] pb-[30px] mmd:pb-[0px]">
        <h3 className={styles.card__title}>{title}</h3>
        <Heading
          component="p"
          className={cn("opacity-80", width, styles.card__desc)}
        >
          {desc}
        </Heading>
      </div>
      <div className={styles.card__right}>{icon}</div>
    </div>
  );
};

export default BenefitsCard;
