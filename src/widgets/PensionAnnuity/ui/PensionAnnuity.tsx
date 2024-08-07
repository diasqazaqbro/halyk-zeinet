import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import Button, { ButtonSize } from "@/shared/ui/Button/Button";
import Image from "next/image";

const PensionAnnuity = () => {
  return (
    <section className={cn(styles.pension)}>
      <div className="container flex justify-between items-center gap-7">
        <div className="flex flex-col gap-20 w-[45%]">
          <Heading component="h1">Пенсионный Аннуитет</Heading>
          <Heading component="h2">Ваш надёжный финансовый партнёр</Heading>
          <Button className="w-[300px]" size={ButtonSize.L}>
            Оставить заявку
          </Button>
        </div>
        <div className="mb-[-1px]">
          <Image
            className={styles.img}
            width={742}
            height={756}
            src={"/asianBitch.png"}
            alt="Азияточка"
          />
        </div>
      </div>
    </section>
  );
};

export default PensionAnnuity;
