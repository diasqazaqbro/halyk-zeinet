"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import MainImage from "./assets/image.png";
import MainImage2 from "./assets/imageMobile.png";
import MainImage3 from "./assets/animateImage.png";
import MainImage4 from "./assets/animateImage2.png";
import Tg1 from "./assets/entitiy/tg1.png";
import Tg2 from "./assets/entitiy/tg2.png";
import Tg3 from "./assets/entitiy/tg3.png";
import Arrow1 from "./assets/entitiy/arrow.png";
import Arrow2 from "./assets/entitiy/arrow2.png";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import { cn } from "@nextui-org/react";

export default function Annuity() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showTextStage1, setShowTextStage1] = useState(false);
  const [showTextStage2, setShowTextStage2] = useState(false);
  const [showTextStage3, setShowTextStage3] = useState(false);
  const [showTextStage4, setShowTextStage4] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showSecondImageMobile, setShowSecondImageMobile] = useState(false);

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

  const [startAnimationMobile, setStartAnimationMobile] = useState(false);

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
        alt="tg"
      />
      <div className="container">
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
              alt="tg"
            />
            <Image
              className={cn(styles.tg__1, {
                [styles.moveRightCoinsMobile]: startAnimationMobile,
              })}
              src={Tg1}
              alt="tg"
            />
          </div>
          <button
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
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <Image
            className={cn(styles.img, { [styles.fadeOut]: startAnimation })}
            src={MainImage}
            alt="annuity"
          />
          <Image
            className={cn(styles.img__mobile, {
              [styles.img__mobilefadeOut]: startAnimationMobile,
            })}
            src={MainImage2}
            alt="annuity"
          />
          <div
            className={cn(styles.arrowContainer__1, {
              [styles.fadeOut]: startAnimation,
            })}
          >
            <Image className={styles.arrow__1} src={Arrow2} alt="tg" />
            <div className={styles.button__1}>Аида</div>
          </div>
          <div
            className={cn(styles.texts, {
              [styles.fadeOut]: startAnimation || startAnimationMobile,
            })}
          >
            <Heading component="h1">Что такое пенсионный аннуитет?</Heading>
            <h1 className={styles.title}></h1>
            <p className={styles.description}>
              Аннуитет — это финансовый продукт, который обеспечивает вам
              регулярные выплаты на протяжении всей жизни в обмен на один
              крупный взнос или серию взносов. Это как договор, по которому вы
              платите деньги заранее, а потом получаете деньги обратно
              регулярно, как зарплату, на протяжении всей жизни.
            </p>

            <div className={styles.button__container}>
              <div className={styles.arrowContainer__2}>
                <Image className={styles.arrow__2} src={Arrow1} alt="tg" />
                <div className={styles.button__2}>Нажми сюда</div>
              </div>
              <div className={styles.button__title}>
                На ее примере мы разберемся
              </div>
              <button
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
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* First Text Stage */}
        <div
          className={cn(styles.newTextContainer, styles.textStage1, {
            [styles.fadeIn]: showTextStage1,
          })}
        >
          <h1 className={styles.title}>История Аиды</h1>
          <p className={styles.subtitle}>
            Аиде 40 лет, она работает учителем в Алматы и планирует выйти на
            пенсию через 13 лет
          </p>
        </div>

        {/* Second Text Stage */}
        <div
          className={cn(styles.newTextContainer, styles.textStage2, {
            [styles.fadeIn]: showTextStage2,
          })}
        >
          <h2 className={styles.sectionTitle}>Что она делает:</h2>
          <p className={styles.description2}>
            Аида решает купить аннуитет. Она вносит одну крупную сумму денег в
            страховую компанию (например, 1 миллион тенге).
          </p>
        </div>

        {/* Third Text Stage */}
        <div
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
        </div>
        <div
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
        </div>

        {/* New Image appearing from the right */}
        <div
          className={cn(styles.appearFromRight, {
            [styles.moveIn]: showSecondImage,
          })}
        >
          <Image src={MainImage3} alt="annuity-mobile" className={styles.img} />
        </div>
        <div
          className={cn(styles.appearFromRight, {
            [styles.moveIn]: showSecondImageMobile,
          })}
        >
          <Image
            src={MainImage4}
            alt="annuity-mobile"
            className={styles.img__mobile}
          />
        </div>
      </div>
    </section>
  );
}
