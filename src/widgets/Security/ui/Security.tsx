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
                <h2 className={cn("mb-[6px]", styles.card__info)}>
                  Финансовые показатели
                </h2>
                <div className={styles.download}>Скачать</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__text}>
                <h2 className={cn("mb-[6px]", styles.card__info)}>Лицензия</h2>
                <div className={styles.download}>Скачать</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__text}>
                <h2 className={cn("mb-[6px]", styles.card__info)}>
                  Сертификаты Соотвествия
                </h2>
                <div className={styles.download}>Скачать</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__text}>
                <h2 className={cn("mb-[6px]", styles.card__info)}>
                  Справка о гос. регистрации
                </h2>

                <div className={styles.download}>Скачать</div>
              </div>
            </div>
          </div>
          <div className="w-[24%] mlg:w-full">
            <div className={cn(styles.item, "overflow-hidden h-[96.5%]")}>
              <div className="flex flex-col">
                <div className={styles.item__text}>
                  <h2 className={cn("mb-[6px]", styles.card__info)}>
                    Фонд гарантирования страховых выплат
                  </h2>
                  <Heading component="p">
                    Наша компания является участником Фонда гарантирования
                    страховых выплат
                  </Heading>
                  <div className={styles.download}>Скачать</div>
                </div>
                <Image
                  className={cn(
                    styles.img,
                    "relative top-[3rem] mlg:top-[0.5rem]"
                  )}
                  priority={true}
                  alt="tg"
                  src={image}
                />
              </div>
            </div>
          </div>
          <div className="w-[24%] mlg:w-full">
            <div className={cn(styles.item, "h-[96.5%]")}>
              <div className={styles.item__text}>
                <h2 className={cn("mb-[6px]", styles.card__info)}>
                  Перестраховочная защита
                </h2>
                <Heading component="p">
                  Дополнительная защита от немецкого перестраховочного общества
                  General Reinsurance AG (Рейтинг S&P: AA+ , Рейтинг Moody`s:
                  Aal)
                </Heading>
                <div className={styles.download}>Скачать</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
