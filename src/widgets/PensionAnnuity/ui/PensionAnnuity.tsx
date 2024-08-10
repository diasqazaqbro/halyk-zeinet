import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import Button, { ButtonSize } from "@/shared/ui/Button/Button";
import Image from "next/image";

const PensionAnnuity = () => {
  return (
    <section className={cn(styles.pension)}>
      <div className={cn("container", styles.pension__inner)}>
        <div className="flex flex-col mmd:mb-[-70px] mmd:gap-2.5 gap-20 w-[45%] mmd:w-full">
          <Heading component="h1" className={styles.pension__title}>
            Пенсионный Аннуитет
          </Heading>
          <Heading component="h2" className={styles.pension__subtitle}>
            Ваш надёжный финансовый партнёр
          </Heading>
          <Button className={styles.button} size={ButtonSize.L}>
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
