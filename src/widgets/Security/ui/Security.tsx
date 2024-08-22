import Heading from "@/shared/ui/Typography/Heading/Heading";
import styles from "./styles.module.scss";
import cn from "classnames";
import image from "./assets/tg.png";
import Image from "next/image";

export default function Security() {
  return (
    <section className={styles.root}>
      <div className="container">
        <Heading component="h1" className="mmd:text-center">
          Гарантии
          <br /> и безопасность
        </Heading>
        <div className="flex gap-5 mt-8 mlg:block">
          <div className={styles.inner__card}>
            <div className={styles.item}>
              <div className={styles.item__text}>
                <Heading component="h3" className="mb-[6px]">
                  Финансовые показатели
                </Heading>
                <Heading component="p">
                  {/* Lorem ipsum dolor sit amet consectetur. Nulla nunc congue
                  viverra in. Scelerisque morbi facilisis ullamcorper sed ac
                  mauris risus. Ac tempus fermentum laoreet diam. Vitae amet
                  mauris ac nec viverra nibh porta. mauris ac nec viverra nibh
                  porta. mauris ac nec viverra nibh porta. mauris ac nec viverra
                  nibh porta. */}
                  Показатели фонда гарантирования выплат. Компания является
                  участником Фонда гарантирования страховых выплат.
                </Heading>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__text}>
                <Heading component="h3" className="mb-[6px]">
                  Справка о гос. регистрации
                </Heading>
                <Heading component="p">
                  Дополнительная защита от немецкого перестраховочного общества
                  General Reinsurance AG (Рейтинг S&P: AA+ , Рейтинг Moody's:
                  Aal)
                </Heading>
              </div>
            </div>
          </div>
          <div className="w-[24%] mlg:w-full">
            <div className={cn(styles.item, "overflow-hidden h-[95%]")}>
              <div className="flex flex-col">
                <div className={styles.item__text}>
                  <Heading component="h3" className="mb-[6px]">
                    Сертификаты
                  </Heading>
                  <Heading component="p">
                    {/* Lorem ipsum dolor sit amet consectetur. Nulla nunc congue
                    viverra in. Scelerisque morbi facilisis ullamcorper sed ac
                    mauris risus. Ac tempus fermentum laoreet diam. Vitae amet
                    mauris ac nec viverra nibh porta. */}
                    Перестраховочная защита
                  </Heading>
                </div>
                <Image
                  className={cn(
                    styles.img,
                    "relative top-[3.5rem] mlg:top-[0.5rem]"
                  )}
                  alt="tg"
                  src={image}
                />
              </div>
            </div>
          </div>
          <div className="w-[24%] mlg:w-full">
            <div className={styles.item}>
              <div className={styles.item__text}>
                <Heading component="h3" className="mb-[6px]">
                  Лицензия
                </Heading>
                <Heading component="p">
                  Наша компания является участником Фонда гарантирования
                  страховых выплат.
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
