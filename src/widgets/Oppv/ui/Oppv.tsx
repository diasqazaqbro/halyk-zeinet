import React from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import { OppvData } from "@/shared/data/OppvData";
import Image from "next/image";

const Oppv = () => {
  return (
    <section className={styles.oppv}>
      <div className="container flex justify-between">
        <div className="flex flex-col gap-5">
          <Heading component="h1" className="w-[130%]">
            А кто такие ОПВ и ОППВ?
          </Heading>
          <ul className="list-disc flex flex-col gap-5 pl-6">
            {OppvData.map(({ text }, index) => (
              <li key={index}>
                <Heading component="p">{text}</Heading>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.oppv__right}>
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
