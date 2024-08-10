"use client";
import { useRef } from "react";
import AccordionOpen from "../Icon/Faq/AccordionOpen";
import cn from "classnames";
import styles from "./styles.module.scss";
import AccordionOpenMob from "../Icon/Faq/AccordionOpenMob";

export const data = [
  {
    question:
      "Категории лиц, имеющих право на заключение договоров пенсионного аннуитета на условиях отложенных выплат?",
    answer:
      "Категории лиц, имеющих право на заключение договоров пенсионного аннуитета на условиях отложенных выплат?",
  },
];

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function Accordion({
  isOpen,
  onClick,
  answer,
  question,
}: AccordionProps) {
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div className={cn(styles.wrapper, isOpen && "pb-[22px]")}>
      <button
        className={cn(
          styles.question__container,
          isOpen && styles.active,
          "focus:outline-none"
        )}
        onClick={onClick}
      >
        <p className={styles.question}>{question}</p>
        <div className={cn(styles.open, isOpen && styles.active)}>
          <div className="sm:hidden block">
            <AccordionOpen />
          </div>
          <div className="sm:block hidden">
            <AccordionOpenMob />
          </div>
        </div>
      </button>

      <div
        ref={contentHeight}
        className={cn(styles.answer__container, {
          [styles.answer__open]: isOpen,
          [styles.answer__close]: !isOpen,
        })}
        style={
          isOpen && contentHeight.current
            ? { height: `${contentHeight.current.scrollHeight}px` }
            : { height: "0px" }
        }
      >
        <p
          className={cn(
            styles.answer__content,
            isOpen ? styles.answer__active : styles.answer__unactive
          )}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
