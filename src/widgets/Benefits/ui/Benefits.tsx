import React from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import { BenefitsData } from "@/shared/data/BenefitsData";
import { BenefitsCard } from "@/entities/BenefitsCard";

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <Heading component="h1" className={styles.benefits__title}>
          Какую выгоду вы получаете
        </Heading>
        <div className={styles.benefits__card}>
          {BenefitsData.map((benefit, index) => (
            <BenefitsCard
              key={index}
              title={benefit.title}
              desc={benefit.desc}
              icon={benefit.icon}
              width={benefit.width}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
