"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import Dias from "./assets/dias.png";
import Aida from "./assets/aida.png";
import { OpvOppvCard } from "./components/OpvOppvCard";
import { SexCard } from "./components/SexCard";
import { cn } from "@nextui-org/react";
import Button, { ButtonSize } from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import ModalComponent from "@/shared/ui/Modal/Modal";
import { sendMail } from "@/shared/api/sendMail";
import { getPensionSum } from "@/shared/helpers/getPensionSum";

const OpvOppv = () => {
  const [state, setState] = useState(1);
  const [type, setType] = useState();
  const [sex, setSex] = useState();
  const [agePart1, setAgePart1] = useState("0");
  const [agePart2, setAgePart2] = useState("0");

  const [answer, setAnswer] = useState(0);
  const handleClick = (type: any) => {
    if (state === 1) {
      setType(type);
      setState(2);
    }
    if (state === 2) {
      setSex(type);
      setState(3);
    }
  };

  const handleAgeChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  
    // Ensure the value is a digit and not "0", "1", "2", "3", or "4"
    if (!isNaN(Number(value)) && !["0", "1", "2", "3"].includes(value)) {
      setAgePart1(value);
    } else {
      console.warn("The first digit of the age cannot be 0, 1, 2, 3, or 4.");
    }
  };

  const handleAgeChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgePart2(e.target.value);
  };

  const returnBody = () => {
    switch (state) {
      case 1:
        return (
          <div className={styles.inner}>
            <Heading component="h1">Вы ОПВ или ОППВ?</Heading>
            <div className={styles.flex}>
              <OpvOppvCard handleClick={handleClick} img={Aida} title="ОПВ" />
              <OpvOppvCard handleClick={handleClick} img={Dias} title="ОППВ" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.inner}>
            <Heading component="h1">Ваш пол</Heading>
            <div className=" flex justify-center gap-12 mt-[30px] sm:flex-col sm:items-center">
              <SexCard handleClick={handleClick} type="men" />
              <SexCard handleClick={handleClick} type="women" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.inner}>
            <Heading className="mb-12" component="h1">
              Введите ваш возраст
            </Heading>

            <div className={styles.input__container}>
              <input
                onChange={handleAgeChange1}
                type="text"
                maxLength={1}
                className={styles.input__box}
                value={agePart1}
              />
              <input
                onChange={handleAgeChange2}
                type="text"
                maxLength={1}
                className={styles.input__box}
                value={agePart2}
              />
            </div>

            <div className={styles.subtitle}>
              Минимальные накопления для заключения пенсионного аннуитета в 2024
              году:
            </div>
            <div className="flex justify-center">
              <div className={styles.answer}>{answer} тенге</div>
            </div>
            <Button
              onClick={handleOpenModal}
              className={styles.button}
              size={ButtonSize.L}
            >
              Оставить заявку
            </Button>
          </div>
        );
    }
  };

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const [name, setName] = useState<string>();
  const [age, setAge] = useState<string>();
  const [number, setNumber] = useState<string>();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSendEmail = () => {
    const header = "Заявка на пенсионный аннуитет";
    const text = `Имя отправляющего: ${name}\n\nТелефон: ${number}\n\nВозраст: ${age}\n\nЗапрос отправлен с сайта halyk-zeinet.kz`;

    sendMail(header, text);
  };

  useEffect(() => 
    {
    if (agePart1 && agePart2 && type) {
      const sexReturn = sex === "men" ? "men" : "women";
      const ageCombined = parseInt(agePart1 + agePart2, 10);
      const pension = getPensionSum(ageCombined, sexReturn);
      if (type === "ОПВ") {
        setAnswer(pension?.OPV);
      } else if (type === "ОППВ" || '0') {
        setAnswer(pension?.OPVP || '0');
      }
    }
  }, [agePart1, agePart2, sex, type]);


  return (
    <section
      id="calculator"
      className={cn(styles.root, {
        [styles.padding]: state === 2,
      })}
    >
      <div className="container">
        {returnBody()}
        {state !== 1 && (
          <div className="flex justify-end mt-14">
            <button
              onClick={() => {
                setState(state - 1);
              }}
              className={styles.button__circle}
            >
              <svg
                style={{ marginRight: 7 }}
                width="17"
                height="30"
                viewBox="0 0 17 30"
                fill="none"
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
        )}
      </div>
      <ModalComponent
        className="p-8"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <form className="flex flex-col gap-8">
          <h1 className={styles.modal__title}>Оставьте заявку</h1>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
            classField={styles.modal__input}
            className={styles.modal__inputinside}
          />
          <Input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Телефон"
            classField={styles.modal__input}
            className={styles.modal__inputinside}
          />
          <Input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Возраст"
            classField={styles.modal__input}
            className={styles.modal__inputinside}
          />
          <p className={styles.modal__text2}>
            Ваши данный будут использованы для связи с Вами и не будут переданы
            третьим лицам. При заполнении формы вы даете свое согласие на
            обработку персональных данных и маркетинговых активностей.
          </p>
        </form>
        <Button
          onClick={handleSendEmail}
          size={ButtonSize.L}
          className="mx-auto md:w-[50%] sm:p-0 cursor-pointer mt-[20px]"
        >
          Оставить заявку
        </Button>
      </ModalComponent>
    </section>
  );
};

export default OpvOppv;
