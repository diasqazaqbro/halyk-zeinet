import LogoDesktop from "@/shared/ui/Icon/Logo/LogoDesk";
import styles from "./styles.module.scss";
import Link from "next/link";
import LogoMob from "@/shared/ui/Icon/Logo/LogoMob";

export default function Footer() {
  const data = [
    { name: "Главная", link: "/" },
    { name: "Аннуитет", link: "#annuity" },
    { name: "ОППВ", link: "#oppv" },
    { name: "Калькулятор", link: "#calculator" },
    { name: "FAQ", link: "#faq" },
    { name: "Выгоды", link: "#benefits" },
  ];
  return (
    <footer className={styles.footer}>
      <div className="container flex justify-between items-center">
        <div className={styles.right}>
          <div className="sm:hidden block">
            <LogoDesktop />
          </div>
          <div className="hidden sm:block">
            <LogoMob />
          </div>
          <div className="flex flex-col gap-2.5">
            <p className={styles.rel}>+7 (705) 994 41 55</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <span style={{cursor: 'pointer'}} className={styles.main}>Лицензия</span>
            <span style={{cursor: 'pointer'}} className={styles.main}>Пенсионный аннуитет</span>
            <span style={{cursor: 'pointer'}} className={styles.main}>Правила страхования</span>
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
