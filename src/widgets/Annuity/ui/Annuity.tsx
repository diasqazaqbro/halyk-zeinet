import Image from "next/image";
import styles from "./styles.module.scss";
import MainImage from "./assets/image.png";
import Heading from "@/shared/ui/Typography/Heading/Heading";

export default function Annuity() {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <Image className={styles.img} src={MainImage} alt="annuity" />
          <div className={styles.texts}>
            <Heading component="h1">Что такое пенсионный аннуитет?</Heading>
            <h1 className={styles.title}></h1>
            <p className={styles.description}>
              Аннуитет — это финансовый продукт, который обеспечивает вам
              регулярные выплаты на протяжении всей жизни в обмен на один
              крупный взнос или серию взносов. Это как договор, по которому вы
              платите деньги заранее, а потом получаете деньги обратно
              регулярно, как зарплату, на протяжении всей жизни.
            </p>

            <div className={styles.button__container}>
              <div className={styles.button__title}>
                На ее примере <br /> мы разберемся
              </div>
              <button className={styles.button__circle}>
                <svg
                  width="17"
                  height="30"
                  viewBox="0 0 17 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L14.2929 14.2929C14.6834 14.6834 14.6834 15.3166 14.2929 15.7071L2 28"
                    stroke="#FAAE17"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
