import React from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import { OppvData } from "@/shared/data/OppvData";
import Image from "next/image";
import Button from "@/shared/ui/Button/Button";
import GreenArrowRight from "@/shared/ui/Icon/Arrow/GreenArrowRight";
import OrangeArrowRight from "@/shared/ui/Icon/Arrow/OrangeArrowRight";

const Oppv = () => {
  return (
    <section className={styles.oppv}>
      <div className="container flex justify-between relative mmd:flex-col">
        <div className={styles.coin_1} />
        <div className={styles.coin_2} />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <Heading component="h1" className="mmd:w-[80%]">
              А кто такие ОПВ и ОППВ?
            </Heading>
            <ul className="list-disc flex flex-col gap-5 pl-6">
              {OppvData.map(({ text }, index) => (
                <li key={index}>
                  <Heading component="p">{text}</Heading>
                </li>
              ))}
            </ul>
            <p className={styles.oppv__mobtext}>И сейчас он вам расскажет</p>
          </div>
          <div className={styles.oppv__underleft}>
            <div className="absolute top-[-114%] left-[29%]">
              <button aria-label="Нажми сюда" className={styles.btn__help}>
                Нажми сюда
              </button>
            </div>
            <button className={styles.btn} aria-label="Подробнее">
              <GreenArrowRight />
            </button>
            <p className={styles.oppv__text}>И сейчас он вам расскажет</p>
          </div>
        </div>
        <div className={styles.oppv__right}>
          <div className={styles.coin_3} />
          <div className={styles.mobcoin_1} />
          <div className={styles.mobcoin_2} />
          <button className={styles.btn__dias}>
            Диас
          </button>
          <div className={styles.who__is}>
            <button aria-label="Кто" className={styles.who__btn}>
              Диас
            </button>
          </div>
          <button className={styles.btn__mob} aria-label="Подробнее">
            <OrangeArrowRight />
          </button>
          <Image
            className={styles.img}
            width={840}
            height={805}
            src="/Dias.png"
            alt="Диасик"
          />
        </div>
      </div>
    </section>
  );
};

export default Oppv;
