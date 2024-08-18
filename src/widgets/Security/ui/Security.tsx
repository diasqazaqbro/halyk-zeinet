import Heading from "@/shared/ui/Typography/Heading/Heading";
import styles from "./styles.module.scss";
import image from "./assets/tg.png";
import Image from "next/image";

export default function Security() {
  return (
    <section className={styles.root}>
      <div className="container">
        <Heading component="h1">
          Гарантии
          <br /> и безопасность
        </Heading>
        <div className="flex gap-5 mt-8 sm:block">
          <div className="w-[52%] sm:w-full">
            <div className={styles.item}>
              <div className={styles.item__text}>
                <Heading component="h3">Финансовые показатели</Heading>
                <Heading component="p">
                  Lorem ipsum dolor sit amet consectetur. Nulla nunc congue
                  viverra in. Scelerisque morbi facilisis ullamcorper sed ac
                  mauris risus. Ac tempus fermentum laoreet diam. Vitae amet
                  mauris ac nec viverra nibh porta. mauris ac nec viverra nibh porta. mauris ac nec viverra nibh porta. mauris ac nec viverra nibh porta.
                </Heading>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__text}>
                <Heading component="h3">Акционеры</Heading>
                <Heading component="p">
                  Lorem ipsum dolor sit amet consectetur. Nulla nunc congue
                  viverra in. Scelerisque morbi facilisis ullamcorper sed ac
                  mauris risus. Ac tempus fermentum laoreet diam. Vitae amet
                  mauris ac nec viverra nibh porta. mauris ac nec viverra nibh porta. mauris ac nec viverra nibh porta. mauris ac nec viverra nibh porta.
                </Heading>
              </div>
            </div>
          </div>
          <div className="w-[24%] sm:w-full">
            <div className={styles.item}>
              <div className={styles.item__text}>
                <Heading component="h3">Сертификаты</Heading>
                <Heading component="p">
                  Lorem ipsum dolor sit amet consectetur. Nulla nunc congue
                  viverra in. Scelerisque morbi facilisis ullamcorper sed ac
                  mauris risus. Ac tempus fermentum laoreet diam. Vitae amet
                  mauris ac nec viverra nibh porta.
                </Heading>
              </div>
              <Image className={styles.img} alt="tg" src={image} />
            </div>
          </div>
          <div className="w-[24%] sm:w-full">
            <div className={styles.item}>
              <div className={styles.item__text}>
                <Heading component="h3">Лицензия</Heading>
                <Heading component="p">
                  Lorem ipsum dolor sit amet consectetur. Nulla nunc congue
                  viverra
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
