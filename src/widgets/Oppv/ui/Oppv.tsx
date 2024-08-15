"use client";
import React from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import { OppvData, OppvData2 } from "@/shared/data/OppvData";
import cn from "classnames";
import Image from "next/image";
import GreenArrowRight from "@/shared/ui/Icon/Arrow/GreenArrowRight";
import OrangeArrowRight from "@/shared/ui/Icon/Arrow/OrangeArrowRight";

const Oppv = () => {
  const [isSlidingOut, setIsSlidingOut] = React.useState(false);
  const [isTextFaded, setIsTextFaded] = React.useState(false);
  const [isCoinsMoved, setIsCoinsMoved] = React.useState(false);
  const [isDias2Visible, setIsDias2Visible] = React.useState(false);
  const [visibleTexts, setVisibleTexts] = React.useState([]);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [fadeOutComplete, setFadeOutComplete] = React.useState(false);

  const handleClick = () => {
    if (!hasStarted) {
      setIsSlidingOut(true);
      setIsTextFaded(true);
      setIsCoinsMoved(true);
      setIsDias2Visible(true);
      setHasStarted(true);

      OppvData2.forEach((data: any, index) => {
        setTimeout(() => {
          setVisibleTexts((prev): any => [...prev, data]);
        }, index * 500);
      });

      setTimeout(() => {
        setFadeOutComplete(true);
      }, 1000);
    }
  };

  return (
    <section className={styles.oppv}>
      <div className="container flex justify-between relative mmd:flex-col">
        <Image
          className={cn(
            "absolute z-[2]",
            {
              [styles.show]: isDias2Visible,
              [styles.hide]: !isDias2Visible,
            },
            styles.img2
          )}
          src={"/Dias2.png"}
          width={828}
          height={787}
          alt="Диас2"
        />
        <div
          className={cn(styles.coin_1, { [styles.moveLeft]: isCoinsMoved })}
        />
        <div
          className={cn(styles.coin_2, {
            [styles.moveLeftCoin2]: isCoinsMoved,
          })}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <Heading
              component="h1"
              className={cn(`mmd:w-[80%]`, {
                [styles.fadeOut]: isTextFaded,
              })}
            >
              А кто такие ОПВ и ОППВ?
            </Heading>
            <ul
              className={cn("list-disc flex flex-col gap-5 pl-6", {
                [styles.fadeOut]: isTextFaded,
              })}
            >
              {OppvData.map(({ text }, index) => (
                <li key={index}>
                  <Heading component="p">{text}</Heading>
                </li>
              ))}
            </ul>
            <p
              className={cn(styles.oppv__mobtext, {
                [styles.fadeOut]: isTextFaded,
              })}
            >
              И сейчас он вам расскажет
            </p>
          </div>
          <div className={styles.oppv__underleft}>
            <div
              className={cn(
                "absolute top-[-114%] left-[29%]",
                isTextFaded ? styles.fadeOut : ""
              )}
            >
              <button aria-label="Нажми сюда" className={styles.btn__help}>
                Нажми сюда
              </button>
            </div>
            <button
              className={cn(styles.btn, isTextFaded ? styles.fadeOut : "")}
              onClick={handleClick}
              aria-label="Подробнее"
            >
              <GreenArrowRight />
            </button>
            <p
              className={`${styles.oppv__text} ${
                isTextFaded ? styles.fadeOut : ""
              }`}
            >
              И сейчас он вам расскажет
            </p>
          </div>
        </div>
        <div
          className={cn(styles.oppv__right, {
            [styles.moveLeftWhiteCircle]: isCoinsMoved,
          })}
        >
          <div
            className={cn(styles.coin_3, {
              [styles.moveLeftCoin3]: isCoinsMoved,
            })}
          />
          <div className={styles.mobcoin_1} />
          <div className={styles.mobcoin_2} />
          <button className={styles.btn__dias}>Диас</button>
          <div
            className={cn(styles.who__is, isTextFaded ? styles.fadeOut : "")}
          >
            <button aria-label="Кто" className={styles.who__btn}>
              Диас
            </button>
          </div>
          <button className={styles.btn__mob} aria-label="Подробнее">
            <OrangeArrowRight />
          </button>
          <div className="flex absolute left-[70%] top-[-6%] w-[120%] flex-col gap-10">
            {visibleTexts.map(({ title, desc }, index) => (
              <div
                key={index}
                className={cn("flex flex-col gap-2.5", styles.showText)}
              >
                <h1
                  className={cn({
                    "text-[43px] leading-[normal] font-bold": index !== 0,
                    "text-[86px] leading-[normal] w-[120%] font-bold":
                      index === 0,
                  })}
                >
                  {title}
                </h1>
                <Heading component="p">{desc}</Heading>
              </div>
            ))}
            <button
              className={cn(
                styles.btn2,
                isTextFaded ? styles.fadeIn2 : "hidden"
              )}
              aria-label="Свайп обратно"
            >
              <GreenArrowRight />
            </button>
          </div>

          <Image
            className={cn(
              isSlidingOut ? `${styles.img} ${styles.slideOut}` : styles.img,
              { [styles.dnone]: fadeOutComplete }
            )}
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
