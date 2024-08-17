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
  const [isSlidingOut, setIsSlidingOut] = React.useState<boolean>(false);
  const [isSlidingIn, setIsSlidingIn] = React.useState<boolean>(false);
  const [isTextFaded, setIsTextFaded] = React.useState<boolean>(false);
  const [isReverseFaded, setIsReverseFaded] = React.useState<boolean>(false);
  const [isCoinsMoved, setIsCoinsMoved] = React.useState<boolean>(false);
  const [isCoinsFaded, setIsCoinsFaded] = React.useState<boolean>(false);
  const [isDias2Visible, setIsDias2Visible] = React.useState<boolean>(false);
  const [visibleTexts, setVisibleTexts] = React.useState([]);
  const [hasStarted, setHasStarted] = React.useState<boolean>(false);
  const [fadeOutComplete, setFadeOutComplete] = React.useState<boolean>(false);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [isAnimating, setIsAnimating] = React.useState<boolean>(false);

  const handleClick = () => {
    // if (isAnimating) return;

    // setIsAnimating(true);

    setIsSlidingOut(true);
    setIsTextFaded(true);
    setIsCoinsMoved(true);
    setIsDias2Visible(true);

    setIsReverseFaded(false);
    setIsCoinsFaded(false);
    setIsSlidingIn(false);
    setShowAll(false);

    if (!isSlidingOut) {
      OppvData2.forEach((data: any, index) => {
        setTimeout(() => {
          setVisibleTexts((prev: any) => {
            if (!prev.includes(data)) {
              return [...prev, data];
            }
            return prev;
          });
        }, index * 1000);
      });

      setTimeout(() => {
        setFadeOutComplete(true);
        setIsAnimating(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setFadeOutComplete(false);
        setVisibleTexts([]);
        setIsAnimating(false);
      }, 1000);
    }
  };

  const handleReverseClick = () => {
    setIsReverseFaded(true);
    setIsCoinsFaded(true);
    setIsSlidingIn(true);
    setShowAll(true);

    setIsSlidingOut(false);
    setIsTextFaded(false);
    setIsCoinsMoved(false);
    setIsDias2Visible(false);
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
            styles.img2,
            isReverseFaded ? styles.fadeOut2 : ""
          )}
          src={"/Dias2.png"}
          width={828}
          height={787}
          alt="Диас2"
        />
        <div
          className={cn(styles.coin_1, {
            [styles.moveLeft]: isCoinsMoved,
            [styles.moveFadedCoin2]: isCoinsFaded,
          })}
        />
        <div
          className={cn(styles.coin_2, {
            [styles.moveLeftCoin2]: isCoinsMoved,
            [styles.moveFadedCoin2]: isCoinsFaded,
          })}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <Heading
              component="h1"
              className={cn(
                `mmd:w-[80%]`,
                showAll ? styles.showAll : "",
                isTextFaded ? styles.fadeOut : ""
              )}
            >
              А кто такие ОПВ и ОППВ?
            </Heading>
            <ul
              className={cn(
                "list-disc flex flex-col gap-5 pl-6",
                showAll ? styles.showAll : "",
                isTextFaded ? styles.fadeOut : ""
              )}
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
                isTextFaded ? styles.fadeOut : "",
                showAll ? styles.showAll : ""
              )}
            >
              <button aria-label="Нажми сюда" className={styles.btn__help}>
                Нажми сюда
              </button>
            </div>
            <button
              className={cn(
                styles.btn,
                isTextFaded ? styles.fadeOut : "",
                showAll ? styles.showAll : ""
              )}
              onClick={handleClick}
              aria-label="Подробнее"
            >
              <GreenArrowRight />
            </button>
            <p
              className={`${styles.oppv__text} ${
                (isTextFaded ? styles.fadeOut : "",
                showAll ? styles.showAll : "")
              }`}
            >
              И сейчас он вам расскажет
            </p>
          </div>
        </div>
        <div
          className={cn(styles.oppv__right, {
            [styles.moveLeftWhiteCircle]: isCoinsMoved,
            [styles.moveFadedWhiteCircle]: isCoinsFaded,
          })}
        >
          <div
            className={cn(styles.coin_3, {
              [styles.moveLeftCoin3]: isCoinsMoved,
              [styles.moveFadedCoin2]: isCoinsFaded,
            })}
          />
          <div className={styles.mobcoin_1} />
          <div className={styles.mobcoin_2} />
          <button className={styles.btn__dias}>Диас</button>
          <div
            className={cn(
              styles.who__is,
              isTextFaded ? styles.fadeOut : "",
              showAll ? styles.showAll : ""
            )}
          >
            <button aria-label="Кто" className={styles.who__btn}>
              Диас
            </button>
          </div>
          <button className={styles.btn__mob} aria-label="Подробнее">
            <OrangeArrowRight />
          </button>
          <div className="flex absolute left-[67%] top-[1%] w-[120%] flex-col gap-10">
            {visibleTexts.map(({ title, desc }, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col gap-2.5",
                  styles.showText,
                  isReverseFaded ? styles.fadeOut2 : ""
                )}
              >
                <h1
                  className={cn({
                    [styles.detailed__text]: index !== 0,
                    [styles.detailed__text2]: index === 0,
                  })}
                >
                  {title}
                </h1>
                <Heading component="p" className={styles.detailed__desc}>
                  {desc}
                </Heading>
              </div>
            ))}
            <button
              className={cn(
                styles.btn2,
                isReverseFaded ? styles.fadeOut2 : "",
                isTextFaded ? styles.fadeIn2 : "hidden"
              )}
              onClick={handleReverseClick}
              aria-label="Свайп обратно"
            >
              <GreenArrowRight />
            </button>
          </div>

          <Image
            className={cn(
              isSlidingOut ? `${styles.img} ${styles.slideOut}` : styles.img,
              isSlidingIn ? styles.slideIn : styles.img,
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
