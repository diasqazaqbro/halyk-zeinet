"use client";
import React, { useState } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import Button, { ButtonSize } from "@/shared/ui/Button/Button";
import Image from "next/image";
import ModalComponent from "@/shared/ui/Modal/Modal";
import Input from "@/shared/ui/Input/Input";
import { sendMail } from "@/shared/api/sendMail";

const PensionAnnuity = () => {
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
    setIsModalOpen(false)
  };
  return (
    <section className={cn(styles.pension)}>
      <div className={cn("container", styles.pension__inner)}>
        <div className="flex flex-col mmd:mb-[-70px] mmd:gap-2.5 gap-20 w-[45%] mmd:w-full">
          <Heading component="h1" className={styles.pension__title}>
            Пенсионный Аннуитет
          </Heading>
          <Heading component="h2" className={styles.pension__subtitle}>
            Получайте свои пенсионные накопления с 40 лет
          </Heading>
          <Button
            onClick={handleOpenModal}
            className={styles.button}
            size={ButtonSize.L}
          >
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
      <ModalComponent
        className="p-8"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="flex flex-col gap-8">
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
          <Button
            onClick={handleSendEmail}
            size={ButtonSize.L}
            className="mx-auto md:w-[50%]  cursor-pointer"
          >
            Оставить заявку
          </Button>
        </div>
      </ModalComponent>
    </section>
  );
};

export default PensionAnnuity;
