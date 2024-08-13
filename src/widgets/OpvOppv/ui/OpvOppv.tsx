import React from "react";
import styles from "./styles.module.scss";
import Heading from "@/shared/ui/Typography/Heading/Heading";
import OpvOppvCard from "./components/OpvOppvCard";
import Dias from "./assets/dias.png";
import Aida from "./assets/aida.png";

const OpvOppv = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <Heading component="h1">Вы ОПВ или ОППВ?</Heading>
          <div className={styles.flex}>
            <OpvOppvCard img={Dias} title="ОПВ" />
            <OpvOppvCard img={Aida} title="ОППВ" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpvOppv;
