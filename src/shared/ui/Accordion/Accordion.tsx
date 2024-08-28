"use client";
import React from "react";
import AccordionOpen from "../Icon/Faq/AccordionOpen";
import cn from "classnames";
import styles from "./styles.module.scss";
import AccordionOpenMob from "../Icon/Faq/AccordionOpenMob";

export const data = [
  {
    question:
      "1.	Что будет с накоплениями, если страховая компания обанкротится?",
    answer:
      "В Республике Казахстан функционирует Фонд гарантирования страховых выплат (ФГСВ), который осуществляет гарантийные выплаты страхователям при страховом случае по договорам страхования, заключенными с ликвидируемой страховой компанией. Таким образом, в случае принудительной ликвидации страховой организации ФГСВ примет на себя обязательства по осуществлению пенсионных выплат страхователям для обеспечения непрерывности и своевременности выплат в период с даты назначения временной администрации до момента передачи страхового портфеля в другую страховую организацию.",
  },
  {
    question: "2.	Что такое гарантированный период (ГП) ?",
    answer: `
Гарантированный период — это срок, в течение которого страховая компания обязуется выплачивать аннуитетные выплаты, даже если аннуитент (человек, который купил аннуитет) ушел из жизни. Этот период устанавливается при заключении договора и может быть, например, 5, 10 или 15 лет.\n\n
Как это работает:\n
- Если аннуитент живет дольше гарантированного периода, выплаты продолжаются пожизненно, как предусмотрено аннуитетом, независимо от того, истек гарантированный период или нет.\n\n
- Если аннуитент уходит из жизни до окончания гарантированного периода, то выплаты продолжаются его наследникам или другим назначенным лицам до конца гарантированного срока.\n\n
Пример:\n
Если человек приобрёл пенсионный аннуитет с 10-летним гарантированным периодом и ушел из жизни через 6 лет после начала выплат, страховая компания будет выплачивать пенсию его наследникам или выгодоприобретателям ещё 4 года.\n\n
Гарантированный период в аннуитете обеспечивает дополнительную защиту, позволяя передать выплаты наследникам в случае преждевременного ухода из жизни аннуитента.
`,
  },
  {
    question: "3.	В чем разница выплат из ЕНПФ и из страховой компании?",
    answer:
      "Основное отличие заключается в сроках выплаты пенсий. Если пенсии, получаемые непосредственно от ЕНПФ, выплачиваются до полного исчерпания пенсионных накоплений вкладчика, то выплаты от страховых организаций осуществляются пожизненно, независимо от того, исчерпаны ли пенсионные накопления вкладчика. Это означает, что срок выплаты не ограничен суммой накоплений, переданных из ЕНПФ в страховую организацию",
  },
  {
    question: "4.	Какие документы нужны для заключения договора?",
    answer: `
    1 Документ удостоверяющий личность;\n
    2 Выписка из ЕНПФ;\n
    3 Документ удостоверяющий личность выгодоприобретателя (наследника);\n
    4 Банковские реквизиты.
    `,
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
  const contentHeight = React.useRef<HTMLDivElement>(null);

  const formatAnswerWithLineBreaks = (answer: any) => {
    return answer.split("\n").map((line: any, index: any) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
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
            isOpen ? styles.ansawer__active : styles.answer__unactive
          )}
        >
          {formatAnswerWithLineBreaks(answer)}
        </p>
      </div>
    </div>
  );
}
