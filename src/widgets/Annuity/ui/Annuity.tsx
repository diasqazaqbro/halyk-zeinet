"use client";

import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import MainImage from "./assets/image.webp";
import MainImage2 from "./assets/imageMobile.webp";
import MainImage3 from "./assets/animateImage.webp";
import MainImage4 from "./assets/animateImage2.webp";
import Tg1 from "./assets/entitiy/tg1.png";
import Tg2 from "./assets/entitiy/tg2.png";
import Tg3 from "./assets/entitiy/tg3.png";
import Arrow1 from "./assets/entitiy/arrow.png";
import Arrow2 from "./assets/entitiy/arrow2.png";
import cn from "classnames";

export default function Annuity() {
  const [startAnimation, setStartAnimation] = React.useState(false);
  const [showTextStage1, setShowTextStage1] = React.useState(false);
  const [showTextStage2, setShowTextStage2] = React.useState(false);
  const [showTextStage3, setShowTextStage3] = React.useState(false);
  const [showTextStage4, setShowTextStage4] = React.useState(false);
  const [showSecondImage, setShowSecondImage] = React.useState(false);
  const [showSecondImageMobile, setShowSecondImageMobile] =
    React.useState(false);

  const handleStartAnimation = () => {
    setStartAnimation(true);

    setTimeout(() => setShowTextStage1(true), 1000);
    setTimeout(() => setShowTextStage2(true), 2000);
    setTimeout(() => setShowTextStage3(true), 3000);
    setTimeout(() => setShowTextStage4(true), 4000);

    setTimeout(() => {
      setShowSecondImage(true);
    }, 1500);
  };

  const handleOffAnimate = () => {
    setStartAnimation(false);
    setShowTextStage1(false);
    setShowTextStage2(false);
    setShowTextStage3(false);
    setShowTextStage4(false);

    setShowSecondImage(false);
  };

  const [startAnimationMobile, setStartAnimationMobile] = React.useState(false);

  const handleStartAnimationMobile = () => {
    if (!startAnimationMobile) {
      setStartAnimationMobile(true);
      setTimeout(() => setShowTextStage1(true), 1000);
      setTimeout(() => setShowTextStage2(true), 2000);
      setTimeout(() => setShowTextStage3(true), 3000);
      setTimeout(() => setShowTextStage4(true), 4000);

      setTimeout(() => {
        setShowSecondImageMobile(true);
      }, 1500);
    } else {
      setStartAnimationMobile(false);
      setShowTextStage1(false);
      setShowTextStage2(false);
      setShowTextStage3(false);
      setShowTextStage4(false);

      setShowSecondImageMobile(false);
    }
  };

  return (
    <section className={styles.root}>
      <Image
        className={cn(styles.tg__3, { [styles.tg__3fadeOut]: startAnimation })}
        src={Tg2}
        width={425}
        height={432}
        alt="tg"
      />
      <div id="annuity" className="container">
        <div className={cn(styles.inner, { [styles.animate]: startAnimation })}>
          <div
            className={cn(styles.tg__container, {
              [styles.moveRightCoins]: startAnimation,
            })}
          >
            <Image
              className={cn(styles.tg__2, {
                [styles.moveLeftCoinsMobile]: startAnimationMobile,
              })}
              src={Tg3}
              width={142}
              height={144}
              alt="tg"
            />
            <Image
              className={cn(styles.tg__1, {
                [styles.moveRightCoinsMobile]: startAnimationMobile,
              })}
              src={Tg1}
              width={178}
              height={181}
              alt="tg"
            />
          </div>
          <button
            aria-label="Slide"
            onClick={() => handleStartAnimationMobile()}
            className={styles.button__circle_mobile}
          >
            <svg
              width="17"
              height="30"
              viewBox="0 0 17 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L14.2929 14.2929C14.6834 14.6834 14.6834 15.3166 14.2929 15.7071L2 28"
                stroke="#FAAE17"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Image
            className={cn(styles.img, { [styles.fadeOut]: startAnimation })}
            src={MainImage}
            width={396}
            height={672}
            priority
            alt="annuity"
          />
          <Image
            className={cn(styles.img__mobile, {
              [styles.img__mobilefadeOut]: startAnimationMobile,
            })}
            src={MainImage2}
            priority
            width={382}
            height={484}
            alt="annuity"
          />
          <div
            className={cn(styles.arrowContainer__1, {
              [styles.fadeOut]: startAnimation,
            })}
          >
            <Image className={styles.arrow__1} priority src={Arrow2} alt="tg" />
            <div className={styles.button__1}>Лаура</div>
          </div>
          <div
            className={cn(styles.texts, {
              [styles.fadeOut]: startAnimation || startAnimationMobile,
            })}
          >
            <h1 className={styles.title}>Что такое пенсионный аннуитет?</h1>
            <p className={styles.description}>
              Пенсионный аннуитет - это государственная программа, разработанная
              Национальным Банком Республики Казахстан, позволяющая досрочно
              использовать пенсионные накопления с 40 лет.
            </p>

            <div className={styles.button__container}>
              <div className={styles.arrowContainer__2}>
                <Image
                  priority
                  className={styles.arrow__2}
                  src={Arrow1}
                  alt="tg"
                />
                <div className={styles.button__2}>Нажмите сюда</div>
              </div>
              <div className={styles.button__title}>
                На её примере мы разберемся
              </div>
              <button
                aria-label="Slide"
                onClick={() => handleStartAnimation()}
                className={styles.button__circle}
              >
                <svg
                  width="17"
                  height="30"
                  viewBox="0 0 17 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L14.2929 14.2929C14.6834 14.6834 14.6834 15.3166 14.2929 15.7071L2 28"
                    stroke="#FAAE17"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* First Text Stage */}
        <div>
          <div
            className={cn(styles.newTextContainer, styles.textStage1, {
              [styles.fadeIn]: showTextStage1,
            })}
          >
            <h1 className={cn(styles.title, "whitespace-nowrap")}>
              История Лауры
            </h1>
            <p className={styles.subtitle}>
              Лауре 45 лет, она работает бухгалтером в Алматы и планирует{" "}
              <strong>досрочно</strong> использовать свои пенсионные накопления.
            </p>
            <div
              className={cn(styles.textStage2, {
                [styles.fadeIn]: showTextStage2,
              })}
            >
              <h2 className={styles.sectionTitle}>Что она делает:</h2>
              <p className={styles.description2}>
                Лаура решает заключить договор пенсионного аннуитета, так как у
                неё имеются достаточные наколпения в ЕНПФ.
              </p>
            </div>
            <div
              className={cn(styles.textStage3, {
                [styles.fadeIn]: showTextStage3,
              })}
            >
              <h2 className={styles.sectionTitle}>Как это работает:</h2>
              <ul className={styles.stepsList}>
                <li>
                  <strong>Регулярные выплаты:</strong> Когда Лауре исполнится 55
                  лет, она начнёт получать ежемесячные выплаты с ежегодной
                  индексацией (увеличением) в размере 7%, согласно договору
                  пенсионного аннуитета.
                </li>
                <li>
                  <strong>Пожизненно:</strong> Эти выплаты будут продолжаться на
                  протяжении всей её жизни, даже если ей будет 80 лет и больше.
                </li>
              </ul>
            </div>
            <div
              className={cn(styles.textStage4, {
                [styles.fadeIn]: showTextStage4,
              })}
            >
              <button
                aria-label="Slide"
                onClick={() => handleOffAnimate()}
                className={styles.button__circle}
              >
                <svg
                  width="17"
                  height="30"
                  viewBox="0 0 17 30"
                  fill="none"
                  style={{ marginRight: 5 }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2L2.70711 14.2929C2.31658 14.6834 2.31658 15.3166 2.70711 15.7071L15 28"
                    stroke="#FAAE17"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* <div
            className={cn(styles.newTextContainer, styles.textStage2, {
              [styles.fadeIn]: showTextStage2,
            })}
          ></div> */}
        </div>

        {/* Second Text Stage */}

        {/* Third Text Stage */}
        {/* <div
          className={cn(styles.newTextContainer, styles.textStage3, {
            [styles.fadeIn]: showTextStage3,
          })}
        >
          <h2 className={styles.sectionTitle}>Как это работает:</h2>
          <ul className={styles.stepsList}>
            <li>
              <strong>Взнос:</strong> Аида делает один крупный взнос или
              несколько взносов в страховую компанию.
            </li>
            <li>
              <strong>Регулярные выплаты:</strong> Когда Аида выйдет на пенсию в
              53 года, страховая компания начнёт платить ей определённую сумму
              денег каждый месяц.
            </li>
            <li>
              <strong>Пожизненно:</strong> Эти выплаты будут продолжаться на
              протяжении всей её жизни, даже если ей будет 90 лет или больше.
            </li>
          </ul>
        </div> */}
        {/* <div
          className={cn(styles.newTextContainer, styles.textStage4, {
            [styles.fadeIn]: showTextStage4,
          })}
        >
          <button
            onClick={() => handleOffAnimate()}
            className={styles.button__circle}
          >
            <svg
              width="17"
              height="30"
              viewBox="0 0 17 30"
              fill="none"
              style={{ marginRight: 5 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2L2.70711 14.2929C2.31658 14.6834 2.31658 15.3166 2.70711 15.7071L15 28"
                stroke="#FAAE17"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div> */}

        {/* New Image appearing from the right */}
        <div
          className={cn(styles.appearFromRight, {
            [styles.moveIn]: showSecondImage,
          })}
        >
          <Image
            src={MainImage3}
            width={617}
            height={704}
            priority
            alt="annuity-mobile"
            className={styles.img}
          />
        </div>
        <div
          className={cn(styles.appearFromRight, {
            [styles.moveIn]: showSecondImageMobile,
          })}
        >
          <Image
            src={MainImage4}
            width={360}
            height={339}
            priority
            alt="annuity-mobile"
            className={styles.img__mobile}
          />
        </div>
      </div>
    </section>
  );
}
