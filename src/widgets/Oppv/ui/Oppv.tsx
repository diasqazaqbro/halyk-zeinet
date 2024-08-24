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
  const [fadeOutComplete, setFadeOutComplete] = React.useState<boolean>(false);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [hideAllMob, setHideAllMob] = React.useState<boolean>(false);
  const [slideLeftMob, setSlideLeftMob] = React.useState<boolean>(false);
  const [visibleTextsMob, setVisibleTextsMob] = React.useState([]);
  const [fadeOutCompleteMob, setFadeOutCompleteMob] =
    React.useState<boolean>(false);
  const [isImageSlidingOutMob, setIsImageSlidingOutMob] =
    React.useState<boolean>(false);
  const [animateCoins, setAnimateCoins] = React.useState<boolean>(false);

  const handleClick = () => {
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
      }, 1000);
    } else {
      setTimeout(() => {
        setFadeOutComplete(false);
        setVisibleTexts([]);
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

  const handleClickMob = () => {
    setHideAllMob(true);
    setSlideLeftMob(true);
    setIsImageSlidingOutMob(true);
    setAnimateCoins(true);

    if (!isSlidingOut) {
      OppvData2.forEach((data: any, index) => {
        setTimeout(() => {
          setVisibleTextsMob((prev: any) => {
            if (!prev.includes(data)) {
              return [...prev, data];
            }
            return prev;
          });
        }, index * 1000);
      });

      setTimeout(() => {
        setFadeOutCompleteMob(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setFadeOutCompleteMob(false);
        setVisibleTextsMob([]);
      }, 1000);
    }
  };

  return (
    <section id="oppv" className={styles.oppv}>
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
          alt="Азамат2"
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
        <div className="hidden mmd:flex flex-col absolute gap-[5px]">
          {visibleTextsMob.map(({ title, desc }, index) => (
            <div
              key={index}
              className={cn("flex flex-col gap-[5px]", styles.showTextMob)}
            >
              <h1 className={styles.detailed__text}>{title}</h1>
              <Heading component="p" className={styles.detailed__desc}>
                {desc}
              </Heading>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between w-[98%]">
          <div className="flex flex-col gap-5">
            <Heading
              component="h1"
              className={cn(
                `mmd:w-full`,
                showAll ? styles.showAll : "",
                isTextFaded ? styles.fadeOut : "",
                hideAllMob ? styles.hideAllMob : ""
              )}
            >
              А кто такие ОПВ и ОППВ?
            </Heading>
            <ul
              className={cn(
                "list-disc flex flex-col gap-5 pl-6",
                showAll ? styles.showAll : "",
                isTextFaded ? styles.fadeOut : "",
                hideAllMob ? styles.hideAllMob : ""
              )}
            >
              {OppvData.map(({ text }, index) => (
                <li key={index}>
                  <Heading
                    component="p"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </li>
              ))}
            </ul>
            <p
              className={cn(
                styles.oppv__mobtext,
                hideAllMob ? styles.hideAllMob : ""
              )}
            >
              На его примере мы разберемся
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
                Нажмите сюда
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
              className={cn(
                styles.oppv__text,
                isTextFaded ? styles.fadeOut : "",
                showAll ? styles.showAll : ""
              )}
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
          <div
            className={cn(styles.mobcoin_1, { [styles.animate]: animateCoins })}
          />
          <div
            className={cn(styles.mobcoin_2, { [styles.animate]: animateCoins })}
          />
          <button
            className={cn(
              styles.btn__dias,
              hideAllMob ? styles.hideAllMob : ""
            )}
          >
            Азамат
          </button>
          <div
            className={cn(
              styles.who__is,
              isTextFaded ? styles.fadeOut : "",
              showAll ? styles.showAll : ""
            )}
          >
            <button aria-label="Кто" className={styles.who__btn}>
              Азамат
            </button>
          </div>
          <button
            className={cn(styles.btn__mob, hideAllMob ? styles.hideAllMob : "")}
            onClick={handleClickMob}
            aria-label="Подробнее"
          >
            <OrangeArrowRight />
          </button>
          <div className="flex absolute left-[70%] top-[5%] w-[120%] flex-col gap-10">
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
              slideLeftMob ? styles.slideLeftMob : styles.img,
              { [styles.dnone]: fadeOutComplete }
            )}
            width={840}
            height={805}
            src="/Dias.png"
            alt="Азаматик"
          />
          <Image
            className={cn(
              styles.img2__mob,
              isImageSlidingOutMob ? styles.slideOutMob : ""
            )}
            src={"/Dias2.png"}
            width={828}
            height={787}
            alt="Азамат2"
          />
        </div>
      </div>
    </section>
  );
};

export default Oppv;
