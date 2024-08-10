import LogoDesktop from "@/shared/ui/Icon/Logo/LogoDesk";
import styles from "./styles.module.scss";
import Link from "next/link";
import LogoFooterMob from "@/shared/ui/Icon/Logo/LogoFooterMob";

export default function Footer() {
  const data = [
    { name: "Главная", link: "/" },
    { name: "Аннуитет", link: "/" },
    { name: "ОППВ", link: "/" },
    { name: "Калькулятор", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Выгоды", link: "/" },
  ];
  return (
    <footer className={styles.footer}>
      <div className="container flex justify-between items-center">
        <div className={styles.right}>
          <div className="sm:hidden block">
            <LogoDesktop />
          </div>
          <div className="hidden sm:block">
            <LogoFooterMob />
          </div>
          <div className="flex flex-col gap-2.5">
            <p className={styles.rel}>anel.sareken@mail.ru</p>
            <p className={styles.rel}>+7 (700) 635 63 35</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className={styles.main}>Лицензия</span>
            <span className={styles.main}>Пенсионный аннуитет</span>
            <span className={styles.main}>Правила страхования</span>
          </div>
        </div>
        <div className={styles.left}>
          {data.map((item, index) => (
            <Link className={styles.links} key={index} href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <p className={styles.copyright}>© 2024 Halykzeinet.kz</p>
    </footer>
  );
}
