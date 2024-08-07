import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import Button, { ButtonSize } from "@/shared/ui/Button/Button";
import Image from "next/image";

const PensionAnnuity = () => {
  return (
    <section className={cn(styles.pension)}>
      <div className="container flex justify-between items-center">
        <div className="flex flex-col gap-20">
          <Heading component="h1">Пенсионный Аннуитет</Heading>
          <Heading className="w-[70%]" component="h2">
            Ваш надёжный финансовый партнёр
          </Heading>
          <Button size={ButtonSize.L} className=" ">
            Оставить заявку
          </Button>
        </div>
        <div className="mb-[-1.5%]">
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
